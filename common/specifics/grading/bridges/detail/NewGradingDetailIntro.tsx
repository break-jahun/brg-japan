/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function NewGradingDetailIntro() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      position="relative"
      width={1}
      zIndex={1}
      height={{ xs: '480px', sm: '580px' }}
      sx={{
        backgroundImage: `url('/images/gradingIntroDetail/grading_intro_detail_main.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: { xs: 0, sm: '40px' },
      }}
    >
      <Box
        width={1}
        height={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="0px 16px"
        zIndex={10}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h1"
          color="white"
          fontWeight={600}
          marginTop={{ xs: '40px', sm: '24px' }}
          marginBottom={{ xs: '44px', sm: '24px' }}
        >
          {t('detail-1')}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          align="center"
          maxWidth={{ xs: '328px', sm: '480px' }}
        >
          {t('detail-2')}
        </Typography>
      </Box>
    </Box>
  );
}

export default NewGradingDetailIntro;
