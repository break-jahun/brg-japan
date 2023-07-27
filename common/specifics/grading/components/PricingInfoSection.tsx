import { useTranslation } from 'react-i18next';
import { Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import PricingCard from '@/specifics/grading/components/PricingCard';
import FadeIn from '@/specifics/grading/components/FadeIn';
import useGetHolderAndLabelSummary from '@/specifics/grading/modules/hooks/useGetHolderAndLabelSummary';
import AutoGradeTooltip from '@/specifics/grading/bridges/holderAndLabel/AutoGradeTooltip';
import SectionTitle from '@/specifics/grading/components/SectionTitle';

interface PricingInfoSectionProps {
  showApplyButton?: boolean;
}

function PricingInfoSection({
  showApplyButton = true,
}: PricingInfoSectionProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { pricingInfoSectionSummary } = useGetHolderAndLabelSummary();

  return (
    <Box component="section" padding="48px 20px" bgcolor="white">
      <SectionTitle sx={{ padding: '16px 0px' }}>PRICING</SectionTitle>
      <Box
        padding="8px 0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          align="center"
          paragraph
          fontWeight={700}
          sx={{ wordBreak: 'keep-all' }}
        >
          REASONABLE PRICE
          <br />
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ wordBreak: 'keep-all' }}
        >
          {t('grading/main/brg-info-17')}
        </Typography>
      </Box>

      <FadeIn>
        <Box
          width={1}
          margin="0 auto"
          padding="24px 0"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="960px"
        >
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            {pricingInfoSectionSummary.map((summary) => {
              return (
                <PricingCard
                  key={summary.title}
                  {...summary}
                  showApplyButton={showApplyButton}
                />
              );
            })}
          </Grid>
        </Box>
      </FadeIn>
      <Box
        marginTop="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        columnGap="4px"
      >
        <Typography variant="body1" align="center" fontWeight={700}>
          {t('grading/main/brg-is-auto')}
        </Typography>
        <AutoGradeTooltip />
      </Box>
    </Box>
  );
}

export default PricingInfoSection;
