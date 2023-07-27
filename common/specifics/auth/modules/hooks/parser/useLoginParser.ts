import { useTranslation } from 'react-i18next';

function useLoginParser() {
  const { t } = useTranslation();

  const emailValidation = t('signup/alert/verification-failed-email');
  const emailRequired = t('signup/required/email');
  const passwordRequired = t('signup/required/password');
  const emailLabel = t('signup/label/email');
  const emailPlaceholder = t('signup/placeholder/email');
  const passwordLabel = t('signup/label/password');
  const passwordPlaceholder = t('signup/placeholder/password');
  const keepLogin = t('login/label/keep-login');
  const findPassword = t('login/label/find-password');
  const login = t('login/title');
  const snsLogin = t('login/login-with-sns-account');
  const notYetMember = t('login/typo/not-yet-member');
  const simpleSignUp = t('login/simple-signup');
  const keepSnsAccount = t(
    'login/confirm/do-you-want-to-keep-yout-login-to-sns-account'
  );
  const failFacebookAccount = t('login/error/facebook/fail-account');
  const failKakaoAccount = t('login/error/kakao/fail-account');

  return {
    emailValidation,
    emailRequired,
    passwordRequired,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    keepLogin,
    findPassword,
    login,
    snsLogin,
    notYetMember,
    simpleSignUp,
    keepSnsAccount,
    failFacebookAccount,
    failKakaoAccount,
  };
}

export default useLoginParser;
