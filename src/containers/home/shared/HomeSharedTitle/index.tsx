import { HStack } from '@/common/components/HStack';
import { Typography, styled } from '@mui/material';
import BrgLogo from 'brg-japan/components/Layout/BrgLogo';

function HomeSharedTitle({ children }: { children: React.ReactNode }) {
  return (
    <HStack gap="8px" alignItems="center">
      <BrgLogo color="black" />
      <TitleText>{children}</TitleText>
    </HStack>
  );
}

const TitleText = styled(Typography)({
  fontSize: '26px',
  fontWeight: 600,
  lineHeight: '52px',
  letterSpacing: '0.25px',
});

export default HomeSharedTitle;
