import { useDeliveryCompanyListQuery } from '@/common/modules/apiHooks/delivery';
import { useGetProductOrderQuery } from '@/common/modules/apiHooks/useGetProductOrderQuery';
import { ProductOrderAttributes } from '@/common/types/product/productOrder';
import { getOrderDetailOfProductOrder } from '@/common/utils/order/equalizeOrder';
import OrderListItems from '@/specifics/account/bridges/orderList/OrderListItems';
import useOrderInfo from '@/specifics/account/modules/hooks/useOrderInfo';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function useProductOrderList(statusFilter: string) {
  // data hook
  const { data: productOrders } = useGetProductOrderQuery({
    refetchOnMount: true,
  });
  const orderListItems = useMemo(() => {
    if (productOrders) {
      if (statusFilter === 'ALL') {
        return productOrders.data.rows;
      }
      return productOrders.data.rows.filter(
        (order) => order.productOrderStatus === statusFilter
      );
    }
    return [];
  }, [productOrders, statusFilter]);
  return { orderListItems };
}

function useEventOrderListParser(rawItems: ProductOrderAttributes[]) {
  // fitting hook
  const { getOrderMainText, getOrderDate } = useOrderInfo('EVENT');
  const { data: deliveryCompanyListData } = useDeliveryCompanyListQuery();
  const deliveryCompanyList = useMemo(() => {
    return deliveryCompanyListData?.Company;
  }, [deliveryCompanyListData?.Company]);
  const { t } = useTranslation();
  const items = rawItems
    .map((item) => getOrderDetailOfProductOrder(item))
    .map((item) => {
      if (item) {
        const showExtraMessage = ['SHIPPING_OUT', 'SHIPPING_OUT_COMPLETE'].some(
          (status) => status === item.serviceOrderStatus
        );
        const deliveryExtraMessage =
          item?.deliveryComOut && deliveryCompanyList
            ? `\n${
                deliveryCompanyList.filter(
                  (company) => company.Code === item?.deliveryComOut
                )[0].Name
              } / ${item?.trackingNumOut ?? t('general/no-information')}`
            : '\n송장 번호 조회에 실패했습니다.';
        return {
          orderPhotoSrc: item.product?.productPhoto,
          orderName: item.product?.name,
          orderQuantity: item.totalQt,
          orderDate: getOrderDate(item),
          orderMainText: `${getOrderMainText(item)}${
            showExtraMessage ? deliveryExtraMessage : ''
          }`,
        };
      }
      return {};
    })
    .filter((i) => i);

  const keys = [
    {
      value: 'orderName',
      text: '상품',
    },
    {
      value: 'orderQuantity',
      text: '주문 수량',
      width: 1 / 12,
    },
    {
      value: 'orderDate',
      text: '주문 일자',
      width: 2 / 12,
    },
  ];
  return {
    items,
    keys,
  };
}
function EventOrderList({ statusFilter }: { statusFilter: string }) {
  const { orderListItems } = useProductOrderList(statusFilter);
  const { items, keys } = useEventOrderListParser(orderListItems);
  return (
    <OrderListItems
      serviceType="EVENT"
      items={items}
      keys={keys}
      isDetailHidden
      handleDetailItemClicked={() => {}}
    />
  );
}

export default EventOrderList;
