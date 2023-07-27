import { useTranslation } from 'react-i18next';

const useFormSubmitButtonParser = () => {
  const { t } = useTranslation();

  const generalSave = t('submit-56');

  return {
    generalSave,
  };
};

export default useFormSubmitButtonParser;
