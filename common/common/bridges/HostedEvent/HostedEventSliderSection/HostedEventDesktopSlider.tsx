import { Box, styled, Typography } from '@mui/material';
import Slider from 'react-slick';
import { SliderProps } from '@/common/types/slider';
import { Event } from './index';

const HostedEventDesktopSlider = ({
  sliderRef,
  setCurrentIndex,
  list,
}: Omit<SliderProps, 'currentIndex'> & { list: Event[] }) => {
  const settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    draggable: true,
    touchThreshold: 3,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next + 1);
    },
  };

  return (
    <Box
      sx={{
        [`& .slick-list`]: {
          marginX: '-12px',
        },
      }}
    >
      <Slider {...settings} ref={sliderRef}>
        {list.map((event) => (
          <SliderItem key={event.id} src={event.src} content={event.content} />
        ))}
      </Slider>
    </Box>
  );
};

export default HostedEventDesktopSlider;

interface SliderItemProps {
  src: string;
  content: string;
}

const SliderItem = ({ src, content }: SliderItemProps) => {
  return (
    <Box sx={{ paddingX: '12px' }}>
      <StyledImg src={src} />
      <Box sx={{ marginTop: '16px' }}>
        <Typography variant="h6">{content}</Typography>
      </Box>
    </Box>
  );
};

const StyledImg = styled('img')({
  width: '100%',
  height: '340px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '8px',
});
