import {
  GradingOrderProcessingStatus,
  GradingOrderStatus,
} from '@/common/types/grading/gradingOrder';
import axios from 'axios';
import client from 'brg-japan/common/modules/client';
import {
  ResponseDataRowsType,
  ResponseType,
} from 'brg-japan/common/modules/sharedTypes';

export type GetGradingOrderByIdResponse = ResponseType<{
  gradingOrderProcessingStatus: GradingOrderProcessingStatus;
  id: number;
  estimatedGradingCompleteDate: string;
}>;

export async function getGradingOrderById(id: number) {
  const { data } = await client.get<GetGradingOrderByIdResponse>(
    `/api/admin/gradings/v2?sortBy=id&sortOrder=DESC&offset=0&limit=10&searchWord=${id}&searchField=id`
  );

  return data;
}