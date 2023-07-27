import { useTranslation } from 'react-i18next';

const usePhoneAuthModalFormParser = () => {
  const { t } = useTranslation();

  const countryCode = t('profile-23');
  const countryCode82 = t('phone/auth/country-code/82');
  const countryKorea = t('phone/auth/country/korea');
  const countryTaiwan = t('profile-24');
  const phoneNumber = t('profile-25');
  const receiveAuthNumber = t('profile-26');
  const authNumber = t('profile-27');
  const inputAuthNumber = t('profile-28');
  const generalAccept = t('profile-29');

  return {
    countryCode,
    countryCode82,
    countryKorea,
    phoneNumber,
    receiveAuthNumber,
    authNumber,
    inputAuthNumber,
    generalAccept,
  };
};

export default usePhoneAuthModalFormParser;
