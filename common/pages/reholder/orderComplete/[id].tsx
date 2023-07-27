import { GNBLayout } from '@/common/bridges/Layout';
import OrderConfirm from '@/specifics/grading/bridges/orderComplete/OrderConfirm';
import ShippingNotice from '@/specifics/grading/bridges/orderComplete/ShippingNotice';
import { Box, styled } from '@mui/material';
import ReholderOrderCompleteNotice from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderOrderCompleteNotice';
import ReholderOrderCompleteAddressTable from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderOrderCompleteAddressTable';
import ReholderOrderCompleteAmountTable from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderOrderCompleteAmountTable';
import ReholderOrderListAccordion from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderOrderListAccordion';

function ReholderOrderCompletePage() {
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
          <ReholderOrderCompleteNotice />
          <ReholderOrderCompleteAddressTable />
          <ReholderOrderCompleteAmountTable />
          <ReholderOrderListAccordion />
          <ShippingNotice />
          <OrderConfirm />
        </ShadowCard>
      </Box>
    </GNBLayout>
  );
}

export default ReholderOrderCompletePage;

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
