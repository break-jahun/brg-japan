import { GNBLayout } from '@/common/bridges/Layout';
import GradingOrderCompleteAddressTable from '@/specifics/grading/bridges/orderComplete/GradingOrderCompleteAddressTable';
import GradingOrderCompleteNotice from '@/specifics/grading/bridges/orderComplete/GradingOrderCompleteNotice';
import OrderConfirm from '@/specifics/grading/bridges/orderComplete/OrderConfirm';
import ShippingNotice from '@/specifics/grading/bridges/orderComplete/ShippingNotice';
import { Box, styled } from '@mui/material';
import GradingOrderCompleteAmountTable from '@/specifics/grading/bridges/orderComplete/GradingOrderCompleteAmountTable';
import GradingOrderListAccordion from '@/specifics/grading/bridges/orderComplete/GradingOrderListAccordion';

function OrderCompletePage() {
  return (
    <GNBLayout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          p: 1,
        }}
      >
        <ShadowCard>
          <GradingOrderCompleteNotice />
          <GradingOrderCompleteAddressTable />
          <GradingOrderCompleteAmountTable />
          <GradingOrderListAccordion />
          <ShippingNotice />
          <OrderConfirm />
        </ShadowCard>
      </Box>
    </GNBLayout>
  );
}

export default OrderCompletePage;

const ShadowCard = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  padding: '5px',
  width: '750px',
  borderRadius: '10px',
  background: '#fff',
  boxShadow: '0 8px 24px 0 rgba( 31, 38, 135, 0.37 )',
  [theme.breakpoints.up('sm')]: {
    padding: '10px 20px 10px',
  },
}));
