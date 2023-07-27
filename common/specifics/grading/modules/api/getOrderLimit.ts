import client from '@/common/modules/client';
import { Response } from '@/common/types/common';

export type GetGradingOrderLimitQuantity = {
  id: number;
  orderLimit: number;
  orderType: string;
  updatedAt: string;
  createdAt: string;
  currentOrders: number;
  deletedAt: string | null;
};

/**
 * @remarks
 * gradingOrder 주문 제한 수량을 가져오는 api입니다.
 *
 * @returns limit 정보
 */

async function getGradingOrderLimitQuantity(): Promise<
  Response<GetGradingOrderLimitQuantity>
> {
  const { data } = await client.get<Response<GetGradingOrderLimitQuantity>>(
    `/api/gradingOrderLimiter/SIMPLE`
  );
  return data;
}

export default getGradingOrderLimitQuantity;
