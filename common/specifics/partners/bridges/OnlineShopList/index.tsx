import { Box, Typography } from '@mui/material';
import OnlineShopSlider from './OnlineShopSlider';

const OnlineShopList = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(60deg, #3f70aa 7%, #512978 92%)',
        marginBottom: { xs: '77px', sm: '70px' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 0 42px',
      }}
    >
      <Box mb={2}>
        <Typography variant="h6" fontWeight={700} color="white">
          Online Shop
        </Typography>
      </Box>
      <OnlineShopSlider />
    </Box>
  );
};

export default OnlineShopList;
