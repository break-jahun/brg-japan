import MediaQuery from '@/common/components/MediaQuery';
import HOrderListItemSummary from '@/specifics/account/bridges/orderList/OrderListItemSummary/HOrderListItemSummary';
import VOrderListItemSummary from '@/specifics/account/bridges/orderList/OrderListItemSummary/VOrderListItemSummary';
import { useTranslation } from 'react-i18next';

interface OrderListItemsProps {
  serviceType: string;
  items: any[];
  keys: any[];
  isDetailHidden?: boolean;
  handleDetailItemClicked: (id: number) => void;
}

function OrderListItems({
  serviceType,
  items,
  keys,
  isDetailHidden,
  handleDetailItemClicked,
}: OrderListItemsProps) {
  const { t } = useTranslation();

  return (
    <>
      <MediaQuery isMobile>
        {items.map((item) => {
          return (
            <VOrderListItemSummary
              key={item.id}
              title={serviceType}
              item={item}
              keys={keys}
              message={item.orderMainText}
              handleClick={handleDetailItemClicked}
              isDetailHidden={isDetailHidden}
            />
          );
        })}
      </MediaQuery>
      <MediaQuery isMobile={false}>
        {items.map((item) => {
          return (
            <HOrderListItemSummary
              key={item.id}
              title={serviceType}
              item={item}
              keys={keys.concat({
                text: t('orderList-11'),
                value: 'orderMainText',
                width: 4 / 12,
              })}
              handleClick={handleDetailItemClicked}
              isDetailHidden={isDetailHidden}
            />
          );
        })}
      </MediaQuery>
    </>
  );
}

export default OrderListItems;
