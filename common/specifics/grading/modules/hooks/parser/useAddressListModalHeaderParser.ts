import { useTranslation } from 'react-i18next';

const useAddressListModalHeaderParser = () => {
  const { t } = useTranslation();

  const manageShippingDestination = t('profile-35');

  return {
    manageShippingDestination,
  };
};

export default useAddressListModalHeaderParser;
