import { Box } from '@mui/material';
import { GNBLayout } from '@/common/bridges/Layout';
import OrderSummary from '@/specifics/grading/bridges/submit/payment/OrderSummary';
import PaymentMethodSelectSection from '@/specifics/grading/bridges/submit/payment/PaymentMethodSelectSection';
import TermsOfServiceAgreement from '@/specifics/grading/bridges/submit/payment/TermsOfServiceAgreement';
import usePayment from '@/specifics/grading/modules/hooks/usePayment';
import useCalculateEffect from '@/specifics/grading/modules/hooks/useCalculataEffect';
import { StepLayout } from '@/common/components/StepLayout';

function ReholderPayment() {
  const { moveToPaymentStep } = usePayment({ serviceType: 'REHOLDER' });

  useCalculateEffect({ serviceType: 'REHOLDER' });

  return (
    <GNBLayout>
      <StepLayout activeStep={2} handleNext={moveToPaymentStep}>
        <Box m={1}>
          <OrderSummary />
          <PaymentMethodSelectSection />
          <TermsOfServiceAgreement />
        </Box>
      </StepLayout>
    </GNBLayout>
  );
}

export default ReholderPayment;
