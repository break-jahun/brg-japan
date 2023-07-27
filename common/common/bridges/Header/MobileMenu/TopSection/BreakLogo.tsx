import { Box, styled } from '@mui/material';

interface BreakLogoProps {}

function BreakLogo() {
  return (
    <Box
      padding="16px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <BreakLogoImage src="/images/break_logo_b.png" alt="logo" />
    </Box>
  );
}

const BreakLogoImage = styled('img')({
  width: '80px',
});

export default BreakLogo;
