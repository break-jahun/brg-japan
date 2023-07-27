import SummaryTableLayout from '@/common/components/SummaryTableLayout';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import { ReholderDetailResultType } from '@/specifics/account/modules/type/reholderOrder';
import ReholderAmountTableBody from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderAmountTable/ReholderAmounTableBody';
import ReholderAmountTableHeader from '@/specifics/reholder/bridges/reholderOrderComplete/ReholderAmountTable/ReholderAmountTableHeader';

interface Props {
  order: ReholderDetailResultType;
  serviceType: ServiceType;
}

const ReholderAmountTable = ({ order, serviceType }: Props) => {
  return (
    <SummaryTableLayout>
      <ReholderAmountTableHeader />
      <ReholderAmountTableBody order={order} serviceType={serviceType} />
    </SummaryTableLayout>
  );
};

export default ReholderAmountTable;
