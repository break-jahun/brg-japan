import { queryKeys, ResponseType } from '@/common/types/common';
import reholderOrder from '@/specifics/account/modules/api/reholderOrder';
import {
  GetReholderOrder,
  GetReholderOrderById,
  GetReholderOrderDetailById,
} from '@/specifics/account/modules/type/reholderOrder';
import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

/**
 * @remarks
 * 해당 id의 reholder 정보를 가져오는 쿼리입니다.
 *
 */
export function useGetReholderOrderByIdQuery(
  id: string,
  options?: UseQueryOptions<GetReholderOrderById, AxiosError>
): UseQueryResult<GetReholderOrderById, AxiosError> {
  return useQuery<GetReholderOrderById, AxiosError>(
    queryKeys.reholderOrderById(id),
    () => reholderOrder.getReholderOrderById(id),
    options
  );
}

export function useGetReholderOrderDetailByIdQuery(
  id: string,
  options?: UseQueryOptions<GetReholderOrderDetailById, AxiosError>
): UseQueryResult<GetReholderOrderDetailById, AxiosError> {
  return useQuery<GetReholderOrderDetailById, AxiosError>(
    queryKeys.reholderOrderDetailById(id),
    () => reholderOrder.getReholderOrderDetailById(id),
    options
  );
}

/**
 * @remarks
 * reholder 리스트를 불러오는 쿼리입니다.
 */
export function useGetReholderOrderQuery(
  options?: UseQueryOptions<GetReholderOrder, AxiosError>
): UseQueryResult<GetReholderOrder, AxiosError> {
  return useQuery<GetReholderOrder, AxiosError>(
    queryKeys.reholderOrder,
    () => reholderOrder.getReholderOrder({ sortBy: 'createdAt' }),
    options
  );
}
