import useDetectMobileDevice from '@/common/modules/hooks/useDetectMobile';
import { shippingAddressState } from '@/common/modules/recoil/address';
import {
  gradingOrderState,
  isServiceAgreementCheckedState,
  paymentMethodState,
  refundAccountState,
  totalAmountState,
  totalQtState,
} from '@/common/modules/recoil/gradingOrder';
import { PickUnion } from '@/common/types/common';
import { PaymentMethod } from '@/common/types/payment';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { useKakaoPayReadyMutation } from '@/specifics/grading/modules/apihooks/useKakaoPayQuery';
import useGradingOrderLimiterQuery from '@/specifics/grading/modules/hooks/useGetOrderLimitQuery';
import { BrandPayInstance, loadBrandPay } from '@tosspayments/brandpay-sdk';
import {
  loadTossPayments,
  TossPaymentsInstance,
} from '@tosspayments/payment-sdk';
import { PaymentMethodType } from '@tosspayments/payment__types';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef } from 'react';
import { composeInitialProps, useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import useItemSummary from '@/common/modules/hooks/useItemSummary';
import { gradingSubmitTypeState } from '@/specifics/grading/modules/recoil/apply';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';

type TossPaymentMethod = PickUnion<
  PaymentMethod,
  'CARD' | 'VIRTUAL_ACCOUNT' | 'ACCOUNT_TRANSFER' | 'PHONE' | 'TOSS_PAY'
>;

const tossPaymentsMethodList: TossPaymentMethod[] = [
  'CARD',
  'VIRTUAL_ACCOUNT',
  'ACCOUNT_TRANSFER',
  'PHONE',
  'TOSS_PAY',
];

interface UsePaymentProps {
  serviceType: ServiceType;
}

const usePayment = ({ serviceType }: UsePaymentProps) => {
  const SUCCESS_URL = `${window.location.origin}/grading/submit/payment/success`;
  const FAIL_URL = `${window.location.origin}/grading/submit/payment/fail`;
  const AUTH_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/connectpayAuth`;

  const router = useRouter();
  const { t } = useTranslation();
  const { isMobile } = useDetectMobileDevice();
  const { refetch: getOrderLimit } = useGradingOrderLimiterQuery({
    enabled: false,
  });

  const tossPayments = useRef<TossPaymentsInstance>();
  const brandPay = useRef<BrandPayInstance>();

  const { data: user } = useGetUserInfoQuery();
  const { mutate: kakaoPayReadyMutate } = useKakaoPayReadyMutation();

  const shippingAddress = useRecoilValue(shippingAddressState);
  const isServiceAgreementChecked = useRecoilValue(
    isServiceAgreementCheckedState
  );
  const gradingOrder = useRecoilValue(gradingOrderState);
  const refundAccount = useRecoilValue(refundAccountState);
  const paymentMethod = useRecoilValue(paymentMethodState);
  const totalAmount = useRecoilValue(totalAmountState);
  const totalQt = useRecoilValue(totalQtState);

  const prefixOfId = `${serviceType === 'REHOLDER' ? 'reholder' : 'grading'}`;

  const { itemSummary } = useItemSummary({
    orderItems: gradingOrder.gradingOrderItems,
    serviceType,
  });

  const orderName = useMemo(() => {
    if (itemSummary.length && itemSummary[0].content.length) {
      const { quantity, name } = itemSummary[0].content[0];

      const restQt = totalQt - Number(quantity);
      let text = `${itemSummary[0].name} ${name} ${quantity} ${t(
        'general/a-sheet'
      )}`;
      if (restQt > 0) {
        text += ` 외 ${restQt}${t('general/a-sheet')}`;
      }
      return text;
    }
    return '';
  }, [totalQt, itemSummary, t]);

  const validateOrderLimit = async () => {
    const { data, error } = await getOrderLimit();

    if (!data) {
      alert(error);
      return false;
    }

    const isGradingLimitOver = data.currentOrders + totalQt > data.orderLimit;

    if (isGradingLimitOver) {
      alert(t('grading/payment/fail-over-quantity'));
      return false;
    }

    return true;
  };

  const validateFormFilled = () => {
    if (!shippingAddress) {
      alert(t('grading/payment/address'));
      return false;
    }
    if (!user?.isAuthorized) {
      alert(t('grading/payment/Self-certification'));
      return false;
    }
    if (!isServiceAgreementChecked) {
      alert(t('grading/payment/agree-terms-and-conditions'));
      return false;
    }

    return true;
  };

  const validateVirtualAccountForm = () => {
    if (!refundAccount.accountNumber) {
      alert(t('account/order-cancel/virtualAccount-confirm-number'));
      return false;
    }
    if (!refundAccount.holderName) {
      alert(t('account/order-cancel/virtualAccount-enter-name'));
      return false;
    }
    if (!refundAccount.accountNumber.match(/^[0-9]+$/)) {
      // 숫자만 가능(띄어쓰기 불가)
      alert(t('account/order-cancel/virtualAccount-confirm-number'));
      return false;
    }
    if (
      !refundAccount.holderName.match(
        /^[a-zA-Z가-힇ㄱ-ㅎㅏ-ㅣぁ-ゔァ-ヴー々〆〤一-龥\s]+$/
      )
    ) {
      // 한국어, 영어, 일어, 한자, 띄어쓰기만 가능
      alert(t('account/order-cancel/virtualAccount-confirm-name'));
      return false;
    }

    return true;
  };

  const moveToPaymentStep = async () => {
    if (!validateFormFilled()) {
      return;
    }

    const isOrderLimitValidated = await validateOrderLimit();
    if (!isOrderLimitValidated) {
      return;
    }

    if (totalAmount === 0) {
      alert(t('grading/payment/can-not-found-total-amount'));
      router.push('/grading/submit');
      return;
    }

    if (paymentMethod === 'KAKAO_PAY') {
      const path = `${window.location.origin}/kakaopay${
        isMobile ? '' : '/popup'
      }`;

      kakaoPayReadyMutate({
        partner_order_id: `${prefixOfId}_${user?.id}_${new Date().getTime()}`,
        partner_user_id: `${user?.id}`,
        item_name: orderName,
        quantity: totalQt,
        total_amount: totalAmount,
        tax_free_amount: 0,
        approval_url: `${path}/approve`,
        cancel_url: `${path}/cancel`,
        fail_url: `${path}/fail`,
      });

      return;
    }

    if (tossPaymentsMethodList.includes(paymentMethod as TossPaymentMethod)) {
      if (
        paymentMethod === 'VIRTUAL_ACCOUNT' &&
        !validateVirtualAccountForm()
      ) {
        return;
      }

      if (!tossPayments.current) {
        window.location.reload();
        return;
      }

      const body = {
        amount: totalAmount,
        orderId: `${prefixOfId}_${user?.id}_${new Date().getTime()}`,
        successUrl: SUCCESS_URL,
        failUrl: FAIL_URL,
        orderName,
      };

      if (paymentMethod === 'TOSS_PAY') {
        tossPayments.current
          .requestPayment('TOSSPAY' as PaymentMethodType, body)
          .catch((error) => {
            const { code } = error;
            if (code === 'INVALID_REQUEST') {
              alert(t('general/wrong-access'));
            }
          });
        return;
      }

      if (paymentMethod === 'PHONE') {
        tossPayments.current
          .requestPayment('MOBILE_PHONE' as PaymentMethodType, body)
          .catch((error) => {
            const { code } = error;
            if (code === 'INVALID_REQUEST') {
              alert(t('general/wrong-access'));
            }
          });
        return;
      }

      if (paymentMethod === 'ACCOUNT_TRANSFER') {
        tossPayments.current
          .requestPayment('TRANSFER' as PaymentMethodType, body)
          .catch((error) => {
            const { code } = error;
            if (code === 'INVALID_REQUEST') {
              alert(t('general/wrong-access'));
            }
          });
        return;
      }

      tossPayments.current
        .requestPayment(paymentMethod as PaymentMethodType, body)
        .catch((error) => {
          const { code } = error;
          if (code === 'INVALID_REQUEST') {
            alert(t('general/wrong-access'));
          }
        });
      return;
    }

    if (paymentMethod === 'CONNECT_PAY') {
      if (!brandPay.current) {
        window.location.reload();
        return;
      }

      const prefix = serviceType === 'REHOLDER' ? 'reholder' : 'grading';

      brandPay.current
        .requestPayment({
          amount: totalAmount,
          orderId: `${prefix}_${user?.id}_${new Date().getTime()}`,
          successUrl: SUCCESS_URL,
          failUrl: FAIL_URL,
          orderName,
        })
        .catch((error) => {
          const { code } = error;
          if (code === 'INVALID_REQUEST') {
            alert(t('general/wrong-access'));
          }
        });
    }
  };

  useEffect(() => {
    const load = async () => {
      if (!user) {
        return;
      }

      const tossPaymentInstance = await loadTossPayments(
        process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY as string
      );
      const brandPayInstance = await loadBrandPay(
        process.env.NEXT_PUBLIC_CONNECTPAY_CLIENT_KEY as string,
        user.id.toString(),
        {
          redirectUrl: AUTH_URL,
        }
      );
      tossPayments.current = tossPaymentInstance;
      brandPay.current = brandPayInstance;
    };

    load();
  }, [AUTH_URL, user]);

  return { moveToPaymentStep };
};

export default usePayment;
