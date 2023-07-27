/* eslint-disable @next/next/no-img-element */
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

function GradingDescription() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      width={1}
      paddingTop={{ xs: '80px', sm: '160px' }}
      bgcolor="white"
      component="section"
    >
      <Box
        width={1}
        display="flex"
        justifyContent="center"
        padding={{ xs: '0px 16px 80px', sm: '0px 32px 160px' }}
      >
        <Box
          width={{ xs: '100%', sm: '730px' }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <ResponsiveFamilyTypography
              align={isMobile ? 'center' : 'left'}
              variant={isMobile ? 'h4' : 'h3'}
              fontWeight={600}
              color="secondary_20"
            >
              Grading
            </ResponsiveFamilyTypography>
            <Typography
              variant="body1"
              align={isMobile ? 'center' : 'left'}
              marginTop={{ sm: '16px' }}
              whiteSpace="break-spaces"
            >
              {t('grading-3')}
            </Typography>
          </Box>
          <img
            src="/images/grading/grading_description.png"
            alt="grading description card"
            width={328}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default GradingDescription;
