import { AffiliatedShopAttributes } from '@/common/types/affiliatedShop';
import { queryKeys } from '@/common/types/common';
import partners, {
  dataType,
  GetAffiliatedShop,
  GetAffiliatedShopParams,
  GetProvinceList,
} from '@/specifics/partners/modules/api/partners';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useGetProvinceListQuery = (
  options?: UseQueryOptions<GetProvinceList, AxiosError>
) => {
  return useQuery<GetProvinceList, AxiosError>(
    queryKeys.province,
    () => partners.getProvinceList(),
    options
  );
};

export const useGetAffiliatedShopQuery = (
  params: GetAffiliatedShopParams,
  options?: UseQueryOptions<
    GetAffiliatedShop,
    AxiosError,
    AffiliatedShopAttributes[]
  >
) => {
  return useQuery<GetAffiliatedShop, AxiosError, AffiliatedShopAttributes[]>(
    queryKeys.affiliatedShop(params),
    () => partners.getAffiliatedShop(params),
    {
      select: (res) => {
        return res.data;
      },
      ...options,
    }
  );
};
