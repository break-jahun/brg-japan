import { AxiosError } from 'axios';
import { queryKeys, Response } from '@/common/types/common';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import getOrderLimit, {
  GetGradingOrderLimitQuantity,
} from '../api/getOrderLimit';

/**
 * @remarks
 * gradingOrder 주문 제한 수량을 가져오는 api입니다.
 *
 */
function useGradingOrderLimiterQuery(
  options?: UseQueryOptions<
    Response<GetGradingOrderLimitQuantity>,
    AxiosError,
    GetGradingOrderLimitQuantity | undefined
  >
) {
  return useQuery<
    Response<GetGradingOrderLimitQuantity>,
    AxiosError,
    GetGradingOrderLimitQuantity | undefined
  >(queryKeys.limiter, getOrderLimit, {
    select: (response) => {
      return response.data;
    },
    ...options,
  });
}

export default useGradingOrderLimiterQuery;
