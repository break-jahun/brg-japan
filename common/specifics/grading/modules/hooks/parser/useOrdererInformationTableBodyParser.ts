import { MemberAttributes } from '@/common/types/user/member';
import { useTranslation } from 'react-i18next';

const useOrdererInformationTableBodyParser = (
  user: MemberAttributes | undefined
) => {
  const { t } = useTranslation();

  const userName = `${t('payment-20')}: ${user?.mbName}`;
  const userNumber = `${t('payment-21')}: ${user?.mbPhone}`;
  const requiredSelfCertification = t('payment-6');

  return { userName, userNumber, requiredSelfCertification };
};

export default useOrdererInformationTableBodyParser;
