import client from '@/common/modules/client';
import clientNew from '@/common/modules/clientNew';
import {
  AffiliatedShopAttributes,
  AffiliatedShopType,
} from '@/common/types/affiliatedShop';

export interface dataType {
  province: string;
  count: string;
}

export interface GetProvinceListParams {
  shopType: AffiliatedShopType;
  sortOrder: string;
}

export interface GetProvinceList {
  data: Pick<AffiliatedShopAttributes, 'province'>[];
}

export interface GetAffiliatedShopParams {
  shopType: AffiliatedShopType;
  province?: string;
  sortOrder: string;
}

export interface GetAffiliatedShop {
  data: AffiliatedShopAttributes[];
}

export interface PostContactMailParams {
  email: string;
  phoneNumber?: string;
  company?: string;
  description: string;
}

const getProvinceList = async () => {
  const { data } = await clientNew.get<GetProvinceList>(
    `/api/affiliated-shops/province`
  );
  return data;
};

const getAffiliatedShop = async (params: GetAffiliatedShopParams) => {
  const { shopType, province, sortOrder = 'asc' } = params;

  const { data } = await clientNew.get<GetAffiliatedShop>(
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
};

const postContactMail = async (params: PostContactMailParams) => {
  const { email, phoneNumber, company, description } = params;
  const { data } = await client.post(`/api/affiliatedShop/sendEmail`, {
    email,
    phone: phoneNumber,
    shopName: company,
    content: description,
  });
  return data;
};

export default { postContactMail, getProvinceList, getAffiliatedShop };
