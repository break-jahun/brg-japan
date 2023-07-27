import { currentOrderTypeState } from '@/specifics/account/modules/recoil/orderList';
import { OrderTypeType } from '@/specifics/account/modules/type/orderType';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRecoilState } from 'recoil';

function useOrderTypeSelectorParser() {
  const [currentOrderType, setCurrentOrderType] = useRecoilState(
    currentOrderTypeState
  );
  const orderTypes: { title: OrderTypeType; isActive: boolean }[] = [
    {
      title: 'GRADING',
      isActive: currentOrderType === 'GRADING',
    },
    {
      title: 'REHOLDER',
      isActive: currentOrderType === 'REHOLDER',
    },
    { title: 'EVENT', isActive: currentOrderType === 'EVENT' },
  ];
  const handleOrderTypeCircleClicked = (title: OrderTypeType) => {
    setCurrentOrderType(title);
  };
  return { orderTypes, handleOrderTypeCircleClicked };
}

const OrderTypeSelector = () => {
  const { orderTypes, handleOrderTypeCircleClicked } =
    useOrderTypeSelectorParser();
  return (
    <Box display="flex" flexDirection="row" p="24px 0">
      {orderTypes.map((orderType) => {
        return (
          <OrderTypeCircle
            key={orderType.title}
            isActive={orderType.isActive}
            onClick={() => handleOrderTypeCircleClicked(orderType.title)}
          >
            <Typography fontWeight={700} variant="body2">
              {orderType.title}
            </Typography>
          </OrderTypeCircle>
        );
      })}
    </Box>
  );
};

export const OrderTypeCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  margin: '0 10px',
  opacity: isActive ? 1 : 0.3,
  backgroundImage: `linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)`,
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',

  width: 90,
  height: 90,

  [theme.breakpoints.up('sm')]: {
    width: 120,
    height: 120,
  },
}));

export default OrderTypeSelector;
