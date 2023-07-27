import { Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import BlackGradientBackground from '@/specifics/grading/components/BlackGradientBackground';
import FadeIn from '@/specifics/grading/components/FadeIn';
import useGetPricingStepSummary from '@/specifics/grading/modules/hooks/useGetPricingStepSummary';
import SectionTitle from '@/specifics/grading/components/SectionTitle';

function FourStepSubMissionSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const fourStepSummary = useGetPricingStepSummary();

  return (
    <BlackGradientBackground>
      <Box>
        <SectionTitle color="white">4 STEP SUBMISSION</SectionTitle>
        <FadeIn>
          <Box padding="32px 20px" maxWidth="960px" margin="0 auto">
            <Grid container justifyContent="center" alignItems="center">
              {fourStepSummary.map((summary) => (
                <Grid item xs={6} sm={3}>
                  <Box
                    py={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Box
                      width={isMobile ? '100px' : '150px'}
                      height={isMobile ? '100px' : '150px'}
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        backgroundImage: `linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)`,
                      }}
                    >
                      <img
                        width={isMobile ? '40px' : '50px'}
                        alt="logo"
                        src={summary.image}
                      />
                    </Box>

                    <Box pt={3}>
                      <Typography
                        variant="h5"
                        align="center"
                        color="white"
                        fontWeight={700}
                      >
                        {summary.title}
                      </Typography>

                      <Typography
                        variant="h6"
                        align="center"
                        color="gray_3"
                        sx={{ wordBreak: 'keep-all' }}
                      >
                        {summary.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeIn>
      </Box>
    </BlackGradientBackground>
  );
}

export default FourStepSubMissionSection;
