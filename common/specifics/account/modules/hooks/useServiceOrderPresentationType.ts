import { GRADING_ORDER } from '@/common/types/grading/gradingOrder';
import {
  ServiceOrderDetailProps,
  ServiceOrderProcessingStatus,
  ServiceOrderStatusInfoType,
} from '@/common/types/serviceOrder/serviceOrder';
import { useMemo } from 'react';

function useServiceOrderPresentationType(
  order: ServiceOrderDetailProps | undefined
): {
  presentationType: ServiceOrderStatusInfoType | undefined;
} {
  const presentationType: ServiceOrderStatusInfoType | undefined =
    useMemo(() => {
      if (!order) {
        return undefined;
      }
      const orderStatus = order.serviceOrderStatus;
      const orderProcessingStatus = order.serviceOrderProcessingStatus;
      if (orderStatus === GRADING_ORDER.STATUS.CANCELLED) {
        return 'CANCELLED';
      }
      if (orderStatus === GRADING_ORDER.STATUS.DEADLINE_EXPIRED) {
        return 'CANCELLED'; // 입금기한 만료로 주문이 취소되었으니 'CANCELLED'
      }
      if (
        orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.NOT_PROCESSING
      ) {
        return 'WAITING_FOR_DEPOSIT';
      }
      if (
        orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS
          .OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION
      ) {
        return 'NEED_INVOICE_INPUT';
      }
      if (
        orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.BREAK_SHIPPING_BEFORE_PICKUP
      ) {
        return 'PICKUP_REQUIRED';
      }
      if (
        orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN
      ) {
        return 'SHIPPING_IN';
      }
      if (
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN_COMPLETE &&
        order.estimatedServiceCompleteDate
      ) {
        return 'SHIPPING_IN_COMPLETE';
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
        order.estimatedServiceCompleteDate
      ) {
        return 'GRADING';
      }
      if (
        order.shippingStartDate &&
        orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.WAREHOUSE_OUT
      ) {
        return 'GRADING_COMPLETE';
      }
      if (
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT &&
        order.shippingStartDate
      ) {
        return 'SHIPPING_OUT';
      }
      if (
        order.shippingCompleteDate &&
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT_COMPLETE &&
        order.estimatedServiceCompleteDate
      ) {
        return 'SHIPPING_OUT_COMPLETE';
      }

      return undefined;
    }, [order]);

  return {
    presentationType,
  };
}

export default useServiceOrderPresentationType;
