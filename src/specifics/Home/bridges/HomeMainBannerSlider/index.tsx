import { Box, Typography } from '@mui/material';
import MainBannerSlider from '@/specifics/home/components/MainBannerSlider';
import { SliderItem } from 'brg-japan/specifics/Home/bridges/HomeMainBannerSlider/SliderItem';

const JapanMainBannerSlider = () => {
  return (
    <MainBannerSlider>
      <SliderItem
        backgroundImage="/images/home/home_main_banner_1.png"
        title="これまでに 100,000 枚以上のカードをグレーディングしました"
        subTitle="brgは精密な装備を利用したグレーディングで保有しているカードの所蔵価値を高めます"
      />
    </MainBannerSlider>
  );
};

export default JapanMainBannerSlider;

const SliderItemLinkButton = ({
  link,
  buttonText,
}: {
  link: string;
  buttonText?: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Box
        component="button"
        sx={{
          padding: '10px 20px',
          backgroundColor: 'white',
          border: '1px solid white',
          borderRadius: '20px',
        }}
      >
        <Typography fontWeight={500} variant="button" color="secondary_20">
          {/* Twitterへ */}
          {buttonText}
        </Typography>
      </Box>
    </a>
  );
};
