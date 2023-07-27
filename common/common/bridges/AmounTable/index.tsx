import AmountTableBody from '@/common/bridges/AmounTable/AmounTableBody';
import SummaryTableLayout from '@/common/components/SummaryTableLayout';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import AmountTableHeader from './AmountTableHeader';

interface Props {
  order: GradingOrderAttributes;
  serviceType: ServiceType;
}

const AmountTable = ({ order, serviceType }: Props) => {
  return (
    <SummaryTableLayout>
      <AmountTableHeader />
      <AmountTableBody order={order} serviceType={serviceType} />
    </SummaryTableLayout>
  );
};

export default AmountTable;
