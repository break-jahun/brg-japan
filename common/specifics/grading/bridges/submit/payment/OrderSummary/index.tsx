import { memo } from 'react';
import ShippingAddressTable from './ShippingAddressTable';
import OrdererInformationTable from './OrdererInformationTable';
import ExpressRecommendation from './ExpressRecommendation';

import OrderSummaryAmountTable from './OrderSummaryAmountTable';

interface OrderSummaryProps {
  showExpressRecommendation?: boolean;
}

const OrderSummary = ({ showExpressRecommendation }: OrderSummaryProps) => {
  return (
    <>
      <ShippingAddressTable />
      <OrdererInformationTable />
      <OrderSummaryAmountTable />
      {showExpressRecommendation && <ExpressRecommendation />}
    </>
  );
};

export default memo(OrderSummary);
