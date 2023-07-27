import { AxiosError } from 'axios';
import { queryKeys } from '@/common/types/common';
import { GetGradingOrder, GetGradingOrderById } from '@/common/types/order';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import gradingOrder from '@/common/modules/api/gradingOrder';
import { initAddress } from '@/common/types/user/address';

/**
 * @remarks
 * gradingOrder 리스트를 불러오는 쿼리입니다.
 */
function useGetGradingOrderQuery(
  options?: UseQueryOptions<GetGradingOrder, AxiosError>
): UseQueryResult<GetGradingOrder, AxiosError> {
  return useQuery<GetGradingOrder, AxiosError>(
    queryKeys.gradingOrder,
    () => gradingOrder.getGradingOrder({ sortBy: 'createdAt' }),
    options
  );
}

/**
 * @remarks
 * 해당 id의 gradingOrder 정보를 가져오는 쿼리입니다.
 *
 */
export function useGetGradingOrderByIdQuery(
  id: string,
  options?: UseQueryOptions<GetGradingOrderById, AxiosError>
): UseQueryResult<GetGradingOrderById, AxiosError> {
  return useQuery<GetGradingOrderById, AxiosError>(
    queryKeys.gradingOrderById(id),
    () => gradingOrder.getGradingOrderById(id),
    {
      ...options,
      select: (data) => {
        return {
          ...data,
          data: {
            ...data.data,
            address: {
              ...initAddress,
              address: data.data?.receiverAddress ?? '',
              memo: data.data?.receiverMemo ?? '',
              name: data.data?.receiverName ?? '',
              phone: data.data?.receiverPhone ?? '',
              title: data.data?.receiverTitle ?? '',
            },
          },
        };
      },
    }
  );
}

export default useGetGradingOrderQuery;
