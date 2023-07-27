import { AddressAttributes } from '@/common/types/user/address';
import { useTranslation } from 'react-i18next';

const useShippingAddressTableBodyParser = (
  gradingOrderAddress: AddressAttributes | null
) => {
  const { t } = useTranslation();

  const title = `${t('payment-15')}: ${gradingOrderAddress?.title}`;

  const address = `${t('payment-16')}: ${gradingOrderAddress?.address}`;

  const receiver = `${t('payment-17')}: ${gradingOrderAddress?.name ?? ''} (${
    gradingOrderAddress?.phone ?? ''
  })`;

  const memo = `${t('payment-18')}: ${
    gradingOrderAddress?.memo ?? t('general/no-memo')
  }`;

  const jejuGuide = t('payment/address/jeju');

  return {
    title,
    address,
    memo,
    receiver,
    jejuGuide,
  };
};

export default useShippingAddressTableBodyParser;
