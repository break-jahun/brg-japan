import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Country } from '@/common/types/supportRegion';
import { queryKeys } from '@/common/types/common';
import { useSetRecoilState } from 'recoil';
import pricePolicy, { GetPricePolicy } from '../api/pricePolicy';
import { costPolicyState } from '../recoil/costPolicy';
import { memberShipState } from '../recoil/memberShip';

/**
 * @remarks
 * 가격정책 관련 정보를 불러오는 쿼리입니다.
 */
function useGetPricePolicyQuery(
  country: Country,
  options?: UseQueryOptions<GetPricePolicy, AxiosError>
): UseQueryResult<GetPricePolicy, AxiosError> {
  const { t } = useTranslation();
  const setCostPolicy = useSetRecoilState(costPolicyState);
  const setMemberShip = useSetRecoilState(memberShipState);

  return useQuery<GetPricePolicy, AxiosError>(
    queryKeys.pricePolicy(country),
    () => pricePolicy.getPricePolicy(country),
    {
      ...options,
      onSuccess: (response) => {
        const costPolicy = response.data?.costPolicy;
        const membership = response.data?.membership;
        if (costPolicy && membership) {
          setCostPolicy(costPolicy);
          setMemberShip(membership);
        }
      },
      onError: (error) => {
        alert(t('pricePolicy/fail'));
      },
    }
  );
}

export default useGetPricePolicyQuery;
