import ReholderAmountTable from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderAmountTable';
import useReholderOrderComplete from '@/specifics/reholder/modules/hooks/useReholderOrderComplete';
import useReholderOrderDetail from '@/specifics/reholder/modules/hooks/useReholderOrderDetail';

function ReholderOrderCompleteAmountTable() {
  const { data } = useReholderOrderDetail();

  if (!data) {
    return null;
  }

  return <ReholderAmountTable order={data} serviceType="REHOLDER" />;
}

export default ReholderOrderCompleteAmountTable;
