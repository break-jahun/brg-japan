import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Box } from '@mui/material';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import {
  PartnerShopData,
  PartnerShopDataType,
} from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';
import Link from 'next/link';

type Props = {
  data: PartnerShopDataType[];
};

function DeskTopPartnerShopList(props: Props) {
  const { data: partnerShopList } = props;
  return (
    <VStack gap="24px">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
      >
        {partnerShopList.map((item) => (
          <Link key={item.image} href={item.link} passHref target="_blank">
            <PartnerShopInfoCard
              key={item.image}
              address={item.address}
              image={item.image}
              name={item.name}
              phone={item.phone}
            />
          </Link>
        ))}
      </Box>
    </VStack>
  );
}

export default DeskTopPartnerShopList;
