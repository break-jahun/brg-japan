import { useTranslation } from 'react-i18next';

function useChangePasswordParser() {
  const { t } = useTranslation();

  const guide1 = t('login/change-password/input-your-new-password');
  const inputLabel = t('login/label/password');
  const passwordChange = t('account/profile/pw-change');
  const goBackLoginPage = t('login/find-password/go-back-to-login');
  const passwordValidation = t('signup/alert/verification-failed-password');
  const passwordRequired = t('signup/required/password');
  return {
    guide1,
    inputLabel,
    passwordChange,
    goBackLoginPage,
    passwordValidation,
    passwordRequired,
  };
}

export default useChangePasswordParser;
