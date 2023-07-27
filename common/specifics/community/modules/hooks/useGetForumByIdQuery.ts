import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { queryKeys } from '@/common/types/common';
import forum, { GetForumById } from '@/specifics/community/modules/api/forum';
import { ForumAttributes } from '@/specifics/community/communityType';
/**
 * @remarks
 * id에 해당하는 게시글 정보를 불러오는 쿼리입니다.
 */
export const useGetForumByIdQuery = (
  id: string,
  options?: UseQueryOptions<GetForumById, AxiosError, ForumAttributes>
) => {
  return useQuery<GetForumById, AxiosError, ForumAttributes>(
    queryKeys.forumById(id),
    () => forum.getForumById(id),
    {
      ...options,
      select: (response) => {
        return response.data;
      },
    }
  );
};
