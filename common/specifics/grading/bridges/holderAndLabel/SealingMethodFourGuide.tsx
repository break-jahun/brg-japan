import { Grid, Box, Typography, Container } from '@mui/material';

interface SealingMethodFourGuideProps {
  guideNumber: string;
  title: string;
  description: string;
}

function SealingMethodFourGuide({
  guideNumber,
  title,
  description,
}: SealingMethodFourGuideProps) {
  return (
    <Grid item xs={12} sm={3}>
      <Box minHeight="220px" padding={{ xs: '8px', sm: '16px' }}>
        <Box
          maxHeight="130px"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            width="50px"
            height="50px"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundImage: `linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)`,
            }}
          >
            <Typography color="white" variant="h6" fontWeight={700}>
              {guideNumber}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80px"
          >
            <Typography
              color="white"
              variant="body1"
              align="center"
              fontWeight={700}
              sx={{ wordBreak: 'keep-all', whiteSpace: 'pre-wrap' }}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <Box
          padding="0px 8px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Container maxWidth="xs">
            <Typography
              color="white"
              variant="body1"
              align="center"
              sx={{ wordBreak: 'keep-all' }}
            >
              {description}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Grid>
  );
}

export default SealingMethodFourGuide;
