import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BrgDifferentiatorSlider from '@/specifics/aboutUs/bridges/BrgDifferentiatorsSection/BrgDifferentiatorSlider';

const BrgDifferentiatorsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'secondary_20',
        padding: { xs: '80px 16px 128px', sm: '80px 32px 160px' },
        position: 'relative',
      }}
    >
      <Typography
        textAlign="center"
        color="white"
        variant={isMobile ? 'h5' : 'h4'}
        fontWeight={600}
        whiteSpace="break-spaces"
        sx={{ wordBreak: 'break-word' }}
      >
        {t('brg차별화섹션타이틀')}
      </Typography>
      <BrgDifferentiatorSlider />
    </Box>
  );
};

export default BrgDifferentiatorsSection;
