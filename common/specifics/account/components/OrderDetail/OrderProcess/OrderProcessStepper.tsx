import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import OrderProcessIcon from './OrderProcessIcon';
import CustomStepConnector from './CustomStepConnetor';

interface OrderProcessStepProps {
  validSteps: any;
  currentStepIndex: any;
}
function OrderProcessStepper({
  validSteps,
  currentStepIndex,
}: OrderProcessStepProps) {
  return (
    <Box display="flex" justifyContent="center" py={1}>
      <Stepper
        sx={{ width: 1 }}
        alternativeLabel
        activeStep={currentStepIndex}
        connector={<CustomStepConnector />}
      >
        {validSteps.map((step: any) => (
          <Step key={step.label} sx={{ padding: 0 }}>
            <StepLabel
              StepIconComponent={OrderProcessIcon}
              StepIconProps={{
                icon: step.status,
                active: currentStepIndex >= step.step,
              }}
            >
              <Typography variant="caption">{step.label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default OrderProcessStepper;
