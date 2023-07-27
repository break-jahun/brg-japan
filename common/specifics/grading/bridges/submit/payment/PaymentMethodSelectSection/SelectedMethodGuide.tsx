import {
  gradingOrderState,
  paymentMethodState,
} from '@/common/modules/recoil/gradingOrder';
import useSelectMethodGuideParser from '@/specifics/grading/modules/hooks/useSelectMethodGuideParser';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

const SelectedMethodGuide = () => {
  const { t } = useTranslation();
  const method = useRecoilValue(paymentMethodState);
  const gradingOrder = useRecoilValue(gradingOrderState);

  const { getPaymentMethodSelectionText, formNextStep } =
    useSelectMethodGuideParser();

  if (!method) {
    return null;
  }

  return (
    <Box pt={1}>
      <Typography variant="body2" align="center" gutterBottom fontWeight={700}>
        {getPaymentMethodSelectionText(method)}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        {formNextStep}
      </Typography>
    </Box>
  );
};

export default SelectedMethodGuide;
