import testClient from '@/common/modules/testClient';

export type GetPopReportSearchField = 'playerName' | 'setName';

export interface GetPopReportSearchParams {
  field: GetPopReportSearchField;
  keyword: string;
  token: string;
  limit: number;
  offset?: number;
}

export interface GetPopReportSearchCard {
  id: number;
  setName: string;
  year: string;
  playerName: string;
  cardNumber: string;
  description: string;
}

export interface GetPopReportSearchResponse {
  count: number;
  cards: GetPopReportSearchCard[];
}

export const getPopReportSearch = async (params: GetPopReportSearchParams) => {
  const { data } = await testClient.get('/api/cards/pop-report/search', {
    params,
  });

  return data;
};

export interface GetPopReportParams {
  setName?: string;
  cardId?: string;
  limit: number;
  offset?: number;
}

export type PopItem = {
  manualScore: string;
  count: number;
};

export interface GetPopReportItem {
  setName: string;
  year: number;
  playerName: string;
  description: string;
  cardNumber: string;
  total: number;
  pop: PopItem[];
  id: number;
}

export interface GetPopReportResponse {
  count: number;
  cards: GetPopReportItem[];
}

export const getPopReport = async (params: GetPopReportParams) => {
  const { data } = await testClient.get('/api/cards/pop-report', { params });

  return data;
};
