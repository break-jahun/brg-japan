import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import DashedBoxLabel from '@/specifics/grading/components/DashedBoxLabel';
import DesktopLabelFrontBackImage from '@/specifics/grading/bridges/detail/Label/DesktopLabelFrontBackImage';
import MobileLabelFrontBackImageTab from '@/specifics/grading/bridges/detail/Label/MobileLabelSection';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

function Label() {
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
          {t('라벨')}
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
          {t('라벨설명')}
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
        <DashedBoxLabel
          label={t('라벨이미지가이드1')}
          color="secondary_40"
          sx={{
            marginTop: { xs: '16px', sm: 0 },
          }}
        />
        <DashedBoxLabel
          label={t('라벨이미지가이드2')}
          color="primary_35"
          sx={{ marginTop: '8px' }}
        />
      </Box>
    </SectionLayout>
  );
}

export default Label;
