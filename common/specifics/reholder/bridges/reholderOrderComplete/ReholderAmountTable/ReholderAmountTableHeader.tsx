import useAmountTableHeaderParser from '@/specifics/grading/modules/hooks/parser/useAmountTableHeaderParser';
import { Box, Typography } from '@mui/material';

const ReholderAmountTableHeader = () => {
  const { paymentAmount } = useAmountTableHeaderParser();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="body2" fontWeight={700}>
        {paymentAmount}
      </Typography>
    </Box>
  );
};

export default ReholderAmountTableHeader;
