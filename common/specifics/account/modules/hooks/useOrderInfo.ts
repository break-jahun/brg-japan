import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { GRADING_ORDER } from '@/common/types/grading/gradingOrder';
import {
  ServiceOrderDetailProps,
  ServiceOrderProcessingStatus,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import dayjs from 'dayjs';
import { Bank } from '@tosspayments/payment__types/types/models/Bank';
import useDateUtils from '@/common/modules/hooks/useDateUtils';

export function useOrderInfoTranslation() {
  const { t, i18n } = useTranslation();

  /**
   * @remarks 은행 코드에 따른 은행명을 반환합니다.
   * @param bank 가상계좌 객체에 있는 은행코드
   * @returns 은행명
   */
  const setBankName = useCallback(
    (bank: Bank): string => {
      switch (bank) {
        case '광주':
          return t('tossPayments/bank/gwangjubank');
        case '국민':
          return t('tossPayments/bank/kookmin');
        case '기업':
          return t('tossPayments/bank/ibk');
        case '농협':
          return t('tossPayments/bank/nonghyeop');
        case '대구':
          return t('tossPayments/bank/daegubank');
        case '부산':
          return t('tossPayments/bank/busanbank');
        case '산업':
          return t('tossPayments/bank/kdb');
        case '새마을':
          return t('tossPayments/bank/saemaul');
        case '산림':
          return t('tossPayments/bank/sanlim');
        case '수협':
          return t('tossPayments/bank/suhyeop');
        case '신한':
          return t('tossPayments/bank/shinhan');
        case '신협':
          return t('tossPayments/bank/shinhyup');
        case '씨티':
          return t('tossPayments/bank/citi');
        case '우리':
          return t('tossPayments/bank/woori');
        case '우체국':
          return t('tossPayments/bank/post');
        case '저축':
          return t('tossPayments/bank/savingbank');
        case '전북':
          return t('tossPayments/bank/jeonbukbank');
        case '제주':
          return t('tossPayments/bank/jejubank');
        case '카카오':
          return t('tossPayments/bank/kakaobank');
        case '케이':
          return t('tossPayments/bank/kbank');
        case '토스':
          return t('tossPayments/bank/tossbank');
        case '하나':
          return t('tossPayments/bank/hana');
        case 'SC제일':
          return t('tossPayments/bank/sc');
        default:
          return t('tossPayments/bank/gwangjubank');
      }
    },
    [t]
  );

  /**
   * @remarks 가상계좌 결제 주문의 입금 안내 문구를 반환합니다.
   * @param order
   * @returns 입금 기한 및 입금 계좌 | '입금 기한이 만료되었습니다' | '-'
   */
  const setVirtualAccountMainText = useCallback(
    (order: ServiceOrderDetailProps): string => {
      if (
        order.payment?.virtualAccount &&
        order.payment?.status === 'WAITING_FOR_DEPOSIT'
      ) {
        const virtualAccountBank = order.payment?.virtualAccount.bank;
        const virtualAccountNumber =
          order.payment?.virtualAccount.accountNumber;
        const formattedDueDate = dayjs(
          order.payment?.virtualAccount.dueDate,
          'YYYY-MM-DD HH:mm'
        ).format('YYYY-MM-DD HH:mm');
        // 한/영 번역의 어순차이로 인해 언어로 분기점을 나눴습니다. + 한국 === 대만
        if (i18n.language === 'en') {
          return `Please complete your wire transfer by ${formattedDueDate}\n(${setBankName(
            virtualAccountBank
          )} ${virtualAccountNumber})`;
        }
        return `${formattedDueDate} ${t('까지입금해주세요')}\n(${setBankName(
          virtualAccountBank
        )} ${virtualAccountNumber})`;
      }
      return '-';
    },
    [i18n.language, setBankName, t]
  );

  const getProductOrderMainText = useCallback(
    (order: ServiceOrderDetailProps) => {
      const orderStatus = order.serviceOrderStatus as any;
      if (orderStatus === 'CANCELLED') {
        return t('account/order/cancel-notice');
      }
      if (orderStatus === 'PAYMENT_COMPLETE') {
        return t('general/payment-complete');
      }
      if (orderStatus === 'REFUNDED') {
        return t('general/refund-complete');
      }

      if (orderStatus === 'SHIPPING_OUT') {
        return t('general/product-shipped-delivered');
      }
      if (orderStatus === 'SHIPPING_OUT_COMPLETE') {
        return t('general/product-delivered');
      }
      return t('general/error-order-information');
    },
    [t]
  );

  const getGradingOrderMainText = useCallback(
    (order: ServiceOrderDetailProps) => {
      const orderStatus = order.serviceOrderStatus as any;
      const orderProcessingStatus = order.serviceOrderProcessingStatus;
      if (orderStatus === GRADING_ORDER.STATUS.CANCELLED) {
        return t('account/order/cancel-notice');
      }
      if (orderStatus === 'DEADLINE_EXPIRED') {
        return t('account/order/payment-deadline-expired-cancel-notice');
      }
      if (orderProcessingStatus === 'NOT_PROCESSING') {
        return setVirtualAccountMainText(order);
      }
      if (
        orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS
          .OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION
      ) {
        return orderStatus === 'WRONG_REFUND_ACCOUNT'
          ? `${t('환불받으실계좌정보를수정해주세요')}\n(${t(
              '환불은심사가불가능한카드대상입니다'
            )})`
          : t('account-grading-order/order-notice-01');
      }
      if (
        orderProcessingStatus ===
        GRADING_ORDER.PROCESSING_STATUS.BREAK_SHIPPING_BEFORE_PICKUP
      ) {
        return orderStatus === 'WRONG_REFUND_ACCOUNT'
          ? `${t('환불받으실계좌정보를수정해주세요')}\n(${t(
              '환불은심사가불가능한카드대상입니다'
            )})`
          : t('account-grading-order/order-notice-04');
      }
      if (
        orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN
      ) {
        return t('account-grading-order/order-notice-06');
      }
      if (
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN_COMPLETE &&
        order.estimatedServiceCompleteDate
      ) {
        return t('account-grading-order/order-notice-08');
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
        return orderStatus === 'WRONG_REFUND_ACCOUNT'
          ? `${t('환불받으실계좌정보를수정해주세요')}\n(${t(
              '환불은심사가불가능한카드대상입니다'
            )})`
          : t('account-grading-order/order-notice-13');
      }
      if (
        order.shippingStartDate &&
        orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.WAREHOUSE_OUT
      ) {
        return t('account-grading-order/order-notice-15');
      }
      if (
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT &&
        order.shippingStartDate
      ) {
        return t('account-grading-order/delivery-notice-02');
      }
      if (
        order.shippingCompleteDate &&
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT_COMPLETE &&
        order.estimatedServiceCompleteDate
      ) {
        return t('account-grading-order/delivery-notice-04');
      }
      return t('account-grading-order/order-info-error');
    },
    [setVirtualAccountMainText, t]
  );

  return {
    getProductOrderMainText,
    getGradingOrderMainText,
    setBankName,
  };
}

export default function useOrderInfo(serviceType: ServiceType = 'GRADING') {
  const { t } = useTranslation();
  const { getDate, getDateWithDay, getDateWithYear } = useDateUtils();
  const { getProductOrderMainText, getGradingOrderMainText } =
    useOrderInfoTranslation();

  const getOrderMainText = useCallback(
    (order: ServiceOrderDetailProps) => {
      if (!order) throw new Error('Order not exists');
      if (serviceType === 'EVENT') {
        return getProductOrderMainText(order);
      }

      return getGradingOrderMainText(order);
    },
    [getGradingOrderMainText, getProductOrderMainText, serviceType]
  );

  const getOrderStatusText = useCallback(
    (order: ServiceOrderDetailProps) => {
      if (!order) throw new Error('Order not exists');
      const orderStatus = order.serviceOrderStatus;
      const orderProcessingStatus = order.serviceOrderProcessingStatus;

      if (orderStatus === GRADING_ORDER.STATUS.CANCELLED) {
        return t('general/cancel-complet2');
      }
      if (orderStatus === GRADING_ORDER.STATUS.DEADLINE_EXPIRED) {
        return t('account/order/payment-deadline-expired');
      }
      if (
        orderProcessingStatus === GRADING_ORDER.PROCESSING_STATUS.NOT_PROCESSING
      ) {
        return t('general/payment-pending');
      }
      if (
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_IN_COMPLETE &&
        order.estimatedServiceCompleteDate
      ) {
        return `${t('account-grading-order/order-notice-09')}: ${getDate(
          order.estimatedServiceCompleteDate
        )}`;
      }
      if (
        [
          GRADING_ORDER.PROCESSING_STATUS
            .CARD_CORRESPOND_CHECKED as ServiceOrderProcessingStatus,
          GRADING_ORDER.PROCESSING_STATUS.VSC_CHECKED,
          GRADING_ORDER.PROCESSING_STATUS.CARD_DEFECT_CHECKED,
          GRADING_ORDER.PROCESSING_STATUS.CARD_SCORED,
          GRADING_ORDER.PROCESSING_STATUS.CASING_COMPLETE,
        ].includes(orderProcessingStatus) &&
        order.estimatedServiceCompleteDate
      ) {
        return `${t('account-grading-order/order-notice-09')}: ${getDate(
          order.estimatedServiceCompleteDate
        )}`;
      }
      if (
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT &&
        order.shippingStartDate
      ) {
        return `${t('account-grading-order/delivery-notice-05')}:${
          getDateWithDay(order.shippingStartDate) ?? t('general/undetermined')
        }`;
      }
      if (
        order.shippingCompleteDate &&
        orderProcessingStatus ===
          GRADING_ORDER.PROCESSING_STATUS.SHIPPING_OUT_COMPLETE &&
        order.estimatedServiceCompleteDate
      ) {
        return `${t('general/delivery-complet')}:${getDateWithDay(
          order.shippingCompleteDate
        )}`;
      }
      return '-';
    },
    [t, getDate, getDateWithDay]
  );

  const getOrderDate = useCallback(
    (order: ServiceOrderDetailProps) => {
      return getDateWithYear(order.createdAt ?? '');
    },
    [getDateWithYear]
  );
  return {
    getOrderStatusText,
    getOrderMainText,
    getOrderDate,
  };
}
