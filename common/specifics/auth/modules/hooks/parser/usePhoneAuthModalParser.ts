import { useTranslation } from 'react-i18next';

const usePhoneAuthModalParser = () => {
  const { t } = useTranslation();

  const title = t('profile-19');
  const notice1 = t('profile-20');
  const notice2 = t('profile-21');
  const notice3 = t('profile-22');

  return {
    title,
    notice1,
    notice2,
    notice3,
  };
};

export default usePhoneAuthModalParser;
