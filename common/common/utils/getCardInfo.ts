import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';

export const getCardInfo = (item: GradingOrderItemAttributes): string => {
  return `${item.year ?? ''} ${item.brand ?? ''} ${item.parallel ?? ''}`;
};
