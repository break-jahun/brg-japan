import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { queryKeys } from '@/common/types/common';
import delivery, { DeliveryCompanyInfo } from '../api/delivery';

export interface GetDeliveryCompanyList {
  Company: DeliveryCompanyInfo[];
}

/**
 * @remarks
 * 택배사 코드 리스트를 가져오는 쿼리입니다.
 *
 */
export function useDeliveryCompanyListQuery(): UseQueryResult<
  GetDeliveryCompanyList,
  AxiosError
> {
  return useQuery(queryKeys.deliveryCompany, delivery.getDeliveryCompanyList);
}
