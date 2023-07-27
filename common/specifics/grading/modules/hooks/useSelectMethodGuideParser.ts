import { PaymentMethod } from '@/common/types/payment';
import { useTranslation } from 'react-i18next';

type PaymentMethodInfo = {
  [key in PaymentMethod]?: string;
};

const useSelectMethodGuideParser = () => {
  const { t } = useTranslation();

  const getPaymentMethodSelectionText = (
    paymentMethod: PaymentMethod
  ): string => {
    const translatedMethod: PaymentMethodInfo = {
      CARD: t('tossPayments/payment-method/card-selected'),
      VIRTUAL_ACCOUNT: t(
        'tossPayments/payment-method/virtual-account-selected'
      ),
      GIFT_CARD: t('tossPayments/payment-method/gift-card-pay-selected'),
      TOSS_PAY: t('tossPayments/payment-method/toss-pay-selected'),
      CONNECT_PAY: t('tossPayments/payment-method/quick-pay-selected'),
      KAKAO_PAY: t('kakaopay/payment-method/selected'),
      PHONE: t('tossPayments/payment-method/mobile-payment-selected'),
      ACCOUNT_TRANSFER: t('tossPayments/payment-method/wire-transfer-selected'),
    };

    return translatedMethod[paymentMethod] || '';
  };

  const formNextStep = t('payment/form/next-step');

  return {
    getPaymentMethodSelectionText,
    formNextStep,
  };
};

export default useSelectMethodGuideParser;
