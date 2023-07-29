import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Button } from '@mui/base';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { keyframes, styled } from '@mui/system';
import DeskTopPartnerShopList from 'brg-japan/containers/home/PartnerShopList/DeskTopPartnerShopList';
import MobilePartnerShopList from 'brg-japan/containers/home/PartnerShopList/MobilePartnerShopList';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import { PartnerShopData } from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import Link from 'next/link';

function PartnerShopList() {
  const isDesktop = useIsDesktop();
  return (
    <VStack
      paddingY="80px"
      alignItems="center"
      gap="24px"
      width={{ xs: '100%', sm: '1032px' }}
      margin="auto"
    >
      <HomeSharedTitle>パートナーショップ</HomeSharedTitle>
      <Box
        sx={{
          ...(isDesktop && {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '24px',
          }),
        }}
      >
        {isDesktop && <DeskTopPartnerShopList />}
        {!isDesktop && <MobilePartnerShopList />}
      </Box>
    </VStack>
  );
}

export default PartnerShopList;
