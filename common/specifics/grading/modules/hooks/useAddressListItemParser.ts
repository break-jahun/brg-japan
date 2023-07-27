import { useTranslation } from 'react-i18next';

const useAddressListItemParser = () => {
  const { t } = useTranslation();

  const parseAddressMemo = (memo: string | undefined) =>
    `${t('account/adress/shipping-memo')}: ${memo ?? ''}`;

  return { parseAddressMemo };
};

export default useAddressListItemParser;
