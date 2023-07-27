import { Box, useMediaQuery, useTheme } from '@mui/material';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useEffect, useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import SliderProgressBar from '@/common/components/slider/SliderProgressBar';
import SliderBarButton from '@/common/components/slider/SliderBarButton';
import { useTranslation } from 'react-i18next';
import HostedEventDesktopSlider from './HostedEventDesktopSlider';
import HostedEventMobileSlider from './HostedEventMobileSlider';

export interface Event {
  id: number;
  src: string;
  content: string;
}

const HostedEventSliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const sliderRef = useRef<Slider | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentIndex(1);
  }, [isMobile]);

  const handleClick = (index: number) => {
    if (!sliderRef.current) return;

    sliderRef.current.slickGoTo(index);
  };

  const eventList = useMemo(
    () => [
      {
        id: 2,
        src: '/images/home/hosted_event_22.png',
        content: t('Home-history-3'),
      },
      {
        id: 3,
        src: '/images/home/hosted_event_3.png',
        content: t('Home-history-4'),
      },
    ],
    [t]
  );

  const computedEventList = useMemo(() => {
    if (!isMobile) {
      const buttonCount = eventList.length - 1;

      return eventList.slice(0, buttonCount);
    }

    return eventList;
  }, [isMobile, eventList]);

  return (
    <Box sx={{ marginTop: { xs: '32px', sm: '40px' } }}>
      <MaxWidthLayoutBox sx={{ paddingX: { sm: '32px' } }}>
        {isMobile ? (
          <HostedEventMobileSlider
            sliderRef={sliderRef}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            list={eventList}
          />
        ) : (
          <HostedEventDesktopSlider
            sliderRef={sliderRef}
            setCurrentIndex={setCurrentIndex}
            list={eventList}
          />
        )}
        <SliderProgressBar
          sx={{
            margin: { xs: '24px 16px 0', sm: '24px 0 0' },
          }}
        >
          {computedEventList.map((event, index) => (
            <SliderBarButton
              key={event.id}
              isSelected={currentIndex === index + 1}
              handleOnClick={() => {
                handleClick(index);
              }}
            />
          ))}
        </SliderProgressBar>
      </MaxWidthLayoutBox>
    </Box>
  );
};

export default HostedEventSliderSection;
