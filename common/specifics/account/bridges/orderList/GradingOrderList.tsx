import useGetGradingOrderQuery from '@/common/modules/hooks/useGetGradingOrderQuery';
import { ServiceOrderDetailProps } from '@/common/types/serviceOrder/serviceOrder';
import { getOrderDetailOfGradingOrder } from '@/common/utils/order/equalizeOrder';
import OrderListItems from '@/specifics/account/bridges/orderList/OrderListItems';
import useOrderInfo from '@/specifics/account/modules/hooks/useOrderInfo';
import Router from 'next/router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function useGradingOrderList(statusFilter: string) {
  // data hook
  const { data: gradingOrders } = useGetGradingOrderQuery();
  const orderListItems = useMemo(() => {
    if (gradingOrders) {
      if (statusFilter === 'ALL') {
        return gradingOrders.data.rows;
      }
      return gradingOrders.data.rows.filter(
        (order) => order.gradingOrderStatus === statusFilter
      );
    }
    return [];
  }, [gradingOrders, statusFilter]);
  return { orderListItems };
}

function useGradingOrderListParser(rawItems: any[]) {
  // fitting hook
  const { getOrderStatusText, getOrderMainText, getOrderDate } = useOrderInfo();
  const { t } = useTranslation();
  const items = rawItems
    .map((item) => getOrderDetailOfGradingOrder(item))
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
      text: t('general/order-status'),
      width: 2 / 12,
    },
    {
      value: 'orderQuantity',
      text: t('general/order-quantity'),
      width: 2 / 12,
    },
    {
      value: 'orderDate',
      text: t('general/order-day'),
      width: 3 / 12,
    },
  ];
  const handleDetailItemClicked = (id: number) => {
    Router.push(`/account/orderList/grading/${id}`);
  };
  return {
    items,
    keys,
    handleDetailItemClicked,
  };
}
function GradingOrderList({ statusFilter }: { statusFilter: string }) {
  const { orderListItems } = useGradingOrderList(statusFilter);
  const { items, keys, handleDetailItemClicked } =
    useGradingOrderListParser(orderListItems);
  return (
    <OrderListItems
      serviceType="GRADING"
      items={items}
      keys={keys}
      handleDetailItemClicked={handleDetailItemClicked}
    />
  );
}

export default GradingOrderList;
