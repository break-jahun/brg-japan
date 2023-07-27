import usePricingParser from '@/specifics/grading/modules/hooks/parser/pricing/usePricingParser';
import { fourStepSummaryType } from '@/specifics/grading/modules/types/summary';

function useGetPricingStepSummary() {
  const stepText = usePricingParser();

  const fourStepSummary: fourStepSummaryType[] = [
    {
      title: 'STEP 01',
      description: stepText.stepText1,
      image: '/images/step_01.png',
    },
    {
      title: 'STEP 02',
      description: stepText.stepText2,
      image: '/images/step_02.png',
    },
    {
      title: 'STEP 03',
      description: stepText.stepText3,
      image: '/images/step_03.png',
    },
    {
      title: 'STEP 04',
      description: stepText.stepText4,
      image: '/images/step_04.png',
    },
  ];

  return fourStepSummary;
}

export default useGetPricingStepSummary;
