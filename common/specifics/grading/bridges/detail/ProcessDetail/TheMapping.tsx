/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TheMapping() {
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
        minWidth="328px"
        width="328px"
        display="flex"
        flexDirection="column"
        rowGap="16px"
      >
        <Typography
          variant="h5"
          fontWeight={600}
          align={isMobile ? 'center' : 'left'}
        >
          {t('프로세스디테일타이틀1')}
        </Typography>
        <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
          {t('detail-18')}
        </Typography>
      </Box>
      <img
        alt="THE MAPPING"
        src="/images/gradingIntroDetail/the_mapping.png"
        width={328}
      />
    </Box>
  );
}

export default TheMapping;
