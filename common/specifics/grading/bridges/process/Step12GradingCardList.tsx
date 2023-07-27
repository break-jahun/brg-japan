import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Grid,
  Container,
} from '@mui/material';

import useGetProcess12StepSummary from '@/specifics/grading/modules/hooks/useGetProcess12StepSummary';

function Step12GradingCardList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const step12Summary = useGetProcess12StepSummary();

  return (
    <Container>
      <Box
        width={1}
        padding="16px"
        maxWidth="1280px"
        margin="0 auto"
        sx={{
          [theme.breakpoints.down('sm')]: {
            padding: '32px 16px',
            alignItems: 'center',
          },
        }}
      >
        <Grid container spacing={3} display="flex" justifyContent="center">
          {step12Summary.map((step) => (
            <Grid item xs={6} sm={3} key={step.title}>
              <Box
                sx={{
                  boxShadow: '0 8px 24px 0 rgba( 31, 38, 135, 0.37 )',
                  backdropFilter: 'blur( 3.0px )',
                  borderRadius: '10px',
                  border: '1px solid rgba( 255, 255, 255, 0.05 )',
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                margin="24px"
                padding="16px"
                height="300px"
                bgcolor="white"
              >
                <Typography variant="h6" fontWeight={700}>
                  {step.title}
                </Typography>
                <Box
                  width={isMobile ? '90px' : '120px'}
                  height={isMobile ? '90px' : '120px'}
                  borderRadius="50%"
                  margin="16px"
                >
                  <img width="100%" src={step.image} alt="12 step grading" />
                </Box>
                <Typography
                  variant="body2"
                  color="gray_700"
                  align="center"
                  fontWeight={700}
                  sx={{
                    wordBreak: 'keep-all',
                    width: ['80%', '75%'],
                    padding: '16px 0px',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Step12GradingCardList;
