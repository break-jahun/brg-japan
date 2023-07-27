export const FORUM = {
  NOTICE: '공지사항',
  EVENT: '이벤트',
} as const;

export type ForumType = typeof FORUM[keyof typeof FORUM];

export interface ForumAttributes {
  id: number;
  mbId: number;
  type: ForumType;
  public: boolean;
  title: string;
  content: string;
  imageIds?: number[];
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
