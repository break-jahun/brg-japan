import OrderListAccordion from '@/common/components/OrderComplete/OrderListAccordion';
import useItemSummary from '@/common/modules/hooks/useItemSummary';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import useOrderComplete from '@/specifics/grading/modules/hooks/useOrderComplete';
import { useTranslation } from 'react-i18next';

const GradingOrderListAccordion = () => {
  const { data } = useOrderComplete();
  const { orderList, quantity, getItemSummary } = useOrderListAccordionParser(
    data as GradingOrderAttributes
  );

  const { itemSummary } = useItemSummary({
    orderItems: data?.gradingOrderItems,
    serviceType: 'GRADING',
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
};

export default GradingOrderListAccordion;

const useOrderListAccordionParser = (data: GradingOrderAttributes) => {
  const { t } = useTranslation();

  const orderList = t('orderComplete-3');

  const quantity = t('orderComplete-4', { number: data?.totalQt });

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
