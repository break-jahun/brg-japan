import { useTranslation } from 'react-i18next';

const useNoAddressParser = () => {
  const { t } = useTranslation();

  const addressNotRegistered = t('payment/address/not-registered');
  const addressJeju = t('payment/address/jeju');

  return {
    addressNotRegistered,
    addressJeju,
  };
};

export default useNoAddressParser;
