import {
  serviceTypeState,
  totalAmountState,
  totalQtState,
} from '@/common/modules/recoil/gradingOrder';
import { kakopayInfoState } from '@/common/modules/recoil/kakaopay';
import { reholderCardListState } from '@/common/modules/recoil/reholder';
import { useKakaoPayApproveMutation } from '@/specifics/grading/modules/apihooks/useKakaoPayQuery';
import useTotalGradingState from '@/specifics/grading/modules/hooks/useTotalPaymentState';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

const ApprovePage = () => {
  const router = useRouter();
  const { gradingOrder, imageIds } = useTotalGradingState();
  const kakaopayInfo = useRecoilValue(kakopayInfoState);
  const totalAmount = useRecoilValue(totalAmountState);
  const totalQt = useRecoilValue(totalQtState);
  const reholderCardList = useRecoilValue(reholderCardListState);
  const serviceType = useRecoilValue(serviceTypeState);

  const pg_token = useMemo(() => {
    if (!router.isReady) {
      return '';
    }
    return router.query.pg_token as string;
  }, [router]);

  const { mutate } = useKakaoPayApproveMutation();

  useEffect(() => {
    if (kakaopayInfo && pg_token) {
      mutate({
        files: imageIds,
        partner_order_id: kakaopayInfo.partner_order_id || '',
        partner_user_id: kakaopayInfo.partner_user_id || '',
        tid: kakaopayInfo.tid || '',
        total_amount: totalAmount,
        pg_token,
        gradingOrder,
        order: {
          addressId: gradingOrder.addressId || -1,
          cautionAgreement: gradingOrder.cautionAgreement || false,
          currency: gradingOrder.currency || 'KRW',
          orderType: 'REHOLDER',
          paymentMethod: gradingOrder.paymentMethod || 'CONNECT_PAY',
          totalAmount,
          totalQt,
          shippingMethod: gradingOrder.shippingMethod || 'SELF_SHIPPING',
          orderItems: reholderCardList?.map((item, index) => ({
            amount: item.amount,
            cardCategory: item.cardCategory,
            correspondCheck: item.correspondCheck,
            gradingOrderItemId: item.id,
            price: item.price,
            serial: item.serial,
          })),
        },
        serviceType,
        orderId: kakaopayInfo?.partner_order_id ?? '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pg_token]);

  return null;
};

export default ApprovePage;
