import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import PriceInfoCard from 'brg-japan/containers/home/PriceInfoSection/PriceInfoCard';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';

function PriceInfoSection() {
  return (
    <VStack
      paddingY={{ xs: '40px', sm: '80px' }}
      paddingX={{ xs: '16px', sm: '0px' }}
      bgcolor="#F5F5F5"
      alignItems="center"
    >
      <VStack
        gap="40px"
        width={{ xs: '100%', sm: '632px' }}
        alignItems="center"
      >
        <HomeSharedTitle>プライシング</HomeSharedTitle>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
          gap="40px"
          width="100%"
        >
          <PriceInfoCard
            title="レギュラ"
            price="2,480円＋税"
            description={
              <VStack>
                <Description>*大体15営業日</Description>
              </VStack>
            }
          />
          <PriceInfoCard
            title="バリュ"
            price="1,980円＋税"
            description={
              <VStack>
                <DescriptionBold>*最少50枚</DescriptionBold>
                <Description>*大体25営業日</Description>
              </VStack>
            }
          />
          <PriceInfoCard
            title="株主"
            price="1,380円＋税"
            description={
              <VStack>
                <Description>*大体15営業日</Description>
              </VStack>
            }
          />
          <PriceInfoCard
            title="クロスオーバー"
            price="2,480円＋税"
            description={
              <VStack>
                <Description>*大体15営業日</Description>
              </VStack>
            }
          />
        </Box>
      </VStack>
    </VStack>
  );
}

const Description = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 1.667,
  letterSpacing: '0.4px',
  textAlign: 'center',
});

const DescriptionBold = styled(Description)({
  fontWeight: 600,
});

export default PriceInfoSection;
