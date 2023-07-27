import { Box, useMediaQuery, useTheme } from '@mui/material';
import DesktopSNSIconButton from './DesktopSNSIconButton';
import MobileSNSIconButton from './MobileSNSIconButton';

const SNSButtonGroup = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ marginTop: { xs: '40px', sm: '64px' } }}>
      {isDesktop ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <DesktopSNSIconButton
            text="brgcard_Japan"
            src="/images/home/twitter_logo.png"
            link="https://twitter.com/brgcard_jp"
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <MobileSNSIconButton
            text="brgcard_Japan"
            src="/images/home/twitter_logo.png"
            link="https://twitter.com/brgcard_jp"
          />
        </Box>
      )}
    </Box>
  );
};

export default SNSButtonGroup;
