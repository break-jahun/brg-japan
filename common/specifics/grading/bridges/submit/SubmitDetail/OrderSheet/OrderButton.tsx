import { CommonButton } from '@/common/components/Button';
import { VStack } from '@/common/components/VStack';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { gradingSubmitTypeState } from '@/specifics/grading/modules/recoil/apply';
import { useRecoilValue } from 'recoil';
import { imageIdsState } from '@/common/modules/recoil/image';
import {
  gradingOrderState,
  totalQtState,
  orderTypeState,
} from '@/common/modules/recoil/gradingOrder';
import useGradingOrderLimiterQuery from '@/specifics/grading/modules/hooks/useGetOrderLimitQuery';
import { reholderCardListState } from '@/common/modules/recoil/reholder';
import { useEffect } from 'react';

const TOTAL_QT_LIMIT = 1000;

const OrderButton = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const { data: orderLimitData } = useGradingOrderLimiterQuery();

  const imageIds = useRecoilValue(imageIdsState);
  const submitType = useRecoilValue(gradingSubmitTypeState);
  const gradingOrder = useRecoilValue(gradingOrderState);
  const reholderCardList = useRecoilValue(reholderCardListState);
  const totalQt = useRecoilValue(totalQtState);
  const orderType = useRecoilValue(orderTypeState);

  // BULK 일때 비활성화 되어야 할 조건
  const isDisabledIfBulk = orderType === 'BULK' && gradingOrder.totalQt < 40;

  const handleClick = () => {
    if (submitType === 'REHOLDER') {
      if (!reholderCardList || reholderCardList?.length <= 0) {
        alert(t('submit-106'));
        return;
      }
      router.push('/reholder/submit/shippingMethod');
      return;
    }
    if (submitType === 'SIMPLE') {
      if (imageIds.length <= 0) {
        alert(t('grading/order/upload-photo'));
        return;
      }
      if (!gradingOrder.photoUploadAgreement) {
        alert(t('grading/order/agree-photo-upload'));
        return;
      }
      if (!gradingOrder.noMinGradeAgreement) {
        alert(t('grading/order/agree-no-mingrade'));
        return;
      }
    }

    if (totalQt <= 0) {
      alert(t('submit-106'));
      return;
    }
    if (totalQt > TOTAL_QT_LIMIT) {
      alert(t('grading/order/over-totalQt'));
      return;
    }
    if (
      orderLimitData &&
      orderLimitData.currentOrders + totalQt > orderLimitData.orderLimit
    ) {
      alert(t('grading/order/over-quantity'));
      return;
    }
    router.push('/grading/submit/shippingMethod');
  };

  useEffect(() => {
    router.prefetch('/grading/submit/shippingMethod');
    router.prefetch('/reholder/submit/shippingMethod');
  }, [router]);

  return (
    <VStack
      justifyContent="flex-end"
      sx={{
        gridArea: 'submit',
      }}
    >
      <CommonButton
        sx={{
          width: '100%',
        }}
        disabled={isDisabledIfBulk}
        onClick={handleClick}
      >
        {t('submit-71')}
      </CommonButton>
    </VStack>
  );
};

export default OrderButton;
