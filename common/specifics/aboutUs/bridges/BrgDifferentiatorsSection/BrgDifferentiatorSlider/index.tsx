import { Box } from '@mui/material';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import SliderArrowButton from '@/common/components/slider/SliderArrowButton';
import BrgDifferentiatorSliderItem from './BrgDifferentiatorSliderItem';

const BrgDifferentiatorSlider = () => {
  const { t } = useTranslation();
  const CONTENTS = [
    {
      title: t('brg차별화컨텐츠1_제목'),
      description: t('brg차별화컨텐츠1_설명'),
      icon: AttachMoneyRoundedIcon,
    },
    {
      title: t('brg차별화컨텐츠2_제목'),
      description: t('brg차별화컨텐츠2_설명'),
      icon: KeyboardDoubleArrowRightRoundedIcon,
    },
    {
      title: t('brg차별화컨텐츠3_제목'),
      description: t('brg차별화컨텐츠3_설명'),
      icon: WorkspacePremiumRoundedIcon,
    },
    {
      title: t('brg차별화컨텐츠4_제목'),
      description: t('brg차별화컨텐츠4_설명'),
      icon: TravelExploreRoundedIcon,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const slider = useRef<Slider | null>(null);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next + 1);
    },
  };

  const handlePrevClick = () => {
    if (!slider.current || currentIndex === 1) {
      return;
    }
    slider.current.slickPrev();
  };

  const handleNextClick = () => {
    if (!slider.current || currentIndex === 4) {
      return;
    }

    slider.current.slickNext();
  };

  return (
    <Box
      sx={{
        marginTop: { xs: '40px', sm: '64px' },
      }}
    >
      <Slider
        {...settings}
        ref={(c) => {
          slider.current = c;
        }}
      >
        {CONTENTS.map((content) => (
          <BrgDifferentiatorSliderItem
            icon={content.icon}
            key={content.title}
            title={content.title}
            description={content.description}
          />
        ))}
      </Slider>
      <SliderArrowButton
        currentIndex={currentIndex}
        totalCount={4}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        sx={{
          bottom: { xs: '80px', sm: '96px' },
        }}
      />
    </Box>
  );
};

export default BrgDifferentiatorSlider;
