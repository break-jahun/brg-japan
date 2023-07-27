import dayjs from 'dayjs';
import {
  ForumAttributes,
  ForumType,
} from '@/specifics/community/communityType';

export interface ForumListData {
  id: number;
  type: ForumType;
  title: string;
  updatedAt: string;
}

/**
 * @remarks 게시물 리스트에서 보여줄 데이터를 가공하는 함수입니다.
 * @param forumList - useGetForumQuery를 통해 가져온 forumList 데이터
 */
export const getForumList = (
  forumList: ForumAttributes[]
): ForumListData[] | undefined => {
  if (!forumList) return undefined;

  return forumList.map((forum) => {
    return {
      id: forum.id,
      type: forum.type,
      title: forum.title,
      updatedAt: dayjs(forum.updatedAt).format('YYYY.MM.DD'),
    };
  });
};

// ------------------------------

export interface ForumDetailData {
  id: number;
  type: ForumType;
  title: string;
  content: string;
  updatedAt: string;
}

/**
 * @remarks 게시물 상세에사 보여줄 데이터를 가공하는 함수입니다.
 * @param forum -  useGetForumByIdQuery를 통해 가져온 forum 데이터
 */
export const getForumDetail = (
  forum: ForumAttributes
): ForumDetailData | undefined => {
  if (!forum) return undefined;

  return {
    id: forum.id,
    type: forum.type,
    title: forum.title,
    content: forum.content,
    updatedAt: dayjs(forum.updatedAt).format('YYYY.MM.DD'),
  };
};
