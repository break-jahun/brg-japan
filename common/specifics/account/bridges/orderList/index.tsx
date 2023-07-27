import EventOrderList from '@/specifics/account/bridges/orderList/EventOrderList';
import GradingOrderList from '@/specifics/account/bridges/orderList/GradingOrderList';
import ReholderOrderList from '@/specifics/account/bridges/orderList/ReholderOrderList';

import {
  currentOrderStatusState,
  currentOrderTypeState,
} from '@/specifics/account/modules/recoil/orderList';
import { useRecoilState } from 'recoil';

function useOrderListParser() {
  const [orderType] = useRecoilState(currentOrderTypeState);
  const [orderStatus] = useRecoilState(currentOrderStatusState);

  return { orderType, orderStatus };
}

function OrderList() {
  const { orderType, orderStatus } = useOrderListParser();

  if (orderType === 'GRADING')
    return <GradingOrderList statusFilter={orderStatus} />;
  if (orderType === 'REHOLDER')
    return <ReholderOrderList statusFilter={orderStatus} />;
  if (orderType === 'EVENT')
    return <EventOrderList statusFilter={orderStatus} />;
  return null;
}

export default OrderList;
