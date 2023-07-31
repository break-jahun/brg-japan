import { useQuery } from '@tanstack/react-query';
import sharedQueryKeys from 'brg-japan/common/modules/sharedQueryKeys';
import { getGradingOrderById } from 'brg-japan/containers/home/HomeSearchSection/api';

type Option = {
  enabled: boolean;
};

function useGetGradingOrderById(id: number, option?: Option) {
  return useQuery(
    sharedQueryKeys.gradingOrderById(id),
    () => getGradingOrderById(id),
    {
      select: (result) => result.data?.rows?.[0],
      enabled: option?.enabled ?? false,
    }
  );
}

export default useGetGradingOrderById;
