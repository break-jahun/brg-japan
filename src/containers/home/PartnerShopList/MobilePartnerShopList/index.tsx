import { Box } from '@mui/material';
import { PartnerShopData } from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';
import { keyframes, styled } from '@mui/system';
import { HStack } from '@/common/components/HStack';
import PriceInfoCard from 'brg-japan/containers/home/PriceInfoSection/PriceInfoCard';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';

const marquee = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-${
      (100 / PartnerShopData.length) * (PartnerShopData.length - 1)
    }%);
  }
`;

function MobilePartnerShopList() {
  return (
    <HStack width="100vw" position="relative" overflow="hidden">
      <Box
        display="flex"
        gap="24px"
        sx={{
          animationDuration: '30s',
          animationTimingFunction: 'linear',
          animationDelay: '0s',
          animationIterationCount: 'infinite',
          animationDirection: 'normal',
          animationFillMode: 'both',
          animationPlayState: 'running',
          animationName: `${marquee}`,
        }}
      >
        {PartnerShopData.map((item) => (
          <Box width="calc(100vw - 32px)">
            <PartnerShopInfoCard
              key={item.image}
              address={item.address}
              image={item.image}
              name={item.name}
              phone={item.phone}
            />
          </Box>
        ))}
      </Box>
    </HStack>
  );
}

export default MobilePartnerShopList;
