import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

const AboutUsMainSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundImage:
          'linear-gradient(350.85deg, #00325B 32.69%, rgba(0, 50, 91, 0) 59.05%)',
        paddingTop: { xs: '128px', sm: '224px' },
        paddingBottom: { xs: '604px', sm: '884px' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url(/images/aboutUs/about_us_main_card.png)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundSize: { xs: '856px', sm: '1330px' },
          backgroundPosition: 'center bottom 20px',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box>
        <Box sx={{ paddingX: '16px', whiteSpace: 'break-spaces' }}>
          <ResponsiveFamilyTypography
            variant={isMobile ? 'h4' : 'h3'}
            color="secondary_20"
            fontWeight={600}
          >
            {t('가치를더하다')}
          </ResponsiveFamilyTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsMainSection;
