import { Grid } from '@mui/material';
import useGetHolderAndLabelSummary from '@/specifics/grading/modules/hooks/useGetHolderAndLabelSummary';
import IconTitleDescriptionCard from '@/specifics/grading/bridges/holderAndLabel/IconTitleDescriptionCard';

function IntroIconTitleDescriptionSection() {
  const { introSummary } = useGetHolderAndLabelSummary();

  return (
    <Grid container component="section">
      {introSummary.map((summary) => (
        <IconTitleDescriptionCard
          key={summary.title}
          title={summary.title}
          icon={<summary.icon fontSize="large" />}
          description={summary.description}
        />
      ))}
    </Grid>
  );
}

export default IntroIconTitleDescriptionSection;
