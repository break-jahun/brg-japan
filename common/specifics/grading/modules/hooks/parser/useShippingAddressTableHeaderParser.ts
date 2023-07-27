import { useTranslation } from 'react-i18next';
import { AddressAttributes } from '@/common/types/user/address';

const useShippingAddressTableHeaderParser = (
  address: AddressAttributes | null
) => {
  const { t } = useTranslation();

  const generalAddress = t('payment-1');

  const buttonText = address ? t('payment-19') : t('payment-2');

  return { generalAddress, buttonText };
};

export default useShippingAddressTableHeaderParser;
