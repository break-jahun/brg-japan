import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import BlackGradientBackground from '@/specifics/grading/components/BlackGradientBackground';
import FadeIn from '@/specifics/grading/components/FadeIn';
import SectionTitle from '@/specifics/grading/components/SectionTitle';

function UnbiasedGradingSection() {
  const { t } = useTranslation();

  return (
    <BlackGradientBackground>
      <Box>
        <SectionTitle color="white">UNBIASED GRADING</SectionTitle>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          sx={{ maxWidth: '480px', margin: '0 auto', wordBreak: 'keep-all' }}
        >
          {t('grading/main/brg-info-10')}
        </Typography>

        <FadeIn>
          <Box
            marginTop="16px"
            padding="8px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={1}
          >
            <img
              width="90%"
              alt="Son Heungmin card"
              src="/images/process_heungmin_son.png"
              style={{ maxWidth: '900px' }}
            />
          </Box>
        </FadeIn>
      </Box>
    </BlackGradientBackground>
  );
}

export default UnbiasedGradingSection;
