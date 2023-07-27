import useDateUtils from '@/common/modules/hooks/useDateUtils';
import { GRADING_ORDER } from '@/common/types/grading/gradingOrder';
import {
  ServiceOrderDetailProps,
  ServiceOrderProcessingStatus,
} from '@/common/types/serviceOrder/serviceOrder';
import { OrderInfoContainer } from '@/specifics/account/components/OrderDetail/OrderInfoContainer';
import { Box, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function useOrderDeliveryMessageParser(order: ServiceOrderDetailProps) {
  const { t } = useTranslation();
  const { getDateWithYMD, getDateWithDay } = useDateUtils();

  const {
    estimatedServiceCompleteDate,
    serviceOrderProcessingStatus: orderProcessingStatus,
  } = order;

  const calculateShippingStartDate = useCallback(
    (orderParam: ServiceOrderDetailProps): string | undefined => {
      if (orderParam.serviceCompleteDate) {
        const completeDate = new Date(orderParam.serviceCompleteDate);
        if (completeDate.getHours() < 14) {
          completeDate.setDate(completeDate.getDate());
        } else {
          completeDate.setDate(completeDate.getDate() + 1);
        }
        return getDateWithDay(completeDate.toString());
      }
      return '';
    },
    [getDateWithDay]
  );

  const deliveryMessage = useMemo(() => {
    if (
      orderProcessingStatus ===
      GRADING_ORDER.PROCESSING_STATUS.BREAK_SHIPPING_BEFORE_PICKUP
    ) {
      return t('account-grading-order/order-notice-04');
    }
    if (
      orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN_COMPLETE &&
      estimatedServiceCompleteDate
    ) {
      if (order.serviceOrderType === 'REHOLDER') {
        return `${t('account-reholder-order/order-notice-10')}: ${
          getDateWithYMD(estimatedServiceCompleteDate) ??
          t('general/undetermined')
        }`;
      }
      return `${t('account-grading-order/order-notice-10')}: ${
        getDateWithYMD(estimatedServiceCompleteDate) ??
        t('general/undetermined')
      }`;
    }
    if (
      [
        GRADING_ORDER.PROCESSING_STATUS
          .CARD_CORRESPOND_CHECKED as ServiceOrderProcessingStatus,
        GRADING_ORDER.PROCESSING_STATUS
          .VSC_CHECKED as ServiceOrderProcessingStatus,
        GRADING_ORDER.PROCESSING_STATUS
          .CARD_DEFECT_CHECKED as ServiceOrderProcessingStatus,
        GRADING_ORDER.PROCESSING_STATUS
          .CARD_SCORED as ServiceOrderProcessingStatus,
        GRADING_ORDER.PROCESSING_STATUS
          .CASING_COMPLETE as ServiceOrderProcessingStatus,
      ].includes(orderProcessingStatus) &&
      estimatedServiceCompleteDate
    ) {
      if (order.serviceOrderType === 'REHOLDER') {
        return `${t('account-reholder-order/order-notice-10')}: ${
          getDateWithYMD(estimatedServiceCompleteDate) ??
          t('general/undetermined')
        }`;
      }
      return `${t('account-grading-order/order-notice-10')}: ${
        getDateWithYMD(estimatedServiceCompleteDate) ??
        t('general/undetermined')
      }`;
    }
    if (
      order.shippingStartDate &&
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.WAREHOUSE_OUT
    ) {
      return `${t('general/start-delivery-schedule-date')}: ${
        calculateShippingStartDate(order) ?? t('general/undetermined')
      }`;
    }
    if (
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT &&
      order.shippingStartDate
    ) {
      return `${t('account-grading-order/delivery-notice-05')}: ${
        getDateWithDay(order.shippingStartDate) ?? t('general/undetermined')
      }`;
    }
    if (
      order.shippingCompleteDate &&
      orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT_COMPLETE &&
      estimatedServiceCompleteDate
    ) {
      return `${t('general/complet-delivery-date')}: ${
        getDateWithDay(order.shippingCompleteDate) ?? t('general/undetermined')
      }`;
    }
    return '';
  }, [
    estimatedServiceCompleteDate,
    order,
    orderProcessingStatus,
    t,
    getDateWithYMD,
    getDateWithDay,
    calculateShippingStartDate,
  ]);
  return {
    deliveryMessage,
  };
}

function OrderDeliveryMessage({ order }: { order: ServiceOrderDetailProps }) {
  const { deliveryMessage } = useOrderDeliveryMessageParser(order);
  return deliveryMessage && deliveryMessage.length > 0 ? (
    <OrderInfoContainer>
      <Box py={2} textAlign="center">
        <Typography variant="body2" fontWeight={700}>
          {deliveryMessage}
        </Typography>
      </Box>
    </OrderInfoContainer>
  ) : null;
}

export default OrderDeliveryMessage;
