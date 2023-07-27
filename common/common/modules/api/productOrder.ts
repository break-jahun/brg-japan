import client from '@/common/modules/client';
import { GetProductOrder } from '@/common/types/order';

interface GetProductOrderParams {
  sortBy: string;
}

/**
 * @remarks
 * 나의 productOrder 리스트를 가져오는 api입니다.
 *
 * @param sortBy - 정렬기준
 *
 * @returns productOrder 리스트
 */
async function getProductOrder(
  params: GetProductOrderParams
): Promise<GetProductOrder> {
  const { sortBy } = params;
  const { data } = await client.get(`/api/productOrder?sortBy=${sortBy}`);
  return data;
}

export default { getProductOrder };
