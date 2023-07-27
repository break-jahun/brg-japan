import { useQuery } from '@tanstack/react-query';
import sharedQueryKeys from 'brg-japan/common/modules/sharedQueryKeys';
import { getProvinceList } from 'brg-japan/containers/PartnerShop/api';

function useGetProvinceList() {
  return useQuery(sharedQueryKeys.provinceList, getProvinceList, {
    select: (result) => {
      const sortedForJpResult: typeof result = {
        ...result,
        data: result.data.sort((a, b) => {
          if (a.country === 'JP') {
            return -1;
          }
          return 1;
        }),
      }; // 일본도시 우선정렬
      return sortedForJpResult.data;
    },
  });
}

export default useGetProvinceList;
