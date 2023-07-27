import clientNew from '@/common/modules/clientNew';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { ResponseType } from '@/common/types/common';
import { useItemsBySerialQueryType } from '@/specifics/certification/modules/apiHooks/useItemsBySerialQuery';
import testClient from '@/common/modules/testClient';

export interface GradingOrderItemBySerialDataType {
  cardInfo: GradingOrderItemAttributes;
  population: number;
  populationHigher: number;
}

export interface GradingOrderItemBySerialResponseType extends ResponseType {
  data: GradingOrderItemBySerialDataType;
}

/**
 * @remarks
 * 시리얼번호로 gradingOrderItem을 조회합니다.
 *
 * @returns gradingOrderItems
 */
export async function getItemsBySerial(serial: string) {
  const { data } = await testClient.get<GradingOrderItemBySerialResponseType>(
    `/api/gradings/certification/${serial}`
  );
  return data;
}
