import { GNBLayout } from '@/common/bridges/Layout';
import { HStack } from '@/common/components/HStack';
import AccountLayout from '@/specifics/account/bridges/AccountLayout';
import OrderList from '@/specifics/account/bridges/orderList';
import OrderStatusSelector from '@/specifics/account/bridges/orderList/OrderStatusSelector';
import OrderTypeSelector from '@/specifics/account/bridges/orderList/OrderTypeSelector';
import { Box, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function OrderListPage() {
  return (
    <GNBLayout>
      <AccountLayout title="MY ORDERS">
        <OrderTypeSelector />
        <HStack justifyContent="space-between" alignItems="center">
          <OrderListTitleWithTip />
          <OrderStatusSelector />
        </HStack>
        <OrderList />
      </AccountLayout>
    </GNBLayout>
  );
}

const OrderListTitleWithTip = () => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="row" gap="10px" alignItems="center">
      <Typography variant="body1" color="gray_700">
        {t('general/order-list')}
      </Typography>
      <Tooltip
        enterTouchDelay={0}
        placement="bottom-start"
        title={`${t('account/order-list/detail-button')}`}
      >
        <Box
          bgcolor="black"
          color="white"
          fontWeight={900}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={(theme) => ({
            width: 14,
            height: 14,
            borderRadius: 7,
            fontSize: 10,
            [theme.breakpoints.up('sm')]: {
              width: 20,
              height: 20,
              borderRadius: 10,
              fontSize: 14,
            },
          })}
        >
          ?
        </Box>
      </Tooltip>
    </Box>
  );
};

export default OrderListPage;
