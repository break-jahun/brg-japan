import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  styled,
  Theme,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { CommonButton } from '@/common/components/Button';
import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
  activeStep: number;
  handleNext: () => void;
}

function StepLayout({ children, activeStep, handleNext }: Props) {
  const { t } = useTranslation();
  const router = useRouter();
  const handlePrevious = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Box
      maxWidth={960}
      margin="auto"
      paddingTop={2}
      paddingX={{ xs: 2, sm: 0 }}
    >
      <VStack>
        <Typography variant="h5" align="center">
          {t('ShippingMethod-1')}
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ marginTop: 2 }}>
          <Step key={0}>
            <StepLabel>{t('ShippingMethod-2')}</StepLabel>
          </Step>
          <Step key={1}>
            <StepLabel>{t('ShippingMethod-3')}</StepLabel>
          </Step>
          <Step key={2}>
            <StepLabel>{t('ShippingMethod-4')}</StepLabel>
          </Step>
          <Step key={3}>
            <StepLabel>{t('ShippingMethod-5')}</StepLabel>
          </Step>
        </Stepper>
        {children}
        <HStack justifyContent="center" gap={2} my={3}>
          <PreviousButton onClick={handlePrevious}>
            {t('ShippingMethod-14')}
          </PreviousButton>
          <NextButton onClick={handleNext}>{t('ShippingMethod-15')}</NextButton>
        </HStack>
      </VStack>
    </Box>
  );
}

const PreviousButton = styled(Button)<{}>(({ theme }) => ({
  borderRadius: 50,
  color: 'white',
  boxShadow: '5px 5px 10px -5px rgb(0 0 0 / 10%)',
  backgroundColor: theme.palette.gray_3,
  fontWeight: 800,
  letterSpacing: 2,
  padding: '6px 16px',
}));

const NextButton = styled(CommonButton)({
  padding: '6px 16px',
});

export default StepLayout;
