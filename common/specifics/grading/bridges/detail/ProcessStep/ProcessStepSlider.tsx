/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider, { CustomArrowProps } from 'react-slick';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { useTranslation } from 'react-i18next';

const useGetProcessStep12List = () => {
  const { t } = useTranslation();

  const PROCESS_STEP12_LIST = [
    {
      step: t('스텝1'),
      description: t('프로세스스텝1설명'),
      image: '/images/processStep12/step_01.png',
    },
    {
      step: t('스텝2'),
      description: t('프로세스스텝2설명'),
      image: '/images/processStep12/step_02.png',
    },
    {
      step: t('스텝3'),
      description: t('프로세스스텝3설명'),
      image: '/images/processStep12/step_03.png',
    },
    {
      step: t('스텝4'),
      description: t('프로세스스텝4설명'),
      image: '/images/processStep12/step_04.png',
    },
    {
      step: t('스텝5'),
      description: t('프로세스스텝5설명'),
      image: '/images/processStep12/step_05.png',
    },
    {
      step: t('스텝6'),
      description: t('프로세스스텝6설명'),
      image: '/images/processStep12/step_06.png',
    },
    {
      step: t('스텝7'),
      description: t('프로세스스텝7설명'),
      image: '/images/processStep12/step_07.png',
    },
    {
      step: t('스텝8'),
      description: t('프로세스스텝8설명'),
      image: '/images/processStep12/step_08.png',
    },
    {
      step: t('스텝9'),
      description: t('프로세스스텝9설명'),
      image: '/images/processStep12/step_09.png',
    },
    {
      step: t('스텝10'),
      description: t('프로세스스텝10설명'),
      image: '/images/processStep12/step_10.png',
    },
    {
      step: t('스텝11'),
      description: t('프로세스스텝11설명'),
      image: '/images/processStep12/step_11.png',
    },
    {
      step: t('스텝12'),
      description: t('프로세스스텝12설명'),
      image: '/images/processStep12/step_12.png',
    },
  ];

  return { PROCESS_STEP12_LIST };
};

const SlickPrevArrow = ({
  currentSlide = 0,
  slideCount: count,
  ...props
}: CustomArrowProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ArrowBackIosNewRoundedIcon
      {...props}
      sx={{
        color: 'black',
        opacity: currentSlide < 1 ? 0.12 : 0.88,
        zIndex: 1,
        left: 25,
        top: { xs: 128, sm: 140 },
        ':hover': {
          color: isMobile ? 'black' : 'black',
          opacity: isMobile ? 1 : 0,
        },
      }}
    />
  );
};

const SlickNextArrow = ({
  currentSlide = 0,
  slideCount: count,
  ...props
}: CustomArrowProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { PROCESS_STEP12_LIST } = useGetProcessStep12List();
  const slideCount = PROCESS_STEP12_LIST.length;

  return (
    <ArrowForwardIosRoundedIcon
      {...props}
      sx={{
        color: 'black',
        opacity: currentSlide === slideCount - 1 ? 0.12 : 0.88,
        zIndex: 1,
        right: 25,
        top: { xs: 128, sm: 140 },
        ':hover': {
          color: isMobile ? 'black' : 'white',
        },
      }}
    />
  );
};

function ProcessStepSlider() {
  const { PROCESS_STEP12_LIST } = useGetProcessStep12List();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const sliderRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    speed: 500,
    arrows: true,
    scrollToShow: 1,
    scrollToSlide: 1,
    infinite: false,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <Box minWidth={{ xs: '100%', sm: '160px' }}>
      <Slider {...settings} ref={sliderRef}>
        {PROCESS_STEP12_LIST.map((list) => (
          <Box key={list.step}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                align="center"
                variant={isMobile ? 'subtitle1' : 'h5'}
                fontWeight={isMobile ? 700 : 600}
                marginBottom="24px"
              >
                {list.step}
              </Typography>
              <img
                alt={`Process ${list.step}`}
                src={list.image}
                width={160}
                height={160}
              />
            </Box>
            <Typography
              align="center"
              variant="subtitle1"
              fontWeight={isMobile ? 700 : 600}
              marginTop="16px"
              marginBottom="24px"
            >
              {list.description}
            </Typography>
          </Box>
        ))}
      </Slider>
      <Typography align="center" sx={{ opacity: 0.36, userSelect: 'none' }}>
        {currentIndex + 1} / 12
      </Typography>
    </Box>
  );
}

export default ProcessStepSlider;
