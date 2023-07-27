import { ServiceOrderDetailProps } from '@/common/types/serviceOrder/serviceOrder';
import { GRADING_ORDER_STATUS_INFO } from '@/common/types/grading/gradingOrder';
import { Box, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function useOrderShippingOutCountInfoSection(order: ServiceOrderDetailProps) {
  const { t, i18n } = useTranslation();
  const refundableQt = useMemo((): number => {
    return order && order.serviceOrderItems
      ? order.serviceOrderItems.filter((item) => {
          return (
            Object.prototype.hasOwnProperty.call(item, 'refundable') &&
            item.refundable
          );
        }).length
      : 0;
  }, [order]);

  const nonRefundableQt = useMemo((): number => {
    return order && order.serviceOrderItems
      ? order.serviceOrderItems.filter((item) => {
          return (
            Object.prototype.hasOwnProperty.call(item, 'refundable') &&
            !item.refundable
          );
        }).length
      : 0;
  }, [order]);

  // TODO: 번역에 하단 문구들 추가. 아니면 배송 관련된 문구를 아예 제거하고 "n장의 카드를 그레이딩 완료 하였습니다."로 바꾸는 의견 제시
  const getSummary = useCallback(
    (type?: string) => {
      switch (type) {
        case GRADING_ORDER_STATUS_INFO.AFTER_GRADING_COMPLETE_TYPE
          .GRADING_COMPLETE:
          return t('general/preparing-delivery');
        case GRADING_ORDER_STATUS_INFO.AFTER_GRADING_COMPLETE_TYPE.SHIPPING_OUT:
          return t('장의카드를배송중입니다');
        case GRADING_ORDER_STATUS_INFO.AFTER_GRADING_COMPLETE_TYPE
          .SHIPPING_OUT_COMPLETE:
          return t('장의카드를배송완료하였습니다');
        default:
          return '';
      }
    },
    [t]
  );

  const firstLineText = useMemo(() => {
    return `${t('general/total-orders')} ${order.totalQt}${t(
      'general/among-chapters'
    )}`;
  }, [t, order]);
  // n card(s) {including n card(s) which cannot be graded (refundable/non-refundable)} has(have) been delivered.
  // 그레이딩 불가(환불가능) n장을 포함한 총 /20장의 카드를 배송중입니다.

  const secondLineTextComponent = useMemo(() => {
    const orderCount =
      order && order.serviceOrderItems ? order.serviceOrderItems.length : 0;

    const hasUngradable = !!(refundableQt || nonRefundableQt);

    if (i18n.language === 'en') {
      return (
        <span>
          {`${orderCount} card(s) `}
          {hasUngradable && (
            <>
              including{' '}
              <span style={{ color: 'red', marginLeft: '3px' }}>
                {nonRefundableQt || refundableQt}{' '}
              </span>
              card(s) which cannot be graded (
              {nonRefundableQt ? 'non-refundable' : 'refundable'}){' '}
            </>
          )}
          {getSummary(order.serviceOrderProcessingStatus)}
        </span>
      );
    }

    return (
      <span>
        {hasUngradable && (
          <>
            {nonRefundableQt
              ? '그레이딩 불가(환불불가)'
              : '그레이딩 불가(환불가능)'}
            <span style={{ color: 'red', marginLeft: '3px' }}>
              {nonRefundableQt || refundableQt}
            </span>
            장을 포함한 총{' '}
          </>
        )}
        {orderCount} {getSummary(order.serviceOrderProcessingStatus)}
      </span>
    );
  }, [getSummary, nonRefundableQt, order, refundableQt, i18n.language]);

  return {
    firstLineText,
    secondLineTextComponent,
  };
}
function OrderShippingOutCountInfoSection({
  order,
}: {
  order: ServiceOrderDetailProps;
}) {
  const { firstLineText, secondLineTextComponent } =
    useOrderShippingOutCountInfoSection(order);

  return (
    <Box width={1} textAlign="center" py={2}>
      <Box mb={1}>
        <Typography variant="body2" fontWeight={700}>
          {firstLineText}
        </Typography>
      </Box>
      <Typography variant="caption">{secondLineTextComponent}</Typography>
    </Box>
  );
}

export default OrderShippingOutCountInfoSection;
