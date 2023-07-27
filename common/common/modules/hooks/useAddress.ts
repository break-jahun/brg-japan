import { useAddressListQuery } from '@/common/modules/hooks/useAddressQuery';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function useAddress() {
  const { t } = useTranslation();

  const { data: addressList } = useAddressListQuery();

  const defaultKeys = [
    {
      text: t('dashboard-4'),
      value: 'name',
    },
    {
      text: t('dashboard-5'),
      value: 'phone',
    },
    {
      text: t('dashboard-6'),
      value: 'address',
    },
  ];

  const defaultAddress = useMemo(() => {
    return addressList?.find((a) => a.isDefault);
  }, [addressList]);

  return {
    addressList,
    defaultAddress,
    defaultKeys,
  };
}

export default useAddress;
