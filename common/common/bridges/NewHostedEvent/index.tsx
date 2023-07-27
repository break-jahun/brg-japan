import { useTranslation } from 'react-i18next';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import HostedEventSliderSection from '@/common/bridges/HostedEvent/HostedEventSliderSection';

const NewHostedEvent = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'secondary_10',
        padding: { xs: '80px 0 64px', sm: '80px 0' },
        color: 'white',
      }}
    >
      <Box
        sx={{
          maxWidth: '768px',
          margin: '0 auto',
        }}
      >
        <ResponsiveFamilyTypography
          variant={isMobile ? 'h4' : 'h3'}
          fontWeight={600}
          textAlign="center"
        >
          {t('about-14')}
        </ResponsiveFamilyTypography>
        <HostedEventSliderSection />
      </Box>
    </Box>
  );
};

export default NewHostedEvent;
