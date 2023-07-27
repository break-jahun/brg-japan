export type FaqItemType = {
  id: number;
  category: string;
  question: string;
  answer: string[];
};

export type FaqListType = {
  [key in FaqLocaleType]: FaqItemType[];
};

/**
 * @remarks FAQ의 경우는 현재 한국어, 영문 서비스만 지원합니다.
 */
export const FaqLocale = {
  KR: 'ko',
  EN: 'en',
  TW: 'tw',
} as const;

export type FaqLocaleType = typeof FaqLocale[keyof typeof FaqLocale];
