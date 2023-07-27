import { useTranslation } from 'react-i18next';

const useFindPasswordParser = () => {
  const { t } = useTranslation();

  const guide1 = t('login/find-password/info-1');
  const guide2 = t('login/find-password/info-2');
  const guide3 = t('login/find-password/info-3');
  const inputLabel = t('signup/label/email');
  const inputPlaceholder = t('signup/placeholder/email');
  const sendEmail = t('login/find-password/send-mail');
  const goBackLoginPage = t('login/find-password/go-back-to-login');
  const emailValidation = t('signup/alert/verification-failed-email');
  const emailRequired = t('signup/required/email');
  return {
    guide1,
    guide2,
    guide3,
    inputLabel,
    inputPlaceholder,
    sendEmail,
    goBackLoginPage,
    emailValidation,
    emailRequired,
  };
};

export default useFindPasswordParser;
