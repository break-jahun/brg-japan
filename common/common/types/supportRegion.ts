export const COUNTRY_LIST = ['KR', 'TW', 'EN'] as const;

export type Country = typeof COUNTRY_LIST[number];

export interface SupportRegionAttributes {
  id?: number;
  region: Country;
}
