import client from '@/common/modules/client';
import { Response, ResponseType } from '@/common/types/common';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';

export type CardInfoBySerial = Pick<
  GradingOrderItemAttributes,
  | 'id'
  | 'brand'
  | 'year'
  | 'setName'
  | 'description'
  | 'cardNumber'
  | 'playerName'
  | 'cardCategory'
  | 'amount'
  | 'price'
  | 'correspondCheck'
>;

export interface GetCardInfoBySerialResponse extends ResponseType {
  data: CardInfoBySerial;
}

/**
 * @remarks
 * serial 번호를 통해 카드정보를 불러오는 함수입니다.
 *
 */
async function getCardInfoBySerial(
  serial: string
): Promise<GetCardInfoBySerialResponse> {
  const { data } = await client.get<GetCardInfoBySerialResponse>(
    `/api/gradingorder/serial/${serial}`
  );
  return data;
}

export default {
  getCardInfoBySerial,
};
