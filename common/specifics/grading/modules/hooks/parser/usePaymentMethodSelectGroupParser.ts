import { useTranslation } from 'react-i18next';

const usePaymentMethodSelectGroupParser = () => {
  const { t } = useTranslation();

  const title = t('payment-9');
  const quickPay = t('tossPayments/payment-method/quick-pay');
  const card = t('tossPayments/payment-method/card');
  const accountTransfer = t('tossPayments/payment-method/wire-transfer');
  const virtualAccount = t('tossPayments/payment-method/virtual-account');
  const mobilePayment = t('tossPayments/payment-method/mobile-payment');
  const tossPay = t('tossPayments/payment-method/toss-pay');
  const kakaoPay = t('payment/method/kakao-pay');

  return {
    title,
    quickPay,
    card,
    accountTransfer,
    virtualAccount,
    mobilePayment,
    tossPay,
    kakaoPay,
  };
};

export default usePaymentMethodSelectGroupParser;
