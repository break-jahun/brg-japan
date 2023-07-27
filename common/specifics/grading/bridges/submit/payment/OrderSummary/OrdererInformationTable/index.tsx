import SummaryTableLayout from '@/common/components/SummaryTableLayout';
import OrdererInformationTableHeader from './OrdererInforamtionTableHeader';
import OrdererInformationTableBody from './OrdererInforamtionTableBody';

const OrdererInformationTable = () => {
  return (
    <SummaryTableLayout>
      <OrdererInformationTableHeader />
      <OrdererInformationTableBody />
    </SummaryTableLayout>
  );
};

export default OrdererInformationTable;
