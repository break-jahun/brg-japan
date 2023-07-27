import {
  ServiceOrderDetailProps,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import useOrderInfo from '@/specifics/account/modules/hooks/useOrderInfo';
import { Box, Typography } from '@mui/material';

interface OrderDepositInfoProps {
  order: ServiceOrderDetailProps;
  serviceType: ServiceType;
}
const OrderDepositInfo = ({ order, serviceType }: OrderDepositInfoProps) => {
  const { getOrderMainText } = useOrderInfo(serviceType);

  const mainText = getOrderMainText(order);

  return (
    <Box
      sx={{
        wordBreak: 'keep-all',
        whiteSpace: 'pre-wrap',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        align="center"
        fontWeight={700}
        variant="body2"
      >
        {mainText}
      </Typography>
    </Box>
  );
};

export default OrderDepositInfo;
