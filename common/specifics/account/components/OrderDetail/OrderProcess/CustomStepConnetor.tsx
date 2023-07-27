import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

const CustomStepConnector = styled(StepConnector)({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#6c35bd',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#6c35bd',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
});

export default CustomStepConnector;
