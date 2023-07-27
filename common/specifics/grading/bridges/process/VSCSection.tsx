import { VStack } from '@/common/components/VStack';
import FadeIn from '@/specifics/grading/components/FadeIn';
import SectionTitle from '@/specifics/grading/components/SectionTitle';
import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function VSCSection() {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box padding="48px 20px" bgcolor="black">
      <VStack
        padding="16px 0px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SectionTitle color="white" sx={{ padding: '0px 8px' }}>
          WE VALUE CONSISTENCY & PRECISION
        </SectionTitle>
        <Typography
          style={{
            marginTop: '8px',
            marginInline: '8px',
            wordBreak: 'keep-all',
            whiteSpace: 'pre-wrap',
          }}
          color="white"
          variant="body1"
          align="center"
        >
          {t('grading/main/brg-section-text-06')}
        </Typography>
        <FadeIn>
          <Box pt="40px" px="24px">
            <img
              alt="asia's first grading service"
              src="/images/mapping01.png"
              width={isMobile ? '100%' : '660px'}
            />
          </Box>
        </FadeIn>
        <Typography
          sx={{
            marginTop: '25px',
            marginInline: '8px',
            wordBreak: 'keep-all',
            whiteSpace: 'pre-wrap',
          }}
          color="white"
          variant="body1"
          align="center"
        >
          {t('grading/main/brg-section-text-07')}
        </Typography>
        <FadeIn>
          <Box pt="40px" px="24px">
            <img
              alt="accurate measurement"
              src="/images/accurate_measurement.png"
              width={isMobile ? '100%' : '660px'}
            />
          </Box>
        </FadeIn>
      </VStack>
    </Box>
  );
}

export default VSCSection;
