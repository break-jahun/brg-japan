import OrderCompleteNotice from '@/common/components/OrderComplete/OrderCompleteNotice';
import useConvertDataToText from '@/common/modules/hooks/useConvertDataToText';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import TERM from '@/constants/TERM';
import useOrderComplete from '@/specifics/grading/modules/hooks/useOrderComplete';
import { useTranslation } from 'react-i18next';

function GradingOrderCompleteNotice() {
  const { data } = useOrderComplete();

  const { memberName, fullNameType, term } = useOrderCompleteNoticeParser(data);

  if (!data) {
    return null;
  }

  return (
    <OrderCompleteNotice
      memberName={memberName}
      fullNameType={fullNameType}
      term={term as number}
    />
  );
}

export default GradingOrderCompleteNotice;

const useOrderCompleteNoticeParser = (
  gradingOrder: GradingOrderAttributes | undefined
) => {
  const { t } = useTranslation();
  const { getGradingOrderTypeInFullName } = useConvertDataToText();

  const memberName = `${gradingOrder?.member.mbName} ${t(
    'grading/order/complete/sir'
  )}`;
  const fullNameType = gradingOrder
    ? getGradingOrderTypeInFullName(gradingOrder)
    : '';
  const term = gradingOrder
    ? TERM.ESTIMATED_SHIPPING_TERM[gradingOrder?.gradingOrderType]
    : '';

  return {
    memberName,
    fullNameType,
    term,
  };
};
