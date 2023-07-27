import { Grid } from '@mui/material';
import useGetHolderAndLabelSummary from '@/specifics/grading/modules/hooks/useGetHolderAndLabelSummary';
import SealingMethodFourGuide from '@/specifics/grading/bridges/holderAndLabel/SealingMethodFourGuide';
import BlackGradientBackground from '@/specifics/grading/components/BlackGradientBackground';

function SealingMethodGuideSection() {
  const { sealingMethodGuideSummary } = useGetHolderAndLabelSummary();

  return (
    <BlackGradientBackground>
      <Grid container alignItems="baseline" justifyContent="center">
        {sealingMethodGuideSummary.map((summary) => (
          <SealingMethodFourGuide
            key={summary.title}
            guideNumber={summary.guideNumber}
            title={summary.title}
            description={summary.description}
          />
        ))}
      </Grid>
    </BlackGradientBackground>
  );
}

export default SealingMethodGuideSection;
