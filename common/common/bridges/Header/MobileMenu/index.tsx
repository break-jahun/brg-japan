import TopSection from '@/common/bridges/Header/MobileMenu/TopSection';
import { VStack } from '@/common/components/VStack';
import { Box, Divider } from '@mui/material';
import MenuList from '@/common/bridges/Header/MobileMenu/MenuList';
import BottomSection from '@/common/bridges/Header/MobileMenu/BottomSection';

function MobileMenu() {
  return (
    <VStack width={220} height={1}>
      <TopSection />
      <Divider />
      <MenuList />
      <BottomSection />
    </VStack>
  );
}

export default MobileMenu;
