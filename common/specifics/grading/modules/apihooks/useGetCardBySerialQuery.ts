import { queryKeys } from '@/common/types/common';
import reholder, {
  CardInfoBySerial,
  GetCardInfoBySerialResponse,
} from '@/specifics/grading/modules/api/reholder';
import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

interface UseGetCardBySerialQuery extends Required<CardInfoBySerial> {
  cardInfo: string;
}

const defaultData: UseGetCardBySerialQuery = {
  id: -1,
  brand: '',
  year: '',
  setName: '',
  description: '',
  cardNumber: '',
  playerName: '',
  cardInfo: '',
  cardCategory: 'ETC',
  amount: 9800,
  price: 9800,
  correspondCheck: 'OK',
};

/**
 * @remarks
 * 시리얼번호에 해당하는 카드정보를 불러오는 쿼리입니다.
 *
 */
function useGetCardBySerialQuery(
  serial: string,
  options?: UseQueryOptions<
    GetCardInfoBySerialResponse,
    AxiosError,
    UseGetCardBySerialQuery
  >
): UseQueryResult<UseGetCardBySerialQuery, AxiosError> {
  return useQuery<
    GetCardInfoBySerialResponse,
    AxiosError,
    UseGetCardBySerialQuery
  >(
    queryKeys.cardBySerial(serial),
    () => reholder.getCardInfoBySerial(serial),
    {
      refetchOnMount: true,
      select: (data) => {
        return {
          ...defaultData,
          ...data.data,
          cardInfo: `${data.data.brand} / ${data.data.year} / ${data.data.setName} / ${data.data.description} / ${data.data.cardNumber} / ${data.data.playerName}`,
        };
      },
      ...options,
    }
  );
}

export default useGetCardBySerialQuery;
