import { VStack } from '@/common/components/VStack';
import { Box } from '@mui/material';
import NavigationBar from 'brg-japan/components/Layout/NavigationBar';
import BannerSliderSection from 'brg-japan/containers/home/BannerSliderSection';
import BrgHowToUseSection from 'brg-japan/containers/home/BrgHowToUseSection';
import EventBannerSection from 'brg-japan/containers/home/EventBannerSection';
import PartnerShopList from 'brg-japan/containers/home/PartnerShopList';
import PriceInfoSection from 'brg-japan/containers/home/PriceInfoSection';

function Home() {
  return (
    <VStack>
      <BannerSliderSection />
      <BrgHowToUseSection />
      <PriceInfoSection />
      <PartnerShopList />
      <EventBannerSection />
    </VStack>
  );
}

export default Home;
