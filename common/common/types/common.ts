import { ForumFilterType } from '@/specifics/community/modules/api/forum';
import { GetAffiliatedShopParams } from '@/specifics/partners/modules/api/partners';
import {
  GetPopReportParams,
  GetPopReportSearchParams,
} from '@/common/modules/api/popReport';
import { Country } from '@/common/types/supportRegion';

export const queryKeys = {
  user: ['user'] as const,
  memberStatus: (email: string) => ['memberStatus', email] as const,
  gradingOrder: ['gradingOrder'] as const,
  beforeInvoiceInsert: ['gradingOrder', 'beforeInvoiceInsert'] as const,
  gradingOrderById: (id: string) => ['gradingOrder', id] as const,
  reholderOrder: ['reholderOrder'] as const,
  reholderOrderById: (id: string) => ['reholderOrder', id] as const,
  reholderOrderDetailById: (id: string) => ['reholderOrderDetail', id] as const,
  productOrder: ['productOrder'] as const,
  pricePolicy: (params: Country) => ['pricePolicy', params] as const,
  limiter: ['limiter'] as const,
  address: ['address'] as const,
  deliveryCompany: ['deliveryCompany'] as const,
  itemsBySerial: (serial?: string) => ['itemsBySerial', serial] as const,
  populationBySerial: (serial?: string) =>
    ['populationCountBySerial', serial] as const,
  populationHigherBySerial: (serial?: string) =>
    ['populationHigherCountBySerial', serial] as const,
  province: ['province'] as const,
  affiliatedShop: (params: GetAffiliatedShopParams) =>
    ['affiliatedShop', params] as const,
  forum: (page: number, type: ForumFilterType) =>
    ['forum', page, type] as const,
  forumById: (id: string) => ['forum', id] as const,
  savedGradingOrder: ['gradingOrder', 'temporarySaved'] as const,
  cardBySerial: (serial: string) => ['cardBySerial', serial] as const,
  columnById: (id: string) => ['columnById', id] as const,
  gradedCards: ['gradedCards'] as const,
  popReportSearch: (params: GetPopReportSearchParams) =>
    ['popReportSearch', params.offset] as const,
  popReport: (params: GetPopReportParams) =>
    ['popReport', params.setName || params.cardId, params.offset] as const,
};

export interface ResponseType {
  code: number;
  message: string;
}

export const Locals = {
  ACCESS_TOKEN: 'acc',
  REFRESH_TOKEN: 'rft',
  USER: 'user',
} as const;

export const Locale = {
  KR: 'ko',
  EN: 'en',
  TW: 'tw',
} as const;

export type LocaleType = (typeof Locale)[keyof typeof Locale];

export interface Response<T> {
  code: number;
  message: string;
  data: T;
}

export type queryParameter = string | string[];

export type PickUnion<T, U extends T> = U;
