import { useTranslation } from 'react-i18next';
import { GNBLayout } from '@/common/bridges/Layout';

import PageGradientBackgroundTitle from '@/specifics/grading/components/PageGradientBackgroundTitle';
import UnbiasedGradingSection from '@/specifics/grading/bridges/process/UnbiasedGradingSection';
import Step12GradingSection from '@/specifics/grading/bridges/process/Step12GradingSection';
import TheMappingSection from '@/specifics/grading/bridges/process/TheMappingSection';
import VSCSection from '@/specifics/grading/bridges/process/VSCSection';
import GradingSubmitSection from '@/specifics/grading/components/GradingSubmitSection';
import Container from '@/specifics/grading/components/Container';

function ProcessPage() {
  const { t } = useTranslation();
  return (
    <GNBLayout>
      <Container>
        <PageGradientBackgroundTitle
          title="CONSISTENT OVERALL GRADE"
          description={t('grading/main/brg-info-9')}
        />
        <UnbiasedGradingSection />
        <Step12GradingSection />
        <TheMappingSection />
        <VSCSection />
        <GradingSubmitSection />
      </Container>
    </GNBLayout>
  );
}

export default ProcessPage;
