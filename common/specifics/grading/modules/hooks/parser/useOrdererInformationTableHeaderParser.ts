import { MemberAttributes } from '@/common/types/user/member';
import { useTranslation } from 'react-i18next';

const useOrdererInformationTableHeaderParser = (
  userInfo: MemberAttributes | undefined
) => {
  const { t } = useTranslation();

  const orderPersonInfo = t('payment-4');
  const buttonText =
    userInfo?.isAuthorized && userInfo?.mbPhone
      ? t('payment-22')
      : t('general/self-certification');

  return {
    orderPersonInfo,
    buttonText,
  };
};

export default useOrdererInformationTableHeaderParser;
