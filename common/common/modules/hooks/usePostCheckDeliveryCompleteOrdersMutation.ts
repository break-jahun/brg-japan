import { PostCheckDeliveryCompleteOrders } from '@/common/types/order';
import gradingOrder from '@/common/modules/api/gradingOrder';
import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

/**
 * @remarks
 * SHIPPING_OUT 상태인 주문들의 배송완료 여부를 체크하여 배송완료된 경우 SHIPPING_OUT_COMPLETE로 업데이트하는 뮤테이션입니다.
 */
function usePostCheckDeliveryCompleteOrdersMutation(): UseMutationResult<
  PostCheckDeliveryCompleteOrders,
  AxiosError
> {
  return useMutation(gradingOrder.postCheckDeliveryCompleteOrders);
}

export default usePostCheckDeliveryCompleteOrdersMutation;
