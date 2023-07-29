import { VStack } from '@/common/components/VStack';
import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

function EventBannerSection() {
  return (
    <Box bgcolor="#F5F5F5" paddingY={{ xs: '40px', sm: '80px' }}>
      <VStack
        gap={{ xs: '0px', sm: '24px' }}
        margin="auto"
        alignItems="center"
        paddingX={{ xs: '8px', sm: '0px' }}
      >
        <Title>開催中のイベント</Title>
        <Box
          width={{ xs: '100%', sm: '704px' }}
          height="160px"
          position="relative"
        >
          <Link href="/" passHref>
            <Image
              fill
              priority
              alt="event banner image"
              src="/images/home/event/event_banner.svg"
            />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
}

const Title = styled(Typography)({
  fontSize: '26px',
  fontWeight: 600,
  lineHeight: 2,
  letterSpacing: '0.25px',
});

export default EventBannerSection;
