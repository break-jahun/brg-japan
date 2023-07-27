import GradingLinkSectionWithLogo from '@/specifics/grading/components/GradingLinkSectionWithLogo';
import { useTranslation } from 'react-i18next';

const GradingLinkSection = () => {
  const { t } = useTranslation();

  return (
    <GradingLinkSectionWithLogo
      description={t('pricing-8')}
      buttonText={t('pricing-9')}
      href="/grading/submit"
    />
  );
};

export default GradingLinkSection;
