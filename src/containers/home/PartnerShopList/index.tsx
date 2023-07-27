import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Button } from '@mui/base';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { keyframes, styled } from '@mui/system';
import Link from 'next/link';

const marquee = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-75%);
  }
`;

const ImageList = [
  '/images/home/partnershop/shop1.png',
  '/images/home/partnershop/shop2.png',
  '/images/home/partnershop/shop3.png',
  '/images/home/partnershop/shop4.png',
  '/images/home/partnershop/shop5.png',
  '/images/home/partnershop/shop6.png',
  '/images/home/partnershop/shop7.png',
  '/images/home/partnershop/shop8.png',
];

function PartnerShopList() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const DoubleImageList = [
    ...ImageList,
    ...ImageList,
    ...ImageList,
    ...ImageList,
  ];

  return (
    <VStack
      padding={{ xs: '64px 4px', sm: '160px 120px' }}
      alignItems="center"
      gap="32px"
    >
      <VStack gap="12px" alignItems="center">
        <Typography
          variant={isDesktop ? 'h3' : 'h4'}
          fontFamily="Pretendard"
          color="rgb(0, 50, 91)"
          fontWeight={600}
        >
          パートナーショップリスト
        </Typography>
        <Typography variant="body1" color="rgb(117, 117, 117)">
          ディングサービスを利用してみてください。
        </Typography>
      </VStack>
      <HStack width="100%" position="relative" overflow="hidden">
        <Box
          display="flex"
          sx={{
            animationDuration: '120s',
            animationTimingFunction: 'linear',
            animationDelay: '0s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationFillMode: 'both',
            animationPlayState: 'running',
            animationName: `${marquee}`,
          }}
        >
          <HStack gap="24px" paddingY="4px">
            {DoubleImageList.map((image) => (
              <Box
                width={{ xs: '96px', sm: '158px' }}
                borderRadius="4px"
                sx={{
                  boxShadow:
                    '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                  filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))',
                }}
              >
                <img
                  key={image}
                  src={image}
                  alt="파트너샵 이미지"
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            ))}
          </HStack>
        </Box>
      </HStack>
      <Link href="/partner-shop" passHref>
        <ViewButton>パートナーショップを全て表示する</ViewButton>
      </Link>
    </VStack>
  );
}

const ViewButton = styled(Button)({
  color: 'rgb(0, 50, 91)',
  padding: '16px 32px',
  border: '1px solid rgb(0, 50, 91)',
  borderRadius: '28px',
  fontWeight: 500,
});

export default PartnerShopList;
