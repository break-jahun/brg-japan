import {
  GetPopReportItem,
  GetPopReportParams,
  GetPopReportResponse,
  getPopReport,
} from '@/common/modules/api/popReport';
import { Response, queryKeys } from '@/common/types/common';
import { AxiosError } from 'axios';
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';

const usePopReportQuery = (
  params: GetPopReportParams,
  options?: UseInfiniteQueryOptions<
    Response<GetPopReportResponse>,
    AxiosError,
    GetPopReportItem
  >
) => {
  return useInfiniteQuery<
    Response<GetPopReportResponse>,
    AxiosError,
    GetPopReportItem
  >(
    queryKeys.popReport(params),
    ({ pageParam = 0 }) =>
      getPopReport({ ...params, offset: pageParam * params.limit }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const { count, cards } = lastPage.data;

        const nextPage =
          count === cards.length || cards.length === count % params.limit
            ? undefined
            : allPages.length;

        return nextPage;
      },
      select: (res) => ({
        pages: res.pages.flatMap((data) => data.data.cards),
        pageParams: res.pageParams,
      }),
      ...options,
    }
  );
};

export default usePopReportQuery;
