import OrderListAccordion from '@/common/components/OrderComplete/OrderListAccordion';
import useItemSummary from '@/common/modules/hooks/useItemSummary';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';
import { ReholderDetailResultType } from '@/specifics/account/modules/type/reholderOrder';
import useReholderOrderComplete from '@/specifics/reholder/modules/hooks/useReholderOrderComplete';
import useReholderOrderDetail from '@/specifics/reholder/modules/hooks/useReholderOrderDetail';
import { useTranslation } from 'react-i18next';

function ReholderOrderListAccordion() {
  const { data } = useReholderOrderDetail();
  const { orderList, quantity, getItemSummary } =
    useOrderListAccordionParser(data);

  const { itemSummary } = useItemSummary({
    serviceType: 'REHOLDER',
  });

  if (!data) {
    return null;
  }

  return (
    <OrderListAccordion
      getItemSummary={getItemSummary}
      itemSummary={itemSummary}
      orderList={orderList}
      quantity={quantity}
    />
  );
}

export default ReholderOrderListAccordion;

const useOrderListAccordionParser = (
  data: ReholderDetailResultType | undefined
) => {
  const { t } = useTranslation();

  const orderList = t('grading/order/complete/payment-list');
  const quantity = `${t('grading/order/complete/total')} ${data?.totalQt} ${t(
    'general/a-sheet'
  )}`;
  const getItemSummary = (
    summaryName: string,
    contentName: string,
    contentQt: string
  ) => `${summaryName} (${contentName}) ${contentQt} ${t('general/a-sheet')}`;
  return {
    orderList,
    quantity,
    getItemSummary,
  };
};
