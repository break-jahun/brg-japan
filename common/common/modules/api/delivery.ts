import client from '@/common/modules/client';

export interface DeliveryCompanyInfo {
  Code: string;
  Name: string;
}

/**
 * @remarks
 * 택배사 코드 리스트를 가져오는 api 입니다.
 *
 * @returns 택배사 코드 리스트
 */
async function getDeliveryCompanyList(): Promise<DeliveryCompanyInfo[]> {
  const { data } = await client.get(
    `${process.env.NEXT_PUBLIC_DELIVERY_BASE_URL}/api/v1/companylist?t_key=${process.env.NEXT_PUBLIC_DELIVERY_API_KEY}`
  );
  return data;
}

export default {
  getDeliveryCompanyList,
};
