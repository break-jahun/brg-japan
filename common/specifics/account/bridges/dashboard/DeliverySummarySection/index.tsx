import TitledSection from '@/common/components/Account/TitledSection';
import { HStack } from '@/common/components/HStack';
import OrderCountSummary from '@/specifics/account/bridges/dashboard/DeliverySummarySection/OrderCountSummary';
import useDeliverySummarySectionParser from '@/specifics/account/modules/hooks/useDeliverySummarySectionParser';

function DeliverySummarySection() {
  const { sectionTitle, ordersSummary } = useDeliverySummarySectionParser();
  return (
    <TitledSection title={sectionTitle}>
      <HStack
        sx={{ justifyContent: 'space-between' }}
        maxWidth="600px"
        px={1}
        py={2}
        m="auto"
      >
        {ordersSummary.map((orderSummary: any) => {
          return (
            <OrderCountSummary
              key={orderSummary.title}
              title={orderSummary.title}
              count={orderSummary.count}
              handleClick={orderSummary.onClick}
              isDisabled={orderSummary.isDisabled}
            />
          );
        })}
      </HStack>
    </TitledSection>
  );
}
export default DeliverySummarySection;
