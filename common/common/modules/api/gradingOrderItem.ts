import client from '@/common/modules/client';
import { ResponseType } from '@/common/types/common';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';

export interface GetGradedCards extends ResponseType {
  data: GradingOrderItemAttributes[];
}

async function getGradedCards() {
  const { data } = await client.get<GetGradedCards>(
    `/api/gradingorderitem/gradedCards`
  );
  return data;
}

export default {
  getGradedCards,
};
