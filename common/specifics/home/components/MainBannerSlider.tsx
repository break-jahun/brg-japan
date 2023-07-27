import { Box, SxProps } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState, ReactChild } from 'react';
import SliderArrowButton from '@/common/components/slider/SliderArrowButton';

interface Props {
  children: ReactChild | ReactChild[];
  arrowSx?: SxProps;
}

const MainBannerSlider = ({ children, arrowSx }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slider = useRef<Slider | null>(null);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next + 1);
    },
    useTransform: false,
  };

  const handlePrevClick = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider
        {...settings}
        ref={(c) => {
          slider.current = c;
        }}
      >
        {children}
      </Slider>
      <SliderArrowButton
        currentIndex={currentIndex}
        totalCount={1}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        isInfinity
        sx={arrowSx}
      />
    </Box>
  );
};

export default MainBannerSlider;
