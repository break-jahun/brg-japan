import {
  ServiceOrderDetailProps,
  ServiceOrderProcessingStatus,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import { GRADING_ORDER } from '@/common/types/grading/gradingOrder';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  order: ServiceOrderDetailProps | undefined;
  serviceType: ServiceType;
}
function useServiceOrderProcessParser({ order, serviceType }: Props) {
  const { t } = useTranslation();

  const validSteps = useMemo(() => {
    if (!order) {
      return [];
    }

    const serviceTypeLabels = {
      GRADING: t('general/grading'),
      REHOLDER: t('general/reholder'),
      EVENT: t('general/event'),
    };
    const allSteps = [
      {
        status: 'PAYMENT_COMPLETE',
        step: 0,
        label: t('general/payment-complet'),
      },
      {
        status: 'PENDING',
        step: 0,
        label: t('general/payment-pending-status'),
      },
      {
        status: 'DELIVERY_IN_PROGRESS',
        step: 1,
        label: t('general/collecting'),
      },
      {
        status: serviceType,
        step: 2,
        label: serviceTypeLabels[serviceType],
      },
      {
        status: 'DELIVERY_OUT_PROGRESS',
        step: 3,
        label: t('general/delivery-ing'),
      },
      {
        status: 'DELIVERY_COMPLETE',
        step: 4,
        label: t('general/delivery-complet'),
      },
    ];

    const steps = allSteps.slice();

    const orderStatus = order.serviceOrderStatus;
    const orderProcessingStatus = order.serviceOrderProcessingStatus;

    if (
      order &&
      (orderStatus === 'WAITING_FOR_DEPOSIT' ||
        orderStatus === 'DEADLINE_EXPIRED' ||
        (orderStatus === 'CANCELLED' &&
          orderProcessingStatus === 'NOT_PROCESSING'))
    ) {
      steps.splice(0, 1);
    } else {
      steps.splice(1, 1);
    }
    return steps;
  }, [order, serviceType, t]);

  const stepText = useMemo(() => {
    if (!order) {
      return '';
    }
    const orderStatus = order.serviceOrderStatus;
    const orderProcessingStatus = order.serviceOrderProcessingStatus;

    if (orderStatus === GRADING_ORDER.STATUS.CANCELLED) {
      return t('general/order-canceled');
    }
    if (orderStatus === GRADING_ORDER.STATUS.DEADLINE_EXPIRED) {
      return t('account/order/payment-deadline-expired-notice');
    }
    if (
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.NOT_PROCESSING
    ) {
      return t('account/order/payment-pending-notice');
    }
    if (
      orderProcessingStatus ===
      GRADING_ORDER.PROCESSING_STATUS
        .OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION
    ) {
      return t('account-grading-order/order-normal-complet');
    }
    if (
      orderProcessingStatus ===
      GRADING_ORDER.PROCESSING_STATUS.BREAK_SHIPPING_BEFORE_PICKUP
    ) {
      return t('account-grading-order/order-normal-complet');
    }
    if (orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN) {
      return t('account-grading-order/order-notice-05');
    }
    if (
      orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN_COMPLETE &&
      order.estimatedServiceCompleteDate
    ) {
      if (order.serviceOrderType === 'REHOLDER') {
        return t('account-reholder-order/order-notice-07');
      }
      return t('account-grading-order/order-notice-07');
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
      return t('account-grading-order/order-notice-11');
    }
    if (
      order.shippingStartDate &&
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.WAREHOUSE_OUT
    ) {
      return t('account-grading-order/order-notice-14');
    }
    if (
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT &&
      order.shippingStartDate
    ) {
      return t('account-grading-order/delivery-notice-01');
    }
    if (
      order.shippingCompleteDate &&
      orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT_COMPLETE &&
      order.estimatedServiceCompleteDate
    ) {
      return t('general/thanks');
    }
    return '';
  }, [order, t]);

  const activeStep = useMemo(() => {
    if (!order) return 0;
    const orderStatus = order.serviceOrderStatus;
    const orderProcessingStatus = order.serviceOrderProcessingStatus;

    if (orderStatus === GRADING_ORDER.STATUS.CANCELLED) {
      return 0;
    }
    if (orderStatus === GRADING_ORDER.STATUS.DEADLINE_EXPIRED) {
      return 0;
    }
    if (
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.NOT_PROCESSING
    ) {
      return 0;
    }
    if (
      orderProcessingStatus ===
      GRADING_ORDER.PROCESSING_STATUS
        .OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION
    ) {
      return 1;
    }
    if (
      orderProcessingStatus ===
      GRADING_ORDER.PROCESSING_STATUS.BREAK_SHIPPING_BEFORE_PICKUP
    ) {
      return 1;
    }
    if (orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN) {
      return 1;
    }
    if (
      orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN_COMPLETE &&
      order.estimatedServiceCompleteDate
    ) {
      return 2;
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
      return 2;
    }
    if (
      order.shippingStartDate &&
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.WAREHOUSE_OUT
    ) {
      return 3;
    }
    if (
      orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT &&
      order.shippingStartDate
    ) {
      return 3;
    }
    if (
      order.shippingCompleteDate &&
      orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT_COMPLETE &&
      order.estimatedServiceCompleteDate
    ) {
      return 4;
    }
    return 0;
  }, [order]);
  return {
    title: order ? order.serviceOrderType : '',
    stepText,
    activeStep,
    validSteps,
  };
}

export default useServiceOrderProcessParser;
