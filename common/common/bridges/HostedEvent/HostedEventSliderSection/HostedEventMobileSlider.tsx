import { Box, styled, Typography } from '@mui/material';
import Slider from 'react-slick';
import { SliderProps } from '@/common/types/slider';
import { Event } from './index';

const HostedEventMobileSlider = ({
  currentIndex,
  setCurrentIndex,
  sliderRef,
  list,
}: SliderProps & { list: Event[] }) => {
  const settings = {
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
    infinite: true,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next + 1);
    },
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {list.map((event, index) => (
        <SliderItem
          key={event.id}
          src={event.src}
          content={event.content}
          isActive={currentIndex === index + 1}
        />
      ))}
    </Slider>
  );
};

export default HostedEventMobileSlider;

interface SliderItemProps {
  src: string;
  content: string;
  isActive: boolean;
}

const SliderItem = ({ src, content, isActive }: SliderItemProps) => {
  return (
    <Box
      sx={{
        width: '328px',
        mx: '8px',
        opacity: isActive ? 1 : 0.6,
      }}
    >
      <HostedEventStyledImg src={src} />
      <Box sx={{ marginTop: '16px' }}>
        <Typography variant="subtitle1">{content}</Typography>
      </Box>
    </Box>
  );
};

export const HostedEventStyledImg = styled('img')({
  width: '100%',
  borderRadius: '8px',
});
