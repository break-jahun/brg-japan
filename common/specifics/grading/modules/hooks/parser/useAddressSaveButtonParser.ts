import { useTranslation } from 'react-i18next';

const useAddressSaveButtonParser = () => {
  const { t } = useTranslation();

  const changeSelected = t('profile-37');
  const generalSave = t('profile-38');

  return {
    changeSelected,
    generalSave,
  };
};

export default useAddressSaveButtonParser;
