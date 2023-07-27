import { Typography, Container } from '@mui/material';
import { GNBLayout } from '@/common/bridges/Layout';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { PrecautionAgreement } from '@/specifics/grading/bridges/submit/precaution';
import { useState } from 'react';
import { StepLayout } from '@/common/components/StepLayout';
import ReholderPrecautionContent from '@/specifics/grading/bridges/submit/precaution/ReholderPrecautionContent';

function Precaution() {
  const router = useRouter();
  const { t } = useTranslation();

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNext = () => {
    if (!isChecked) {
      alert(t('grading/payment/agree-caution'));
      return;
    }

    router.push('/reholder/submit/payment');
  };

  return (
    <GNBLayout>
      <StepLayout activeStep={1} handleNext={handleNext}>
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" align="center" my={1}>
            {t('precautions-form/cautions')}
          </Typography>
          <ReholderPrecautionContent />
          <PrecautionAgreement isChecked={isChecked} onChange={handleChange} />
        </Container>
      </StepLayout>
    </GNBLayout>
  );
}

export default Precaution;
