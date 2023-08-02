import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import Box from '@mui/material/Box';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';

function SocialSnsSection() {
  return (
    <VStack
      padding={{ xs: '10px 0px 40px 0px', sm: '20px 0px 80px 0px' }}
      gap="24px"
      alignItems="center"
    >
      <HomeSharedTitle>ツイッター</HomeSharedTitle>
      <HStack
        gap="24px"
        height={{ xs: '560px', sm: '720px' }}
        width={{ xs: '100%', sm: '780px' }}
        paddingX={{ xs: '16px', sm: '0px' }}
      >
        <Box flex={1}>
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
