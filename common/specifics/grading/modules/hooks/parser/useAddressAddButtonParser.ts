import { useTranslation } from 'react-i18next';

const useAddressAddButtonParser = () => {
  const { t } = useTranslation();

  const addShippingDestination = t('profile-36');

  return {
    addShippingDestination,
  };
};

export default useAddressAddButtonParser;
