import { useMemo, useRef, useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import SliderArrowButton from '@/common/components/slider/SliderArrowButton';
import { useTranslation } from 'react-i18next';

function HolderSlider() {
  const { t } = useTranslation();

  const HOLDER_SLIDER_LIST = useMemo(() => {
    return [
      {
        id: 1,
        title: t('홀더슬라이더1타이틀'),
        description: t('홀더슬라이더1설명'),
        image: '/images/gradingIntroDetail/holder_slide_1.png',
      },
      {
        id: 2,
        title: t('홀더슬라이더2타이틀'),
        description: t('홀더슬라이더2설명'),
        image: '/images/gradingIntroDetail/holder_slide_2.png',
      },
      {
        id: 3,
        title: t('홀더슬라이더3타이틀'),
        description: t('홀더슬라이더3설명'),
        image: '/images/gradingIntroDetail/holder_slide_3.png',
      },
      {
        id: 4,
        title: t('홀더슬라이더4타이틀'),
        description: t('홀더슬라이더4설명'),
        image: '/images/gradingIntroDetail/holder_slide_4.png',
      },
    ];
  }, [t]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    speed: 500,
    arrows: false,
    scrollToShow: 1,
    scrollToSlide: 1,
    infinite: false,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next + 1);
    },
  };

  const handlePrevClick = () => {
    if (!sliderRef.current || currentIndex === 1) {
      return;
    }
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    if (!sliderRef.current || currentIndex === 4) {
      return;
    }
    sliderRef.current.slickNext();
  };

  return (
    <Box>
      <Slider {...settings} ref={sliderRef}>
        {HOLDER_SLIDER_LIST.map((list) => (
          <Box key={list.id}>
            <Box
              key={list.id}
              width={1}
              height={{ xs: '224px', sm: '180px' }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              padding={{ xs: '40px 16px', sm: '40px 32px' }}
              sx={{
                backgroundImage: `url(${list.image})`,
                backgroundSize: { xs: '220% auto', sm: 'cover' },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                align="center"
                color="white"
                fontWeight={isMobile ? 700 : 600}
                height={{ xs: '56px', sm: '36px' }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {list.title}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="white"
                height={{ xs: '72px', sm: '48px' }}
                whiteSpace="break-spaces"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {list.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
      <SliderArrowButton
        currentIndex={currentIndex}
        totalCount={4}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        sx={{
          bottom: { xs: '32px', sm: '112px' },
        }}
      />
    </Box>
  );
}

export default HolderSlider;
