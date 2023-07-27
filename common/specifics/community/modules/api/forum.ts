import client from '@/common/modules/client';
import { Response, ResponseType } from '@/common/types/common';
import { ForumAttributes } from '@/specifics/community/communityType';

export interface GetForumById extends ResponseType {
  data: ForumAttributes;
}

export interface ForumData {
  count: number;
  rows: ForumAttributes[];
}

export interface GetForum extends ResponseType {
  data: ForumData;
}

export type ForumFilterType = '' | '공지사항' | '이벤트';

export interface GetForumParams {
  offset: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
  page: number;
  type: ForumFilterType;
}

/**
 * @remarks
 * 포럼 게시글 리스트를 요청하는 api입니다.
 *
 */
async function getForum(params: GetForumParams): Promise<GetForum> {
  const { data } = await client.get<GetForum>(`/api/notice/list`, { params });
  return data;
}

/**
 * @remarks
 * id에 해당하는 게시글 정보를 요청하는 api입니다.
 *
 */
async function getForumById(id: string): Promise<GetForumById> {
  const { data } = await client.get<GetForumById>(`api/notice/${id}`);
  return data;
}

export default {
  getForum,
  getForumById,
};
