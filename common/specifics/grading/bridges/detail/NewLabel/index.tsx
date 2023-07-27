import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import DesktopLabelFrontBackImage from '@/specifics/grading/bridges/detail/Label/DesktopLabelFrontBackImage';
import MobileLabelFrontBackImageTab from '@/specifics/grading/bridges/detail/Label/MobileLabelSection';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import NewDashedBoxLabel from '@/specifics/grading/components/NewDashedBoxLabel';

function NewLabel() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const frontImage = `/images/gradingIntroDetail/label_front_${i18n.language}.png`;
  const backImage = `/images/gradingIntroDetail/label_back_${i18n.language}.png`;

  return (
    <SectionLayout
      sx={{ paddingTop: '80px', paddingBottom: { xs: '80px', sm: '160px' } }}
    >
      <Box
        width={{ xs: '100%', sm: '704px' }}
        margin={{ xs: 0, sm: '0 auto' }}
        paddingX={{ xs: '16px', sm: 0 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <ResponsiveFamilyTypography
          align="center"
          fontWeight={600}
          color="secondary_20"
          variant={isMobile ? 'h4' : 'h3'}
        >
          {t('detail-26')}
        </ResponsiveFamilyTypography>
        <Typography
          variant="body1"
          align="center"
          marginTop="16px"
          marginBottom="64px"
          whiteSpace="break-spaces"
          sx={{
            wordBreak: 'keep-all',
          }}
        >
          {t('detail-27')}
        </Typography>
        {isMobile ? (
          <MobileLabelFrontBackImageTab
            frontImage={frontImage}
            backImage={backImage}
          />
        ) : (
          <DesktopLabelFrontBackImage
            frontImage={frontImage}
            backImage={backImage}
          />
        )}
        <NewDashedBoxLabel
          label={t('detail-35')}
          color="secondary_40"
          backgroundColor="rgba(15, 96, 164, 0.1)"
          sx={{
            marginTop: { xs: '16px', sm: 0 },
          }}
        />
        <NewDashedBoxLabel
          label={t('detail-36')}
          color="primary_35"
          backgroundColor="rgba(98, 54, 178, 0.1)"
          sx={{ marginTop: '8px' }}
        />
      </Box>
    </SectionLayout>
  );
}

export default NewLabel;
