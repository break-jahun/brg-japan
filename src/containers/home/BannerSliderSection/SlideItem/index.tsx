import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Button } from '@mui/base';
import { Box, Typography, styled, useTheme } from '@mui/material';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import Image from 'next/image';

function SlideItem() {
  return (
    <VStack
      height="528px"
      bgcolor="#040A95"
      color="#F3F4F9"
      paddingTop="104px"
      alignItems="center"
      overflow="hidden"
    >
      <VStack maxWidth="513px" alignItems="center">
        <TitleText>brg, 日本サービス開始</TitleText>
        <VStack marginTop="10px">
          <SubtitleText>
            BRGは精密機器と技術力を組み合わせたグレーディングで{' '}
          </SubtitleText>
          <SubtitleText>
            お持ちのカードのコレクション価値を高めます。
          </SubtitleText>
        </VStack>
        <Box marginTop="20px">
          <BannerCenterButton>パートナーショップを見る</BannerCenterButton>
        </Box>
        <HStack
          position="relative"
          width="100%"
          marginTop="50px"
          height="279px"
          gap="10px"
        >
          <CardImageInBanner src="/images/home/banners/firstbanner/card1.png" />
          <CardImageInBanner src="/images/home/banners/firstbanner/card2.png" />
          <CardImageInBanner src="/images/home/banners/firstbanner/card3.png" />
          <Box
            position="absolute"
            top={{ xs: '-24px', sm: '-34px' }}
            right={{ xs: '-24px', sm: '-34px' }}
            zIndex={100}
            width="109px"
            height="109px"
          >
            <Image
              priority
              alt="가격스티커이미지"
              src="/images/home/banners/firstbanner/price_sticker.svg"
              fill
            />
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
}

function CardImageInBanner({ src }: { src: string }) {
  const isDesktop = useIsDesktop();

  return (
    <Image
      priority
      alt="카드이미지"
      src={src}
      width={isDesktop ? 164 : 110}
      height={isDesktop ? 279 : 187}
    />
  );
}

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: '33px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '0.25px',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '50px',
  },
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.5px',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
  },
}));

const BannerCenterButton = styled(Button)({
  padding: '10px 20px',
  borderRadius: '4px',
  background: '#F3F4F9',
  color: '#030B0F',
  fontFamily: 'inherit',
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '0.5px',
});

export default SlideItem;
