import Link from 'next/link';
import {
  Grid,
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useHolderAndLabelParser from '@/specifics/grading/modules/hooks/parser/holderAndLabel/useHolderAndLabelParser';

const slideImages = [
  {
    source: '/images/slide/grading_slide_01.png',
    mobileSource: '/images/slide/m_grading_slide_01.png',
  },
  {
    source: '/images/slide/grading_slide_02.jpeg',
    mobileSource: '/images/slide/m_grading_slide_02.png',
  },
  {
    source: '/images/slide/grading_slide_03.jpeg',
    mobileSource: '/images/slide/m_grading_slide_03.png',
  },
  {
    source: '/images/slide/grading_slide_04.jpeg',
    mobileSource: '/images/slide/m_grading_slide_04.png',
  },
];

interface MainSlideProps {
  showApplyButton?: boolean;
}

function MainSlide({ showApplyButton = true }: MainSlideProps) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { slideText } = useHolderAndLabelParser();

  const settings = {
    dots: !isMobile,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    style: {
      width: '100vw',
      height: '101%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
  };

  return (
    <Box
      bgcolor="white"
      height={{ xs: '650px', sm: 'auto' }}
      paddingBottom={{ xs: 0, sm: '40px' }}
      sx={{
        [theme.breakpoints.down('sm')]: {
          background:
            'linear-gradient(to top, rgba(0,0,0,0.01) 0%,rgba(0,0,0,70) 25%, rgba(0,0,0,100) 100% )',
        },
      }}
    >
      <Slider {...settings}>
        {slideImages.map((src) => {
          return (
            <Box key={`slide_${src.source}_img`} sx={{ height: '100%' }}>
              <Box
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    position: 'absolute',
                    top: 0,
                    width: '100vw',
                    height: '50%',
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.01) 0%,rgba(0,0,0,70) 100%, rgba(0,0,0,100) 100% )',
                  },
                }}
              />
              <img
                style={{ width: '100%', height: '100%', zIndex: 100 }}
                alt="slide images"
                src={isMobile ? src.mobileSource : src.source}
              />
            </Box>
          );
        })}
      </Slider>

      <Box
        position="absolute"
        top={{ xs: '150px', sm: '13vw' }}
        display="flex"
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        flexDirection="column"
        marginLeft={{ xs: 0, sm: '60px' }}
        width={{ xs: '100%', sm: 'auto' }}
      >
        <Box
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <img
            alt="logo"
            src="/images/brg_logo_w.png"
            width={isMobile ? '50px' : '70px'}
          />
        </Box>
        <Typography
          variant={isMobile ? 'h2' : 'h1'}
          fontWeight={700}
          color="white"
          sx={{ marginBottom: { xs: '16px', sm: '1vw' } }}
        >
          GRADING
        </Typography>

        <Box>
          <Box>
            <Typography
              variant="body2"
              align="center"
              gutterBottom
              color="white"
              sx={{ wordBreak: 'keep-all' }}
            >
              {slideText.slideText1}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              gutterBottom
              color="white"
              sx={{ wordBreak: 'keep-all' }}
            >
              {slideText.slideText2}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            color="white"
            sx={{ wordBreak: 'keep-all' }}
          >
            {slideText.slideText3}
          </Typography>
        </Box>

        {showApplyButton && (
          <Grid
            container
            display="flex"
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            margin={{ xs: '24px 0px', sm: '1vw 0px' }}
          >
            <Link href="/grading/submit" passHref>
              <SubmitButton fullWidth>{slideText.submitText}</SubmitButton>
            </Link>
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default MainSlide;

const SubmitButton = styled(Button)({
  maxWidth: '230px',
  color: 'white',
  backgroundImage: `linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)`,
  boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, 0.1) !important',
  borderRadius: '30px',
  padding: '8px 80px',
  transition: 'background 1s, color 1s',
  fontSize: '20px',
});
