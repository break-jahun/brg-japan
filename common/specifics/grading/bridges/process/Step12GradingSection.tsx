import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import Step12GradingSlide from '@/specifics/grading/bridges/process/Step12GradingSlide';
import MediaQuery from '@/common/components/MediaQuery';
import Step12GradingCardList from '@/specifics/grading/bridges/process/Step12GradingCardList';
import BlackGradientBackground from '@/specifics/grading/components/BlackGradientBackground';
import { VStack } from '@/common/components/VStack';
import SectionTitle from '@/specifics/grading/components/SectionTitle';

function Step12GradingSection() {
  const { t } = useTranslation();

  return (
    <>
      <Box padding="48px 0px" bgcolor="white">
        <VStack
          padding="0px 20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <SectionTitle>12 STEP GRADING</SectionTitle>
          <Typography
            variant="body1"
            align="center"
            color="gray_5"
            paragraph
            sx={{ wordBreak: 'keep-all' }}
          >
            {t('grading/main/12step-grading')}
          </Typography>
        </VStack>
        {/* Mobile */}
        <MediaQuery isMobile>
          <Step12GradingSlide />
        </MediaQuery>
        {/* PC */}
        <MediaQuery>
          <Step12GradingCardList />
        </MediaQuery>
      </Box>
      <BlackGradientBackground>
        <Typography
          align="center"
          color="white"
          variant="body1"
          sx={{ padding: '24px 0px' }}
        >
          {t('grading/main/brg-info-11')}
        </Typography>
      </BlackGradientBackground>
    </>
  );
}

export default Step12GradingSection;
