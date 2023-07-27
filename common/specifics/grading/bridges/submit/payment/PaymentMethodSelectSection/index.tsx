import usePaymentMethodSelectGroupParser from '@/specifics/grading/modules/hooks/parser/usePaymentMethodSelectGroupParser';
import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import SelectedMethodGuide from './SelectedMethodGuide';
import PaymentMethodButtonGroup from './PaymentMethodButtonGroup';

const PaymentMethodSelectSection = () => {
  const { title } = usePaymentMethodSelectGroupParser();

  return (
    <Box p={1}>
      <Typography variant="body2" fontWeight={700}>
        {title}
      </Typography>
      <PaymentMethodButtonGroup />
      <SelectedMethodGuide />
    </Box>
  );
};

export default memo(PaymentMethodSelectSection);
