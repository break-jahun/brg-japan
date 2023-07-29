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
      <VStack gap="24px" width={{ xs: '100%', sm: '632px' }}>
        <HomeSharedTitle>プライシング</HomeSharedTitle>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap="40px"
        >
          <Box flex={1}>
            <PriceInfoCard
              title="レギュラ"
              price="2,480円＋税"
              description={
                <VStack>
                  <Description>*最長30営業日</Description>
                </VStack>
              }
            />
          </Box>
          <Box flex={1}>
            <PriceInfoCard
              title="バリュ"
              price="1,980円＋税"
              description={
                <VStack>
                  <DescriptionBold>*最低40枚</DescriptionBold>
                  <Description>*最長90営業日</Description>
                </VStack>
              }
            />
          </Box>
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
