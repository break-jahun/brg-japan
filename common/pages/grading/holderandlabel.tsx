import { GNBLayout } from '@/common/bridges/Layout';

import IntroIconTitleDescriptionSection from '@/specifics/grading/bridges/holderAndLabel/IntroIconTitleDescriptionSection';
import BrgScaleContentSection from '@/specifics/grading/bridges/holderAndLabel/BrgScaleContentSection';
import TwoColorDescriptionSection from '@/specifics/grading/bridges/holderAndLabel/TwoColorDescriptionSection';
import SealingMethodGuideSection from '@/specifics/grading/bridges/holderAndLabel/SealingMethodGuideSection';
import PricingInfoSection from '@/specifics/grading/components/PricingInfoSection';
import MainSlide from '@/specifics/grading/bridges/holderAndLabel/MainSlide';
import Container from '@/specifics/grading/components/Container';

function HolderAndLabelPage() {
  return (
    <GNBLayout>
      <Container>
        <MainSlide />
        <IntroIconTitleDescriptionSection />
        <BrgScaleContentSection />
        <TwoColorDescriptionSection />
        <SealingMethodGuideSection />
        <PricingInfoSection />
      </Container>
    </GNBLayout>
  );
}

export default HolderAndLabelPage;
