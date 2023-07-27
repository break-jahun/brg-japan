import AmountTable from '@/common/bridges/AmounTable';
import useOrderComplete from '@/specifics/grading/modules/hooks/useOrderComplete';

const GradingOrderCompleteAmountTable = () => {
  const { data } = useOrderComplete();

  if (!data) {
    return null;
  }

  return <AmountTable order={data} serviceType="GRADING" />;
};

export default GradingOrderCompleteAmountTable;
