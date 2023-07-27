import client from '@/common/modules/client';
import clientNew from '@/common/modules/clientNew';
import {
  GetReholderOrder,
  GetReholderOrderById,
  GetReholderOrderDetailById,
} from '@/specifics/account/modules/type/reholderOrder';

interface GetReholderOrderParams {
  sortBy?: 'createdAt';
}
/**
 * @remarks
 * 특정 id를 가진 reholderOrder 가져오는 api 입니다.
 *
 * @param id - reholderOrder id
 *
 *
 * @returns reholderOrder
 */
async function getReholderOrderById(id: string): Promise<GetReholderOrderById> {
  const { data } = await clientNew.get(`/api/reholder/payment/result/${id}`);
  return data.data;
}

async function getReholderOrderDetailById(
  id: string
): Promise<GetReholderOrderDetailById> {
  const { data } = await clientNew.get(`/api/reholder/${id}`);
  return data.data;
}
/**
 * @remarks
 * 나의 reholderOrder 리스트를 가져오는 함수입니다.
 *
 * @param sortBy - 정렬기준
 *
 * @returns reholderOrder 정보
 */

async function getReholderOrder(
  params: GetReholderOrderParams
): Promise<GetReholderOrder> {
  const { sortBy = 'createdAt' } = params;
  const { data } = await clientNew.get(`/api/reholder?sortBy=${sortBy}`);
  return data;
}

export default {
  getReholderOrderById,
  getReholderOrder,
  getReholderOrderDetailById,
};
