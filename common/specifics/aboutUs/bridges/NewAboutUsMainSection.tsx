import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NewAboutUsMainSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/aboutUs/about_us_main.jpg)',
        height: { xs: '480px', sm: '580px' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        color="white"
        fontWeight={700}
        textAlign="center"
        sx={{
          lineHeight: { xs: '64px', sm: 'inherit' },
          whiteSpace: 'break-spaces',
        }}
      >
        {t('about-1')}
      </Typography>
    </Box>
  );
};

export default NewAboutUsMainSection;
