import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

function VerificationIntro() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ marginBottom: '16px' }}>
        <ResponsiveFamilyTypography
          color="white"
          fontWeight={600}
          fontSize={isMobile ? '30px' : '48px'}
        >
          {t('certification조회')}
        </ResponsiveFamilyTypography>
      </Box>

      <Typography variant="subtitle1">{t('certification-1')}</Typography>
    </>
  );
}
export default VerificationIntro;
