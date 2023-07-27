import useGetGradingOrderQuery from '@/common/modules/hooks/useGetGradingOrderQuery';
import { ServiceOrderDetailProps } from '@/common/types/serviceOrder/serviceOrder';
import {
  getOrderDetailOfGradingOrder,
  getOrderDetailOfReholderOrder,
} from '@/common/utils/order/equalizeOrder';
import OrderListItems from '@/specifics/account/bridges/orderList/OrderListItems';
import { useGetReholderOrderQuery } from '@/specifics/account/modules/apihooks/useGetReholderOrderQuery';
import useOrderInfo from '@/specifics/account/modules/hooks/useOrderInfo';
import Router from 'next/router';
import { useMemo } from 'react';

function useReholderOrderList(statusFilter: string) {
  // data hook
  const { data: reholderOrders } = useGetReholderOrderQuery();
  const orderListItems = useMemo(() => {
    if (reholderOrders) {
      if (statusFilter === 'ALL') {
        return reholderOrders.data.result.rows;
      }

      return reholderOrders.data.result.rows.filter(
        (order) => order.reholderOrderStatus === statusFilter
      );
    }
    return [];
  }, [reholderOrders, statusFilter]);
  return { orderListItems };
}

function useReholderOrderListParser(rawItems: any[]) {
  // fitting hook
  const { getOrderStatusText, getOrderMainText, getOrderDate } = useOrderInfo();
  const items = rawItems
    .map((item) => getOrderDetailOfReholderOrder(item))
    .map((item) => {
      if (item) {
        return {
          id: item.id,
          orderStatusText: getOrderStatusText(item),
          orderQuantity: item.totalQt,
          orderDate: getOrderDate(item),
          orderMainText: getOrderMainText(item),
        };
      }
      return {};
    });

  const keys = [
    {
      value: 'orderStatusText',
      text: '주문 상태',
      width: 2 / 12,
    },
    {
      value: 'orderQuantity',
      text: '주문 수량',
      width: 2 / 12,
    },
    {
      value: 'orderDate',
      text: '주문 일자',
      width: 3 / 12,
    },
  ];
  const handleDetailItemClicked = (id: number) => {
    Router.push(`/account/orderList/reholder/${id}`);
  };
  return {
    items,
    keys,
    handleDetailItemClicked,
  };
}
function ReholderOrderList({ statusFilter }: { statusFilter: string }) {
  const { orderListItems } = useReholderOrderList(statusFilter);
  const { items, keys, handleDetailItemClicked } =
    useReholderOrderListParser(orderListItems);
  return (
    <OrderListItems
      serviceType="REHOLDER"
      items={items}
      keys={keys}
      handleDetailItemClicked={handleDetailItemClicked}
    />
  );
}

export default ReholderOrderList;
