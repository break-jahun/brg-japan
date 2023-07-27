import { useTranslation } from 'react-i18next';

function useSignUpCompleteParser() {
  const { t } = useTranslation();

  const welcome = t('signupcomplete/approved/welcome');
  const sendingEmail = t('signupcomplete/not-approved/sending-email');
  const checkYourSpam = t('signupcomplete/not-approved/check-your-spam');
  const certifyYourEmail = t('signupcomplete/not-approved/certify-your-email');
  const goLogin = t('login/label/go-to-login');

  return {
    welcome,
    sendingEmail,
    checkYourSpam,
    certifyYourEmail,
    goLogin,
  };
}

export default useSignUpCompleteParser;
