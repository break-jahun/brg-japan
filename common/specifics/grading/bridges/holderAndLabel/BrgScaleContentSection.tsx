import { useTranslation } from 'react-i18next';
import { Box, Typography, styled } from '@mui/material';
import { LocaleType } from '@/common/types/common';
import { VStack } from '@/common/components/VStack';
import BlackGradientBackground from '@/specifics/grading/components/BlackGradientBackground';
import FadeIn from '@/specifics/grading/components/FadeIn';
import QrTooltip from '@/specifics/grading/bridges/holderAndLabel/QrTooltip';

type ImageSrcData = {
  [key in LocaleType]: string;
};

const scaleImageSrcData: ImageSrcData = {
  ko: '/images/holderAndLabel_brg_scale.png',
  en: '/images/holderAndLabel_brg_scale_en.png',
  tw: '/images/holderAndLabel_brg_scale.png',
};
const labelAndCaseImageSrcData: ImageSrcData = {
  ko: '/images/holderAndLabel_brg_scale_02.png',
  en: '/images/holderAndLabel_brg_scale_en_02.png',
  tw: '/images/holderAndLabel_brg_scale_02.png',
};

function BrgScaleContentSection() {
  const { t, i18n } = useTranslation();

  return (
    <BlackGradientBackground>
      <VStack justifyContent="center" alignItems="center">
        <Typography
          fontWeight={900}
          color="white"
          component="h1"
          variant="h4"
          align="center"
          sx={{ padding: '16px 0' }}
        >
          BREAK GRADING
        </Typography>
        <Typography
          fontWeight={700}
          color="white"
          component="h2"
          variant="h5"
          align="center"
          paragraph
        >
          BREAK GRADING - BRG
        </Typography>
        <br />
        <Typography
          color="white"
          variant="body1"
          align="center"
          paragraph
          sx={{ maxWidth: '444px', wordBreak: 'keep-all' }}
        >
          {t('grading/main/brg-info-7')}
        </Typography>
        <Typography color="font_body" variant="body2" align="center">
          {t('grading/main/brg-info-8')}
        </Typography>
        <FadeIn>
          <Box
            width={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={{ xs: '0px', sm: '24px' }}
          >
            <BrgScaleImage
              alt="brg scale description"
              src={scaleImageSrcData[i18n.language as LocaleType]}
            />
          </Box>
        </FadeIn>
        <FadeIn>
          <Box
            width={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={{ xs: '0px', sm: '24px' }}
          >
            <Box position="relative">
              <img
                alt="brg label and case description"
                src={labelAndCaseImageSrcData[i18n.language as LocaleType]}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                }}
              />
              <QrTooltip />
            </Box>
          </Box>
        </FadeIn>
      </VStack>
    </BlackGradientBackground>
  );
}

export default BrgScaleContentSection;

const BrgScaleImage = styled('img')(({ theme }) => ({
  width: '140%',

  [theme.breakpoints.up('sm')]: {
    width: '100%',
    maxWidth: '1200px',
  },
}));
