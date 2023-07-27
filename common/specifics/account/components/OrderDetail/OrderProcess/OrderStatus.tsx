import { Box, Typography } from '@mui/material';

interface OrderStatusProps {
  title?: string;
  description: string | undefined;
}
function OrderStatus({ title, description }: OrderStatusProps) {
  return (
    <>
      <Box display="flex" justifyContent="center" my={1}>
        <Typography variant="caption" fontWeight={700}>
          {title}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" my={1} textAlign="center">
        <Typography variant="h6" fontWeight={700}>
          {description}
        </Typography>
      </Box>
    </>
  );
}

export default OrderStatus;
