/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

function VisualSpectralComparator() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      columnGap={{ xs: 0, sm: '48px' }}
      rowGap={{ xs: '24px', sm: 0 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap="16px"
        minWidth="328px"
        width="328px"
      >
        <Typography
          variant="h5"
          fontWeight={600}
          align={isMobile ? 'center' : 'left'}
        >
          {t('프로세스디테일타이틀2')}
        </Typography>
        <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
          {t('detail-19')}
        </Typography>
      </Box>
      <Box display="flex">
        <img
          alt="WE VALUE CONSISTENCY & PRECISION"
          src="/images/gradingIntroDetail/vsc_front.png"
          width={164}
        />
        <img
          alt="WE VALUE CONSISTENCY & PRECISION"
          src="/images/gradingIntroDetail/vsc_back.png"
          width={164}
        />
      </Box>
    </Box>
  );
}

export default VisualSpectralComparator;
