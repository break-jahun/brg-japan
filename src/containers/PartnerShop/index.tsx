import { VStack } from '@/common/components/VStack';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import SharedContainer from 'brg-japan/common/components/Layout/Container/SharedContainer';
import PartnerShopListSection from 'brg-japan/containers/PartnerShop/PartnerShopListSection';

function PartnerShop() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <VStack>
      <Box
        bgcolor="rgb(0, 50, 91)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        height={{ xs: '422px', sm: '494px' }}
      >
        <Typography variant={isDesktop ? 'h2' : 'h3'} fontWeight={600}>
          Partner Shop
        </Typography>
      </Box>
      <PartnerShopListSection />
    </VStack>
  );
}

export default PartnerShop;
