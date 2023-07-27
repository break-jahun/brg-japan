import { PaymentAttributes, PaymentMethod } from '@/common/types/payment';
import { useTranslation } from 'react-i18next';

function usePaymentUtil() {
  const { t } = useTranslation();

  function getPaymentStatus(payment: PaymentAttributes): string {
    switch (payment.status) {
      // 아임토트 status
      case 'cancelled':
        return t('general/cancel-complet3');
      case 'paid':
        return t('general/payment-complet2');
      case 'ready':
        return t('general/waiting-for-deposit');
      // 토스페이먼츠 status
      case 'WAITING_FOR_DEPOSIT':
        return t('general/waiting-for-deposit');
      case 'DONE':
        return t('general/payment-complet2');
      case 'CANCELED':
        return t('general/cancel-complet3');
      case 'PARTIAL_CANCELED': // 부분 취소 완료 -> 추후 사용 가능성 있어 추가만 해놓은 상태입니다.
        return t('general/cancel-complet3');
      case 'DEADLINE_EXPIRED':
        return t('account/order/payment-deadline-expired');
      // 카카오페이
      case 'SUCCESS_PAYMENT':
        return t('general/payment-complet2');
      case 'CANCEL_PAYMENT':
        return t('general/cancel-complet3');
      case 'PART_CANCEL_PAYMENT':
        return t('general/partial-cancel-complet');
      default:
        return t('general/unidentified');
    }
  }

  function getPaymentMethodText(
    paymentMethod: PaymentMethod | undefined
  ): string {
    switch (paymentMethod) {
      case 'CARD':
        return t('payment/method/normal');
      case 'VIRTUAL_ACCOUNT':
        return t('tossPayments/payment-method/virtual-account');
      case 'ACCOUNT_TRANSFER':
        return t('tossPayments/payment-method/wire-transfer');
      case 'PHONE':
        return t('tossPayments/payment-method/mobile-payment');
      case 'GIFT_CARD':
        return t('tossPayments/payment-method/gift-card-pay');
      case 'TOSS_PAY':
        return t('tossPayments/payment-method/toss-pay');
      case 'CONNECT_PAY':
        return t('tossPayments/payment-method/quick-pay');
      case 'KAKAO_PAY':
        return t('payment/method/kakao-pay');
      case 'NAVER_PAY':
        return t('payment/method/naver-pay');
      case 'PAYPAL':
        return 'paypal';
      case 'NORMAL': // 아임포트에서 사용했던 카드결제 - 기존 주문건들의 결제 수단 표시를 위해 남겨놓았습니다.
        return t('payment/method/normal');
      case 'CASH': // 아임포트에서 사용했던 실시간 계좌이체 - 기존 주문건들의 결제 수단 표시를 위해 남겨놓았습니다.
        return t('payment/method/account-transfer');
      default:
        return t('general/not-selected-payment-method');
    }
  }

  function getPaymentMethodSelectionText(
    paymentMethod: PaymentMethod | undefined
  ): string {
    switch (paymentMethod) {
      case 'CARD':
        return t('tossPayments/payment-method/card-selected');
      case 'VIRTUAL_ACCOUNT':
        return t('tossPayments/payment-method/virtual-account-selected');
      case 'ACCOUNT_TRANSFER':
        return t('tossPayments/payment-method/wire-transfer-selected');
      case 'PHONE':
        return t('tossPayments/payment-method/mobile-payment-selected');
      case 'GIFT_CARD':
        return t('tossPayments/payment-method/gift-card-pay-selected');
      case 'TOSS_PAY':
        return t('tossPayments/payment-method/toss-pay-selected');
      case 'CONNECT_PAY':
        return t('tossPayments/payment-method/quick-pay-selected');
      case 'KAKAO_PAY':
        return t('kakaopay/payment-method/selected');
      default:
        return t('general/not-selected-payment-method');
    }
  }

  return {
    getPaymentStatus,
    getPaymentMethodText,
    getPaymentMethodSelectionText,
  };
}

export default usePaymentUtil;
