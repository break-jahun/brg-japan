import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import Box from '@mui/material/Box';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';

function SocialSnsSection() {
  return (
    <VStack
      paddingY={{ xs: '40px', sm: '80px' }}
      gap="24px"
      alignItems="center"
    >
      <HomeSharedTitle>ツイッター</HomeSharedTitle>
      <HStack
        gap="24px"
        height={{ xs: '560px', sm: '720px' }}
        width={{ xs: '100%', sm: '680px' }}
      >
        <Box flex={1} height="100%">
          <iframe
            title="brgcard twitter"
            src="https://snapwidget.com/embed/1016072"
            width="100%"
            height="100%"
          />
        </Box>
      </HStack>
    </VStack>
  );
}

export default SocialSnsSection;
