import { useTranslation } from 'react-i18next';

const useAddressListItemParser = (memo: string | undefined) => {
  const { t } = useTranslation();

  const generalModify = t('profile-51');
  const generalDelete = t('profile-52');
  const parsedMemo = `${t('profile-50')}: ${memo ?? ''}`;

  return {
    generalModify,
    generalDelete,
    memo: parsedMemo,
  };
};

export default useAddressListItemParser;
