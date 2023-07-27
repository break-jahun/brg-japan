import { useTranslation } from 'react-i18next';
import { GNBLayout } from '@/common/bridges/Layout';

import PageGradientBackgroundTitle from '@/specifics/grading/components/PageGradientBackgroundTitle';
import FourStepSubMissionSection from '@/specifics/grading/bridges/pricing/FourStepSubMissionSection';
import PricingInfoSection from '@/specifics/grading/components/PricingInfoSection';
import Container from '@/specifics/grading/components/Container';

function PricingPage() {
  const { t } = useTranslation();

  return (
    <GNBLayout>
      <Container>
        <PageGradientBackgroundTitle
          title="EASY TO SUBMIT"
          description={t('grading/main/4step-quick-apply')}
        />
        <FourStepSubMissionSection />
        <PricingInfoSection />
      </Container>
    </GNBLayout>
  );
}

export default PricingPage;
