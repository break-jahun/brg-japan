import { AxiosError } from 'axios';
import { queryKeys } from '@/common/types/common';
import { GetProductOrder } from '@/common/types/order';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import productOrder from '@/common/modules/api/productOrder';

/**
 * @remarks
 * productOrder 리스트를 불러오는 쿼리입니다.
 */
export function useGetProductOrderQuery(
  options?: UseQueryOptions<GetProductOrder, AxiosError>
): UseQueryResult<GetProductOrder, AxiosError> {
  return useQuery<GetProductOrder, AxiosError>(
    queryKeys.productOrder,
    () => productOrder.getProductOrder({ sortBy: 'createdAt' }),
    options
  );
}
