import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Button } from '@mui/base';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { keyframes, styled } from '@mui/system';
import ItemListSection from 'brg-japan/containers/home/PartnerShopList/ItemListSection';
import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import { PartnerShopData } from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import Link from 'next/link';

function PartnerShopList() {
  const isDesktop = useIsDesktop();

  const isMobileAndTablet = useMediaQuery('(max-width:1032px)');

  const onlineShopList = PartnerShopData.filter(
    (item) => item.type === 'ONLINE'
  );
  const offlineShopList = PartnerShopData.filter(
    (item) => item.type === 'OFFLINE'
  );

  return (
    <VStack
      paddingY="80px"
      alignItems="center"
      width={isMobileAndTablet ? '100%' : '704px'}
      margin="auto"
      gap="40px"
    >
      <HomeSharedTitle>注文方法</HomeSharedTitle>
      <VStack>
        <TitleAndDescription title="オンライン受付">
          brg公式パートナーショップのホームページからオンラインで受付する方式です。
        </TitleAndDescription>

        <Box marginTop="24px">
          {isDesktop ? (
            <VStack alignItems="center" gap="24px">
              <ItemListSection data={onlineShopList.slice(0, 2)} />
              <Box>
                <PartnerShopInfoCard
                  address={onlineShopList[2].address}
                  image={onlineShopList[2].image}
                  name={onlineShopList[2].name}
                  phone={onlineShopList[2].phone}
                />
              </Box>
            </VStack>
          ) : (
            <ItemListSection data={onlineShopList} />
          )}
        </Box>
      </VStack>
      <VStack>
        <TitleAndDescription title="オフライン受付">
          brg公式パートナーショップに訪問し、現地で受付する方式です。です。
        </TitleAndDescription>
        <Box marginTop="24px">
          <ItemListSection data={offlineShopList} />
        </Box>
      </VStack>
    </VStack>
  );
}

function TitleAndDescription({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <VStack gap="8px" paddingX={{ xs: '16px', sm: '0px' }}>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </VStack>
  );
}

const Title = styled(Typography)({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: 1.4,
  letterSpacing: '0.25px',
  textAlign: 'center',
});

const Description = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 1.667,
  letterSpacing: '0.4px',
  textAlign: 'center',
});

export default PartnerShopList;
