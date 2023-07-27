import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { queryKeys } from '@/common/types/common';
import forum, {
  ForumData,
  GetForum,
  GetForumParams,
} from '@/specifics/community/modules/api/forum';

/**
 * @remarks
 * 포럼 게시글 리스트를 불러오는 쿼리입니다.
 */
export function useGetForumQuery(
  params: GetForumParams,
  options?: UseQueryOptions<GetForum, AxiosError, ForumData>
) {
  const { page, type } = params;
  return useQuery<GetForum, AxiosError, ForumData>(
    queryKeys.forum(page, type),
    () => forum.getForum(params),
    {
      keepPreviousData: true,
      staleTime: 1000 * 30,
      ...options,
      select: (response) => {
        return response.data;
      },
    }
  );
}
