import { Box, styled, Typography, useTheme } from '@mui/material';

const TwitterContents = () => {
  const theme = useTheme();
  const isDesktop = theme.breakpoints.up('sm');

  return (
    <Box sx={{ marginTop: { xs: '64px', sm: '80px' } }}>
      <Box
        sx={{ marginBottom: { xs: '24px', sm: '32px', textAlign: 'center' } }}
      >
        <Typography color="secondary_90" variant={isDesktop ? 'h4' : 'h5'}>
          brg Tweets
        </Typography>
      </Box>
      <Box>
        <Iframe title="Twitter_brgcard" src="https://twitter.com/brgcard_jp" />
      </Box>
    </Box>
  );
};

export default TwitterContents;

const Iframe = styled('iframe')({
  width: '100%',
});
