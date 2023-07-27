import {
  QueryKey,
  QueryObserverOptions,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import sharedQueryKeys from 'brg-japan/common/modules/sharedQueryKeys';
import {
  AffiliatedShopAttributes,
  GetAffiliatedShopParams,
  GetAffiliatedShopResponse,
  getAffiliatedShop,
} from 'brg-japan/containers/PartnerShop/api';

function useGetAffiliatedShop(
  params: GetAffiliatedShopParams,
  options?: UseQueryOptions<
    GetAffiliatedShopResponse,
    AxiosError,
    AffiliatedShopAttributes[]
  >
) {
  return useQuery<
    GetAffiliatedShopResponse,
    AxiosError,
    AffiliatedShopAttributes[]
  >(sharedQueryKeys.affiliatedShop(params), () => getAffiliatedShop(params), {
    ...options,
    select: (result) => result?.data,
  });
}

export default useGetAffiliatedShop;
