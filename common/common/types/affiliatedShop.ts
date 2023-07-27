export const AFFILIATED = {
  LINK_TYPE: {
    ONLINE_SHOP: 'ONLINE_SHOP',
    NAVER_CAFE: 'NAVER_CAFE',
    FACEBOOK: 'FACEBOOK',
    NAVER_BLOG: 'NAVER_BLOG',
    NAVER_SHOP: 'NAVER_SHOP',
    AFREECA: 'AFREECA',
    ETC: 'ETC',
  } as const,
  SHOP_TYPE: {
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE',
    BOTH: 'BOTH',
  } as const,
};

export type AffiliatedLinkType =
  typeof AFFILIATED.LINK_TYPE[keyof typeof AFFILIATED.LINK_TYPE];
export type AffiliatedShopType =
  typeof AFFILIATED.SHOP_TYPE[keyof typeof AFFILIATED.SHOP_TYPE];

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
  country: string;
  shopType: AffiliatedShopType;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
