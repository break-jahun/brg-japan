/* eslint-disable react/no-unstable-nested-components */
import { AFFILIATED } from '@/common/types/affiliatedShop';
import { useGetAffiliatedShopQuery } from '@/specifics/partners/modules/apihooks/useOfflineShopQuery';
import { getSortOrderByLanguage } from '@/specifics/partners/modules/partnersUtils';
import { Box, styled, Typography } from '@mui/material';
import { memo, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useOnlineShopData = () => {
  const { i18n } = useTranslation();

  const { data } = useGetAffiliatedShopQuery({
    shopType: 'ONLINE',
    sortOrder: getSortOrderByLanguage(i18n.language),
    province: '',
  });

  const onlineShopList = data;

  return { onlineShopList };
};

const OnlineShopSlider = () => {
  const { i18n } = useTranslation();

  const { onlineShopList } = useOnlineShopData();

  const [dotIndex, setDotIndex] = useState(0);
  const sliderRef = useRef<any>();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    variableWidth: true,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      if (nextSlide < 0) {
        setDotIndex(0);
      } else {
        setDotIndex(nextSlide);
      }
    },
    appendDots: (dots: ReactNode) => (
      <Box>
        <ul>{dots}</ul>
      </Box>
    ),
    customPaging: (i: number) => (
      <Box
        sx={{
          width: '24px',
          height: '2px',
          background: i === dotIndex ? 'black' : 'rgba(0, 0, 0, 0.2)',
        }}
      />
    ),
  };

  useEffect(() => {
    if (onlineShopList) {
      // 언어를 바꾸고 간혹 index가 -1의 샵부터 시작하는 슬릭의 버그가 있어서 일단 넣어놨습니다.
      // 어차피 auto play 켜놓아서 슬릭 버그가 크게 티가 나진 않을 것 같아요.
      sliderRef.current.slickGoTo(0, true);
    }
  }, [onlineShopList]);

  if (!onlineShopList) {
    return null;
  }

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: `1000px` },
        '& .slick-dots': {
          bottom: '-26px',

          '& li': {
            width: 'auto',
            height: 'auto',
            margin: 0,
          },
        },
      }}
    >
      <Slider {...settings} ref={sliderRef}>
        {onlineShopList.map((item) => (
          <Box key={item.id}>
            <Box
              width={{ xs: '150px', sm: '172px' }}
              height="214px"
              display="flex"
              flexDirection="column"
              bgcolor="white"
              marginRight={{ xs: 0, sm: '15px' }}
              marginLeft={{ xs: '14px', sm: 0 }}
              borderRadius="4px"
            >
              <StyledLink href={item.linkUrl} target="_black">
                <Box
                  sx={{
                    overflow: 'hidden',
                    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
                    flexShrink: 0,
                    height: { xs: '126px', sm: '142px' },
                    marginTop: { xs: '7px', sm: '8px' },
                  }}
                >
                  <Image src={item.logoUrl} alt={`${item.name} logo image`} />
                </Box>
                <Typography
                  fontWeight="bold"
                  fontSize="m1"
                  align="center"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}
                >
                  {i18n.language === 'en' ? item.englishName : item.name}
                </Typography>
              </StyledLink>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default OnlineShopSlider;

const StyledLink = styled('a')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 8px',

  [theme.breakpoints.up('sm')]: {
    padding: '0 7px',
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'scale-down',
});
