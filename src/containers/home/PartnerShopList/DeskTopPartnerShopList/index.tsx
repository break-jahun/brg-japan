import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Box } from '@mui/material';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import { PartnerShopData } from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';

function DeskTopPartnerShopList() {
  return (
    <VStack gap="24px">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        {PartnerShopData.slice(0, 6).map((item) => (
          <PartnerShopInfoCard
            key={item.image}
            address={item.address}
            image={item.image}
            name={item.name}
            phone={item.phone}
          />
        ))}
      </Box>
      <HStack gap="24px">
        <Box flex={1} />
        {PartnerShopData.slice(6, 8).map((item) => (
          <Box key={item.image} flex={2}>
            <PartnerShopInfoCard
              key={item.image}
              address={item.address}
              image={item.image}
              name={item.name}
              phone={item.phone}
            />
          </Box>
        ))}
        <Box flex={1} />
      </HStack>
    </VStack>
  );
}

export default DeskTopPartnerShopList;
