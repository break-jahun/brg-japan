import { useTranslation } from 'react-i18next';

function useEmailVerificationParser() {
  const { t } = useTranslation();

  const emailVerification = t('email-verification/email-authentication');
  const goBack = t('general/go-back');
  const wrongAccess = t('general/wrong-access');

  return {
    emailVerification,
    goBack,
    wrongAccess,
  };
}

export default useEmailVerificationParser;
