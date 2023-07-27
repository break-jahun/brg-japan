import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JpGradingIntro from 'brg-japan/specifics/grading/bridges/JpGradingIntro';
import GradingDescription from '@/specifics/grading/bridges/intro/GradingDescription';
import WhyBrgSlider from '@/specifics/grading/bridges/intro/WhyBrgSlider';
import BrgCoreCompetence from '@/specifics/grading/bridges/intro/BrgCoreCompetence';
import GradingLinkSection from '@/specifics/grading/components/GradingLinkSection';

function GradingPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        wordBreak: 'break-word',
        whiteSpace: 'break-spaces',
      }}
    >
      <JpGradingIntro />
      <GradingDescription />
      <WhyBrgSlider />
      <BrgCoreCompetence />
      <GradingLinkSection
        title={t('brg그레이딩디테일')}
        description={t('brg그레이딩디테일설명')}
        buttonText={t('더보기')}
        link="/grading/detail"
      />
    </Box>
  );
}

export default GradingPage;
