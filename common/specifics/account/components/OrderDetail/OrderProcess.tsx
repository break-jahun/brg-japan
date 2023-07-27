import OrderProcessStepper from '@/specifics/account/components/OrderDetail/OrderProcess/OrderProcessStepper';
import OrderStatus from '@/specifics/account/components/OrderDetail/OrderProcess/OrderStatus';
import { Container } from '@mui/material';

interface orderProcessProps {
  title?: string;
  stepText: string;
  validSteps: any[];
  activeStep: number;
}
function OrderProcess({
  title,
  stepText,
  validSteps,
  activeStep,
}: orderProcessProps) {
  return (
    <>
      <OrderStatus title={title} description={stepText} />
      <Container maxWidth="sm">
        <OrderProcessStepper
          validSteps={validSteps}
          currentStepIndex={activeStep}
        />
      </Container>
    </>
  );
}
export default OrderProcess;
