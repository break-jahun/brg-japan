import client from '@/common/modules/client';

/**
 * @remarks 광고성 정보 수신 동의 API
 * @param isAgreeAdvertisement: boolean
 */
export async function patchAdvertisementAgreement(
  isAgreeAdvertisement: boolean
) {
  const { data } = await client.patch('/break/api/member/agree/advertisement', {
    isAgreeAdvertisement,
  });
  return data;
}
