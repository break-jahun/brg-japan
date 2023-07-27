import client from '@/common/modules/client';
import { Response, ResponseType } from '@/common/types/common';
import {
  GradingOrderAttributes,
  GradingOrderShippingMethod,
  GradingOrderType,
  GradingSubmitType,
} from '@/common/types/grading/gradingOrder';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import {
  GetGradingOrder,
  GetGradingOrderById,
  GetTemporaryStorage,
  PostCheckDeliveryCompleteOrders,
  SaveTemporaryStorage,
} from '@/common/types/order';

interface GetGradingOrderParams {
  sortBy?: 'createdAt';
}

/**
 * @remarks
 * 나의 gradingOrder 리스트를 가져오는 함수입니다.
 *
 * @param sortBy - 정렬기준
 *
 * @returns gradingOrder 정보
 */

async function getGradingOrder(
  params: GetGradingOrderParams
): Promise<GetGradingOrder> {
  // * ⬇️ /pages/api/gradingOrderById에 전달받은 response를 넣고 테스트하는 용도
  // const { data } = await axios.get('/api/gradingOrderById');
  const { data } = await client.get(`/brg/api/gradings/me`, {
    params,
  });
  return data;
}

async function getGradingOrderById(id: string): Promise<GetGradingOrderById> {
  const { data } = await client.get(`/brg/api/gradings/${id}/me`);
  return data;
}

async function getSavedGradingOrder(): Promise<GetTemporaryStorage> {
  const { data } = await client.get(
    `/api/gradingorder/savedOrders?sortBy=updatedAt`
  );
  return data;
}

async function saveGradingOrder(
  gradingOrder: GradingOrderAttributes
): Promise<SaveTemporaryStorage> {
  const { data } = await client.post(
    `/api/gradingorder/saveGradingOrder`,
    gradingOrder
  );
  return data;
}

function deleteTemporaryStorage(id: number) {
  return client.delete(`/api/gradingorder/savedGradingOrder/${id}`);
}

/**
 * @remarks
 * SHIPPING_OUT 상태인 주문들의 배송완료 여부를 체크하여 배송완료된 경우 SHIPPING_OUT_COMPLETE로 업데이트
 * 가상계좌 결제 주문의 입금 기한 만료 여부를 체크하여 입금 기한이 만료된 경우 gradingOrderStatus를 DEADLI
 *
 */
async function postCheckDeliveryCompleteOrders(): Promise<PostCheckDeliveryCompleteOrders> {
  const { data } = await client.post(
    '/api/gradingorder/checkDeliveryStatusWithVirtualAccountDueDate'
  );
  return data;
}

export interface PostGradingOrderCalculateBody {
  gradingOrderType: GradingOrderType;
  shippingMethod: GradingOrderShippingMethod;
  submitType: GradingSubmitType;
  items: Pick<GradingOrderItemAttributes, 'cardCategory' | 'isAuto'>[];
  addressId?: number;
}

const postGradingOrderCalculate = async (
  body: PostGradingOrderCalculateBody
) => {
  const { data } = await client.post('/brg/api/gradings/order/calculate', body);
  return data;
};

export default {
  getGradingOrder,
  getGradingOrderById,
  getSavedGradingOrder,
  saveGradingOrder,
  deleteTemporaryStorage,
  postCheckDeliveryCompleteOrders,
  postGradingOrderCalculate,
};
