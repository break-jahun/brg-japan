import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import DashedBoxLabel from '@/specifics/grading/components/DashedBoxLabel';
import DesktopLabelFrontBackImage from '@/specifics/grading/bridges/detail/Label/DesktopLabelFrontBackImage';
import MobileLabelFrontBackImageTab from '@/specifics/grading/bridges/detail/Label/MobileLabelSection';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

function Label() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const frontImage = `/images/gradingIntroDetail/label_front_jp.png`;
  const backImage = `/images/gradingIntroDetail/label_back_jp.png`;

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
          ラベル
        </ResponsiveFamilyTypography>
        <Typography
          variant="body1"
          align="center"
          marginTop="16px"
          marginBottom="64px"
          whiteSpace="break-spaces"
          sx={{
            wordBreak: 'break-word',
          }}
        >
          {`brgグレードカードには、カードの説明とグレードを示す独自のラベルが付いています。\nまた、brgラベルは偽造防止透明蛍光印刷により偽造を防ぎます。`}
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
          label="ラベル情報"
          color="secondary_40"
          sx={{ marginTop: { xs: '16px', sm: 0 } }}
        />
        <DashedBoxLabel
          label="偽造（改ざん）防止技術"
          color="primary_35"
          sx={{ marginTop: '8px' }}
        />
      </Box>
    </SectionLayout>
  );
}

export default Label;
