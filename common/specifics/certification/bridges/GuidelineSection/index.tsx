import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DesktopFrontBackImage from '@/specifics/certification/bridges/GuidelineSection/DesktopFrontBackImage';
import MobileFrontBackImage from '@/specifics/certification/components/guideline/MobileFrontBackImage';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

const GuidelineSection = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        padding: { xs: '80px 16px', sm: '160px 56px' },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          gap: '16px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <ResponsiveFamilyTypography
          variant="h4"
          color="secondary_20"
          fontWeight={600}
        >
          {t('certification-4')}
        </ResponsiveFamilyTypography>
        <Typography variant="body1">{t('certification-5')}</Typography>
      </Box>
      <Box>
        {isMobile ? (
          <MobileFrontBackImage
            frontImage={`/images/certification/serial_guide_front_${i18n.language}.png`}
            backImage={`/images/certification/serial_guide_back_${i18n.language}.png`}
            imageHeight="438px"
          />
        ) : (
          <DesktopFrontBackImage
            frontImage={`/images/certification/serial_guide_front_${i18n.language}.png`}
            backImage={`/images/certification/serial_guide_back_${i18n.language}.png`}
          />
        )}
      </Box>
    </Box>
  );
};

export default GuidelineSection;
