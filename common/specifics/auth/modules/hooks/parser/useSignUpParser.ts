import { useTranslation } from 'react-i18next';

function useSignUpParser() {
  const { t } = useTranslation();

  const nameRequired = t('signup/required/name');
  const nameValidation = t('signup/alert/verification-failed-name');
  const emailRequired = t('signup/required/email');
  const emailValidation = t('signup/alert/verification-failed-email');
  const passwordRequired = t('signup/required/password');
  const passwordValidation = t('signup/alert/verification-failed-password');
  const passwordDifferent = t(
    'signup/alert/password-and-password-verification-are-different'
  );
  const pleaseCheck = t('signup/alert/please-check-the-terms');
  const signupSuccess = t('signup/alert/registration-completed');
  const nameLabel = t('signup/label/name');
  const namePlaceholder = t('signup/placeholder/name');
  const emailLabel = t('signup/label/email');
  const emailPlaceholder = t('signup/placeholder/email');
  const passwordLabel = t('signup/label/password');
  const passwordPlaceholder = t('signup/placeholder/password');
  const passwordConfirmLabel = t('signup/label/confirm-password');
  const passwordConfirmPlaceholder = t('signup/label/confirm-password');
  const allCheck = t('signup/agreement/check-all');
  const over14CheckLabel = t('signup/agreement/over14/checkbox');
  const viewAll = t('general/view-all');
  const agreementTermsOfService = t('signup/agreement/terms-of-service');
  const agreementPrivacy = t('signup/agreement/privacy-policy');
  const signup = t('signup/title');

  const snsSignUp = t('signup/signup-with-sns-account');
  const alreadyMember = t('signup/typo/already-member');
  const login = t('login/title');

  const failFacebookAccount = t('login/error/facebook/fail-account');
  const failKakaoAccount = t('login/error/kakao/fail-account');

  return {
    nameRequired,
    nameValidation,
    emailRequired,
    emailValidation,
    passwordRequired,
    passwordValidation,
    passwordDifferent,
    pleaseCheck,
    signupSuccess,
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    passwordConfirmLabel,
    passwordConfirmPlaceholder,
    allCheck,
    over14CheckLabel,
    viewAll,
    agreementTermsOfService,
    agreementPrivacy,
    signup,
    snsSignUp,
    login,
    alreadyMember,

    failFacebookAccount,
    failKakaoAccount,
  };
}

export default useSignUpParser;
