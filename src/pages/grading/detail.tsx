import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JpGradingDetailIntro from 'brg-japan/specifics/grading/bridges/Detail/JpGradingDetailIntro';
import ProcessStep from '@/specifics/grading/bridges/detail/ProcessStep';
import Holder from '@/specifics/grading/bridges/detail/Holder';
import Label from 'brg-japan/specifics/grading/bridges/Detail/Label';
import GradingScale from '@/specifics/grading/bridges/GradingScale';
import GradingLinkSection from '@/specifics/grading/components/GradingLinkSection';
import { useTranslation } from 'react-i18next';

function GradingDetailPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        whiteSpace: 'break-spaces',
      }}
    >
      <JpGradingDetailIntro />
      <ProcessStep />
      <Holder />
      <Label />
      <GradingScale />
      <GradingLinkSection
        title={t('brg그레이딩')}
        buttonText={t('그레이딩으로돌아가기')}
        link="/grading"
      />
    </Box>
  );
}

export default GradingDetailPage;
