import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Button } from '@mui/base';
import { Box, Typography, styled } from '@mui/material';
import BrgLogo from 'brg-japan/containers/home/GoBrgGradingSection/Icons/BrgLogo';
import Link from 'next/link';

function GoBrgGradingSection() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      padding={{ xs: '50px 27px', sm: '80px 127px' }}
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#00325B"
      color="#FFF"
      gap="36px"
    >
      <VStack alignItems="space-between" gap="24px">
        <BrgLogo />
        <GuideText>brgは初めてですか？採点について学びましょう。</GuideText>
      </VStack>
      <Link href="/grading" passHref>
        <GuideButton>brgグレーディング？</GuideButton>
      </Link>
    </Box>
  );
}

const GuideText = styled(Typography)({
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '0.15px',
});

const GuideButton = styled(Button)({
  padding: '14px 28px',
  borderRadius: '28px',
  color: '#00325B',
  fontFamily: 'inherit',
  fontWeight: 500,
  lineHeight: 1.42857,
  letterSpacing: '1.25px',
  background: '#FFF',
});

export default GoBrgGradingSection;
