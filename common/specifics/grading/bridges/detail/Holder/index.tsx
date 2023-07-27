import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import HolderSlider from '@/specifics/grading/bridges/detail/Holder/HolderSlider';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

function Holder() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionLayout
      bgColor="secondary_10"
      sx={{
        position: 'relative',
        padding: { xs: '80px 0px', sm: '80px 0px 160px 0px' },
        backgroundImage: `url('/images/gradingIntroDetail/holder_background.png')`,
        backgroundSize: '484px 448px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top 64px',
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box
          width={{ xs: '100%', sm: '704px' }}
          padding={{ xs: '0px 16px', sm: '0px 32px' }}
          margin={{ xs: 0, sm: '0 auto' }}
        >
          <ResponsiveFamilyTypography
            color="white"
            align="center"
            variant={isMobile ? 'h4' : 'h3'}
            fontWeight={600}
          >
            {t('홀더')}
          </ResponsiveFamilyTypography>

          <Typography
            color="white"
            variant="body1"
            marginTop="16px"
            align="center"
            whiteSpace="break-spaces"
            marginBottom={{ xs: '40px', sm: '24px' }}
            sx={{ wordBreak: 'keep-all' }}
          >
            {t('홀더설명')}
          </Typography>
        </Box>
        <HolderSlider />
      </Box>
    </SectionLayout>
  );
}

export default Holder;
