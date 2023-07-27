import { useTranslation } from 'react-i18next';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import HostedEventSlider from './HostedEventSliderSection';

const HostedEvent = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'secondary_10',
        padding: { xs: '64px 0 28px', sm: '160px 0 136px' },
        color: 'white',
      }}
    >
      <ResponsiveFamilyTypography
        variant={isMobile ? 'h4' : 'h3'}
        fontWeight={600}
        textAlign="center"
      >
        {t('이벤트히스토리')}
      </ResponsiveFamilyTypography>
      <HostedEventSlider />
    </Box>
  );
};

export default HostedEvent;
