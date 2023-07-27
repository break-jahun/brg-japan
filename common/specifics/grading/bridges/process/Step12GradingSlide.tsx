import useGetProcess12StepSummary from '@/specifics/grading/modules/hooks/useGetProcess12StepSummary';
import { useMediaQuery, useTheme, Box, Typography, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Step12GradingSlideProps {}

function Step12GradingSlide() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const step12Summary = useGetProcess12StepSummary();

  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <Box style={{ width: '100vw' }}>
      <Slider {...settings}>
        {step12Summary.map((step) => (
          <Box
            key={step.title}
            width={1}
            padding="16px"
            sx={{
              [theme.breakpoints.down('sm')]: {
                padding: '32px 16px',
                alignItems: 'center',
              },
            }}
          >
            <Box
              sx={{
                boxShadow: '0 8px 24px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 3.0px )',
              }}
              borderRadius="10px"
              border="1px solid rgba( 255, 255, 255, 0.05 )"
              height="240px"
              margin="auto"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
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
              <Box
                padding="16px 0px"
                width="100%"
                display="flex"
                justifyContent="center"
              >
                <Typography
                  variant="body2"
                  color="gray_700"
                  align="center"
                  fontWeight={700}
                  sx={{ wordBreak: 'keep-all', width: ['80%', '75%'] }}
                >
                  <b>{step.description}</b>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Step12GradingSlide;
