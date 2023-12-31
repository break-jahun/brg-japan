import { GetAffiliatedShopParams } from 'brg-japan/containers/PartnerShop/api';

const sharedQueryKeys = {
  provinceList: ['provinceList'] as const,
  affiliatedShop: (params: GetAffiliatedShopParams) =>
    ['affiliatedShop', params] as const,
  gradingOrderById: (id: number) => ['gradingOrderById', id] as const,
} as const;

export default sharedQueryKeys;
