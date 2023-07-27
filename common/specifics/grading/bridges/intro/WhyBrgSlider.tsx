/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { HStack } from '@/common/components/HStack';
import WhyBrgSliderCard from './WhyBrgSliderCard';
import WhyBrgIconButton from './WhyBrgIconButton';

function WhyBrgSlider() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const WHY_BRG_LIST = [
    {
      id: 1,
      title: t('맞춤성'),
      description: t('맞춤성설명문구'),
      image: '/images/slide/why_brg_slide_1.png',
    },
    {
      id: 2,
      title: t('안정성'),
      description: t('안정성설명문구'),
      image: '/images/slide/why_brg_slide_2.png',
    },
    {
      id: 3,
      title: t('객관성'),
      description: t('객관성설명문구'),
      image: '/images/slide/why_brg_slide_3.png',
    },
    {
      id: 4,
      title: t('효율성'),
      description: t('효율성설명문구'),
      image: '/images/slide/why_brg_slide_4.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    speed: 500,
    arrows: false,
    scrollToShow: 1,
    scrollToSlide: 1,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    touchMove: !isMobile,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };

  const handleOnClick = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.slickGoTo(index);
  };

  return (
    <Box width={1} height="480px" position="relative">
      <Slider {...settings} ref={sliderRef}>
        {WHY_BRG_LIST.map((item) => (
          <WhyBrgSliderCard key={item.id} {...item} />
        ))}
      </Slider>
      <MaxWidthLayoutBox
        width={1}
        height="480px"
        position="absolute"
        top={0}
        left="50%"
        sx={{
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
        display="flex"
        justifyContent="space-between"
        padding={{ xs: '0px 0px 0px 16px', sm: '0px 32px 0px 32px' }}
      >
        <HStack marginTop="80px" gap="7px">
          <Typography variant={isMobile ? 'h5' : 'h4'} color="white">
            なぜ
          </Typography>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            color="white"
            fontFamily="Dohyeon"
          >
            brg?
          </Typography>
        </HStack>
        <Box
          display="flex"
          flexDirection="column"
          width="80px"
          paddingTop="80px"
          height={1}
          border="1px solid rgba(255, 255, 255, 0.24)"
          sx={{
            pointerEvents: 'all',
          }}
        >
          <WhyBrgIconButton
            isActive={currentIndex === 0}
            onClick={() => handleOnClick(0)}
          >
            <ZoomOutMapRoundedIcon fontSize="inherit" />
          </WhyBrgIconButton>
          <WhyBrgIconButton
            isActive={currentIndex === 1}
            onClick={() => handleOnClick(1)}
          >
            <LockRoundedIcon fontSize="inherit" />
          </WhyBrgIconButton>
          <WhyBrgIconButton
            isActive={currentIndex === 2}
            onClick={() => handleOnClick(2)}
          >
            <img
              alt="lock_icon"
              src={
                currentIndex === 2
                  ? '/icons/checklist_clicked.png'
                  : '/icons/checklist_unclicked.png'
              }
              width="48px"
              height="48px"
            />
          </WhyBrgIconButton>
          <WhyBrgIconButton
            isActive={currentIndex === 3}
            onClick={() => handleOnClick(3)}
          >
            <FastForwardRoundedIcon fontSize="inherit" />
          </WhyBrgIconButton>
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default WhyBrgSlider;
