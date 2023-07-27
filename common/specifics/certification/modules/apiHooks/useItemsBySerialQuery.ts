import { queryKeys, ResponseType } from '@/common/types/common';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import {
  getItemsBySerial,
  GradingOrderItemBySerialDataType,
  GradingOrderItemBySerialResponseType,
} from '@/specifics/certification/modules/api/certification';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';

export interface useItemsBySerialQueryType extends GradingOrderItemAttributes {
  population: number;
  populationHigher: number;
  manualScoreText: string;
  autoScoreText: string;
}

/**
 * @remarks
 * 시리얼번호를 통해 gradingOrderItems 를 불러오는 쿼리입니다
 *
 */
export default function useItemsBySerialQuery(
  serial: string,
  options?: UseQueryOptions<
    GradingOrderItemBySerialResponseType,
    AxiosError,
    useItemsBySerialQueryType
  >
) {
  return useQuery<
    GradingOrderItemBySerialResponseType,
    AxiosError,
    useItemsBySerialQueryType
  >(queryKeys.itemsBySerial(serial), () => getItemsBySerial(serial), {
    select: (res) => {
      const getGrade = () => {
        const grade = res.data.cardInfo.manualScore;

        if (!grade || grade === 0) {
          return '';
        }

        if (grade === 11) {
          return 'AUTHENTIC';
        }

        return grade.toString();
      };

      const autoGrade = res.data.cardInfo.autoScore;
      const manualScoreText = getGrade();
      const autoScoreText =
        !autoGrade || autoGrade === 0 ? '' : autoGrade.toString();

      return {
        ...res.data.cardInfo,
        population: res.data.population,
        populationHigher: res.data.populationHigher,
        manualScoreText,
        autoScoreText,
      };
    },
    enabled: !!serial,
    ...options,
  });
}
