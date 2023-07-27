import FooterCompanyInfo from '@/common/bridges/Layout/FooterCompanyInfo';
import { Box, styled } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        paddingY: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        paddingX: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '40px',
        }}
      >
        <BrgLogoImage src="/images/common/brg_logo_white.png" />
        <BreakLogoImage src="/images/common/break_logo_white.png" />
      </Box>
      <FooterCompanyInfo />
    </Box>
  );
};

export default Footer;

const BrgLogoImage = styled('img')({
  width: '64px',
  marginRight: '27px',
});

const BreakLogoImage = styled('img')({
  width: '109px',
});
