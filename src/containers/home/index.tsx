import { VStack } from '@/common/components/VStack';
import { Box } from '@mui/material';
import NavigationBar from 'brg-japan/components/Layout/NavigationBar';
import BannerSliderSection from 'brg-japan/containers/home/BannerSliderSection';
import BrgHowToUseSection from 'brg-japan/containers/home/BrgHowToUseSection';
import PriceInfoSection from 'brg-japan/containers/home/PriceInfoSection';

function Home() {
  return (
    <VStack>
      <BannerSliderSection />
      <BrgHowToUseSection />
      <PriceInfoSection />
    </VStack>
  );
}

export default Home;
