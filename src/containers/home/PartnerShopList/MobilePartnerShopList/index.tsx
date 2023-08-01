import { Box } from '@mui/material';
import {
  PartnerShopData,
  PartnerShopDataType,
} from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';
import { keyframes, styled } from '@mui/system';
import { HStack } from '@/common/components/HStack';
import PriceInfoCard from 'brg-japan/containers/home/PriceInfoSection/PriceInfoCard';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import Link from 'next/link';

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

type Props = {
  data: PartnerShopDataType[];
};

function MobilePartnerShopList(props: Props) {
  const { data: partnerShopList } = props;

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
        {partnerShopList.map((item) => (
          <Link key={item.image} href={item.link} passHref target="_blank">
            <Box width="calc(100vw - 32px)">
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
    </HStack>
  );
}

export default MobilePartnerShopList;
