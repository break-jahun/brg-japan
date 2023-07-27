import { PaymentAttributes, PaymentMethod } from '@/common/types/payment';
import i18n from 'brg-japan/translation/i18n';

/**
 * @remarks gradingOrder.payment.status 따른 결제 상태 text를 반환합니다.
 * @param payment - PaymentAttributes
 * @returns 결제 상태 text
 */
export function getPaymentStatus(payment: PaymentAttributes): string {
  switch (payment.status) {
    // 아임토트 status
    case 'cancelled':
      return i18n.t('general/cancel-complet3');
    case 'paid':
      return i18n.t('general/payment-complet2');
    case 'ready':
      return i18n.t('general/waiting-for-deposit');
    // 토스페이먼츠 status
    case 'WAITING_FOR_DEPOSIT':
      return i18n.t('general/waiting-for-deposit');
    case 'DONE':
      return i18n.t('general/payment-complet2');
    case 'CANCELED':
      return i18n.t('general/cancel-complet3');
    case 'PARTIAL_CANCELED': // 부분 취소 완료 -> 추후 사용 가능성 있어 추가만 해놓은 상태입니다.
      return i18n.t('general/cancel-complet3');
    case 'DEADLINE_EXPIRED':
      return i18n.t('account/order/payment-deadline-expired');
    // 카카오페이
    case 'SUCCESS_PAYMENT':
      return i18n.t('general/payment-complet2');
    case 'CANCEL_PAYMENT':
      return i18n.t('general/cancel-complet3');
    case 'PART_CANCEL_PAYMENT':
      return i18n.t('general/partial-cancel-complet');
    default:
      return i18n.t('general/unidentified');
  }
}

/**
 * @remarks 결제 수단에 따른 text를 반환하는 함수입니다.
 * @param paymentMethod
 * @returns 결제 수단에 해당하는 text
 */
export function getPaymentMethodText(
  paymentMethod: PaymentMethod | undefined
): string {
  switch (paymentMethod) {
    case 'CARD':
      return i18n.t('payment/method/normal');
    case 'VIRTUAL_ACCOUNT':
      return i18n.t('tossPayments/payment-method/virtual-account');
    case 'ACCOUNT_TRANSFER':
      return i18n.t('tossPayments/payment-method/wire-transfer');
    case 'PHONE':
      return i18n.t('tossPayments/payment-method/mobile-payment');
    case 'GIFT_CARD':
      return i18n.t('tossPayments/payment-method/gift-card-pay');
    case 'TOSS_PAY':
      return i18n.t('tossPayments/payment-method/toss-pay');
    case 'CONNECT_PAY':
      return i18n.t('tossPayments/payment-method/quick-pay');
    case 'KAKAO_PAY':
      return i18n.t('payment/method/kakao-pay');
    case 'NAVER_PAY':
      return i18n.t('payment/method/naver-pay');
    case 'PAYPAL':
      return 'paypal';
    case 'NORMAL': // 아임포트에서 사용했던 카드결제 - 기존 주문건들의 결제 수단 표시를 위해 남겨놓았습니다.
      return i18n.t('payment/method/normal');
    case 'CASH': // 아임포트에서 사용했던 실시간 계좌이체 - 기존 주문건들의 결제 수단 표시를 위해 남겨놓았습니다.
      return i18n.t('payment/method/account-transfer');
    default:
      return i18n.t('general/not-selected-payment-method');
  }
}

/**
 * @remarks 선택한 결제 수단을 안내하는 문구를 반환합니다.
 * @example 카드결제를 선택하셨습니다.
 * @param paymentMethod
 * @returns 선택한 결제 수단 안내 문구
 */
export function getPaymentMethodSelectionText(
  paymentMethod: PaymentMethod | undefined
): string {
  switch (paymentMethod) {
    case 'CARD':
      return i18n.t('tossPayments/payment-method/card-selected');
    case 'VIRTUAL_ACCOUNT':
      return i18n.t('tossPayments/payment-method/virtual-account-selected');
    case 'ACCOUNT_TRANSFER':
      return i18n.t('tossPayments/payment-method/wire-transfer-selected');
    case 'PHONE':
      return i18n.t('tossPayments/payment-method/mobile-payment-selected');
    case 'GIFT_CARD':
      return i18n.t('tossPayments/payment-method/gift-card-pay-selected');
    case 'TOSS_PAY':
      return i18n.t('tossPayments/payment-method/toss-pay-selected');
    case 'CONNECT_PAY':
      return i18n.t('tossPayments/payment-method/quick-pay-selected');
    case 'KAKAO_PAY':
      return i18n.t('kakaopay/payment-method/selected');
    default:
      return i18n.t('general/not-selected-payment-method');
  }
}
