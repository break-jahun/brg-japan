/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function GradingIntroDetailMain() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      position="relative"
      width={1}
      zIndex={1}
      height={{ xs: '464px', sm: '632px' }}
      sx={{
        backgroundImage: `url('/images/gradingIntroDetail/grading_intro_detail_main.png')`,
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
          variant={isMobile ? 'h4' : 'h3'}
          component="h1"
          color="white"
          fontWeight={600}
          marginTop={{ xs: '40px', sm: '24px' }}
          marginBottom={{ xs: '44px', sm: '24px' }}
        >
          {t('그레이딩디테일섹션타이틀')}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          align="center"
          maxWidth={{ xs: '328px', sm: '480px' }}
        >
          {t('그레이딩디테일메인설명')}
        </Typography>
      </Box>
      <Box
        position="absolute"
        top={0}
        width={1}
        height={1}
        zIndex={-1}
        sx={{
          opacity: 0.75,
          backgroundColor: 'secondary_10',
        }}
      />
    </Box>
  );
}

export default GradingIntroDetailMain;
