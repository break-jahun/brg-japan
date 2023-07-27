import client from 'brg-japan/common/modules/client';
import { ResponseType } from 'brg-japan/common/modules/sharedTypes';

export const COUNTRY_LIST = ['KR', 'TW', 'EN', 'JP'] as const;

export type CountryType = (typeof COUNTRY_LIST)[number];

type AffiliatedLinkType =
  | 'ETC'
  | 'ONLINE_SHOP'
  | 'NAVER_CAFE'
  | 'FACEBOOK'
  | 'NAVER_BLOG'
  | 'NAVER_SHOP'
  | 'AFREECA';

export interface AffiliatedShopAttributes {
  id: number;
  name: string;
  englishName: string;
  province: string;
  address?: string;
  englishAddress?: string;
  latitude?: number;
  longitude?: number;
  postcode?: string;
  phone?: string;
  linkType: AffiliatedLinkType;
  linkUrl?: string;
  logoUrl: string;
  country: CountryType;
  shopType: AffiliatedShopType;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export type GetProvinceListResponse = ResponseType<
  {
    province: string;
    country: CountryType;
  }[]
>;

export async function getProvinceList() {
  const { data } = await client.get<GetProvinceListResponse>(
    `/api/affiliated-shops/province`
  );
  return data;
}

export type AffiliatedShopType = 'ONLINE' | 'OFFLINE' | 'BOTH';

export type GetAffiliatedShopParams = {
  shopType: AffiliatedShopType;
  province?: string;
  sortOrder: string;
};

export type GetAffiliatedShopResponse = {
  data: AffiliatedShopAttributes[];
};

export async function getAffiliatedShop(params: GetAffiliatedShopParams) {
  const { shopType, province, sortOrder = 'asc' } = params;

  const { data } = await client.get<GetAffiliatedShopResponse>(
    `/api/affiliated-shops`,
    {
      params: {
        shopType,
        sortOrder,
        activeType: 'ACTIVE',
        sortBy: shopType === 'OFFLINE' ? 'name' : 'country',
        province,
      },
    }
  );
  return data;
}
