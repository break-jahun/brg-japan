import gradingOrder from '@/common/modules/api/gradingOrder';
import { queryKeys } from '@/common/types/common';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { GetGradingOrderById } from '@/common/types/order';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export function useGetGradingOrderByIdQuery(
  id: string,
  options?: UseQueryOptions<
    GetGradingOrderById,
    AxiosError,
    GradingOrderAttributes
  >
) {
  return useQuery<GetGradingOrderById, AxiosError, GradingOrderAttributes>(
    queryKeys.gradingOrderById(id),
    () => gradingOrder.getGradingOrderById(id),
    {
      select: (res) => res.data,
      enabled: !!id,
      ...options,
      refetchOnWindowFocus: false,
    }
  );
}
