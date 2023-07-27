import { useTranslation } from 'react-i18next';

const useModalInputGroupParser = () => {
  const { t } = useTranslation();

  const shippingDestination = t('profile-39');
  const recipent = t('profile-40');
  const phoneNumber = t('profile-41');
  const address = t('profile-43');
  const detailAddress = t('account/adress/detail-address');
  const shippingMemo = t('profile-44');

  return {
    shippingDestination,
    recipent,
    phoneNumber,
    address,
    detailAddress,
    shippingMemo,
  };
};

export default useModalInputGroupParser;
