import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Box } from '@mui/material';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import {
  PartnerShopData,
  PartnerShopDataType,
} from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import Link from 'next/link';

type Props = {
  data: PartnerShopDataType[];
};

function ItemListSection(props: Props) {
  const { data: partnerShopList } = props;
  const isDesktop = useIsDesktop();

  return (
    <VStack gap="24px">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: isDesktop ? '24px' : '0px',
        }}
      >
        {partnerShopList.map((item) => (
          <Link key={item.image} href={item.link} passHref target="_blank">
            <Box padding={{ xs: '16px', sm: '0px' }}>
              <PartnerShopInfoCard
                key={item.image}
                address={item.address}
                image={item.image}
                name={item.name}
                phone={item.phone}
              />
            </Box>
          </Link>
        ))}
      </Box>
    </VStack>
  );
}

export default ItemListSection;
