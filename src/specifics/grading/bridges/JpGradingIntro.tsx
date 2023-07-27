/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function JpGradingIntro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      position="relative"
      width={1}
      zIndex={1}
      height={{ xs: '464px', sm: '632px' }}
      sx={{
        backgroundImage: `url('/images/grading/grading_intro.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        <img
          src="/images/common/brg_logo.png"
          alt="logo"
          width={isMobile ? 74 : 144}
        />
        <Typography
          variant="h3"
          component="h1"
          color="white"
          fontWeight={600}
          sx={{
            margin: { xs: '8px 0 16px', sm: '16px 0' },
          }}
        >
          {t('그레이딩_대문자')}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          align="center"
          maxWidth={{ xs: '328px', sm: '484px' }}
        >
          {t('BRG란')}
        </Typography>
      </Box>
      <Box
        position="absolute"
        top={0}
        width={1}
        height={1}
        zIndex={-1}
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36))`,
        }}
      />
    </Box>
  );
}

export default JpGradingIntro;
