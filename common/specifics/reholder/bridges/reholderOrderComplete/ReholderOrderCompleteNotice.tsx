import OrderCompleteNotice from '@/common/components/OrderComplete/OrderCompleteNotice';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';
import TERM from '@/constants/TERM';
import { ReholderDetailResultType } from '@/specifics/account/modules/type/reholderOrder';
import useReholderOrderComplete from '@/specifics/reholder/modules/hooks/useReholderOrderComplete';
import useReholderOrderDetail from '@/specifics/reholder/modules/hooks/useReholderOrderDetail';
import { useTranslation } from 'react-i18next';

function ReholderOrderCompleteNotice() {
  const { data } = useReholderOrderDetail();

  const { memberName, fullNameType, term } = useOrderCompleteNoticeParser(data);

  if (!data) {
    return null;
  }

  return (
    <OrderCompleteNotice
      memberName={memberName}
      fullNameType={fullNameType}
      term={term}
    />
  );
}

export default ReholderOrderCompleteNotice;

const useOrderCompleteNoticeParser = (
  order: ReholderDetailResultType | undefined
) => {
  const { t } = useTranslation();

  const memberName = order?.member?.mbName
    ? `${order?.member?.mbName} ${t('grading/order/complete/sir')}`
    : '';
  const fullNameType = 'REHOLDER';
  const term = TERM.ESTIMATED_SHIPPING_TERM.REHOLDER;

  return {
    memberName,
    fullNameType,
    term,
  };
};
