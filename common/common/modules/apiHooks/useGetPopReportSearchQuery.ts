import {
  GetPopReportSearchCard,
  GetPopReportSearchParams,
  GetPopReportSearchResponse,
  getPopReportSearch,
} from '@/common/modules/api/popReport';
import { Response, queryKeys } from '@/common/types/common';
import { AxiosError } from 'axios';
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';

const useGetPopReportSearchQuery = (
  params: GetPopReportSearchParams,
  options?: UseInfiniteQueryOptions<
    Response<GetPopReportSearchResponse>,
    AxiosError,
    GetPopReportSearchCard
  >
) => {
  return useInfiniteQuery<
    Response<GetPopReportSearchResponse>,
    AxiosError,
    GetPopReportSearchCard
  >(
    queryKeys.popReportSearch(params),
    ({ pageParam = 0 }) =>
      getPopReportSearch({ ...params, offset: pageParam * params.limit }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const { count, cards } = lastPage.data;

        const nextPage =
          count === cards.length || cards.length === count % params.limit
            ? undefined
            : allPages.length;

        return nextPage;
      },
      enabled: false,
      select: (res) => ({
        pages: res.pages.flatMap((data) => data.data.cards),
        pageParams: res.pageParams,
      }),
      ...options,
    }
  );
};

export default useGetPopReportSearchQuery;
