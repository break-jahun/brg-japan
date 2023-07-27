import { OrderTypeCircle } from '@/specifics/account/bridges/orderList/OrderTypeSelector';
import { Box, Typography } from '@mui/material';

const CollectionTypeSelector = () => {
  return (
    <Box
      sx={{
        padding: '16px',
      }}
    >
      <OrderTypeCircle isActive>
        <Typography fontWeight={700} variant="body2">
          ALL
        </Typography>
      </OrderTypeCircle>
    </Box>
  );
};

export default CollectionTypeSelector;
