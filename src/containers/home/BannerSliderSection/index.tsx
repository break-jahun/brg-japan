import { Box } from '@mui/material';
import BannerSliderPagination from 'brg-japan/containers/home/BannerSliderSection/BannerSliderPagination';
import SlideItem from 'brg-japan/containers/home/BannerSliderSection/SlideItem';
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react';
import { v4 } from 'uuid';
import 'swiper/css';

const SlidesData = [<SlideItem />];

function BannerSliderSection() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  const [currentPage, setCurrentPage] = useState(0);

  const handleMovePage = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
      setCurrentPage(index);
    }
  };

  const handleSlideChange = (swiperParam: SwiperClass) => {
    setCurrentPage(swiperParam.realIndex);
  };

  return (
    <Box position="relative">
      <Swiper
        onInit={setSwiper}
        // @ts-ignore
        slidesPerView={1}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        centeredSlides
      >
        {SlidesData.map((item) => (
          <SwiperSlide key={v4()}>{item}</SwiperSlide>
        ))}
      </Swiper>
      {SlidesData.length > 1 && (
        <BannerSliderPagination
          onMovePage={handleMovePage}
          total={SlidesData.length}
          current={currentPage}
        />
      )}
    </Box>
  );
}

export default BannerSliderSection;
