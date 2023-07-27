import { Box } from '@mui/material';
import NewsSection from 'brg-japan/common/bridges/JapanNewsSection';
import HostedEvent from '@/common/bridges/HostedEvent';
import HomeMainBannerSlider from 'brg-japan/specifics/Home/bridges/HomeMainBannerSlider';
import SNSSection from '@/specifics/home/bridges/SNSSection';
import { useTranslation } from 'react-i18next';
import PartnerShopList from 'brg-japan/containers/home/PartnerShopList';
import Home from 'brg-japan/containers/home';

const HomePage = () => {
  return (
    // <Box
    //   sx={{
    //     wordBreak: 'break-word',
    //     whiteSpace: 'break-spaces',
    //   }}
    // >
    //   <HomeMainBannerSlider />
    //   <HostedEvent />
    //   <PartnerShopList />
    //   <SNSSection />
    // </Box>
    <Home />
  );
};

export default HomePage;
