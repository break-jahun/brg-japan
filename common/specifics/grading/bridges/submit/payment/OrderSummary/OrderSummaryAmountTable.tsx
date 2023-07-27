import AmountTable from '@/common/bridges/AmounTable';
import {
  gradingOrderState,
  serviceTypeState,
} from '@/common/modules/recoil/gradingOrder';
import { useRecoilValue } from 'recoil';

function OrderSummaryAmountTable() {
  const gradingOrder = useRecoilValue(gradingOrderState);
  const serviceType = useRecoilValue(serviceTypeState);

  return <AmountTable order={gradingOrder} serviceType={serviceType} />;
}

export default OrderSummaryAmountTable;
