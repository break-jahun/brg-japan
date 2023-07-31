import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Box, Typography, styled } from '@mui/material';
import BrgLogo from 'brg-japan/components/Layout/BrgLogo';
import HomeSearchSection from 'brg-japan/containers/home/HomeSearchSection';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';

function BrgHowToUseSection() {
  return (
    <VStack
      paddingY={{ xs: '40px', sm: '80px' }}
      paddingX={{ xs: '16px', sm: '0px' }}
      maxWidth="574px"
      margin="auto"
      gap="40px"
    >
      <HomeSharedTitle>ご利用方法</HomeSharedTitle>
      <VStack gap="20px">
        <SharedSentence number="1">
          近くのbrgパートナーショップを探す。
        </SharedSentence>
        <SharedSentence number="2">
          パートナーショップを訪問し、グレーディングするカードを預ける。
        </SharedSentence>
        <SharedSentence number="3">
          進捗状況は電話、ツイッターでお問い合わせください。
          <br />
          (配送追跡番号でbrgホームページで確認可能)
        </SharedSentence>
        <SharedSentence number="4">
          配送が完了したら、パートナーショップに訪問してカードを受け取ります。
        </SharedSentence>
      </VStack>
      <HomeSearchSection />
    </VStack>
  );
}

function SharedSentence({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <HStack gap="8px">
      <NumberCircle>{number}</NumberCircle>
      <Box flex={1}>
        <GuideText>{children}</GuideText>
      </Box>
    </HStack>
  );
}

function NumberCircle({ children }: { children: React.ReactNode }) {
  return (
    <Box
      width="24px"
      height="24px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#0F60A4"
      fontSize="14px"
      bgcolor="#E7EFF6"
      borderRadius="50%"
      fontWeight={700}
    >
      {children}
    </Box>
  );
}

const TitleText = styled(Typography)({
  fontSize: '26px',
  fontWeight: 600,
  lineHeight: '52px',
  letterSpacing: '0.25px',
});

const GuideText = styled(Typography)({
  fontSize: '16px',
  fontWeight: 400,
});

export default BrgHowToUseSection;
