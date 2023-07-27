import { useTranslation } from 'react-i18next';

const usePhoneAuthModalButtonParser = () => {
  const { t } = useTranslation();

  const generalClose = t('general/close');

  return {
    generalClose,
  };
};

export default usePhoneAuthModalButtonParser;
