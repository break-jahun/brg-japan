import { useTranslation } from 'react-i18next';

const useAmountTableHeaderParser = () => {
  const { t } = useTranslation();

  const paymentAmount = t('payment-7');

  return { paymentAmount };
};

export default useAmountTableHeaderParser;
