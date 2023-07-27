import { queryKeys } from '@/common/types/common';
import { useQuery } from '@tanstack/react-query';
import gradingOrderItem, {
  GetGradedCards,
} from '@/common/modules/api/gradingOrderItem';

const useGetGradedCardListQuery = () => {
  return useQuery<GetGradedCards>(
    queryKeys.gradedCards,
    gradingOrderItem.getGradedCards
  );
};

export default useGetGradedCardListQuery;
