import client from '@/common/modules/client';
import clientNew from '@/common/modules/clientNew';
import { Response } from '@/common/types/common';
import { AddressAttributes } from '@/common/types/user/address';

export const getAddress = async () => {
  const { data } = await client.get('/api/address');
  return data;
};

export const postAddress = (address: AddressAttributes) => {
  return client.post('/api/address', address);
};

export const deleteAddress = (id: number) => {
  return client.delete(`/api/address/${id}`);
};

export const updateAddress = (address: AddressAttributes) => {
  return client.put(`/api/address/${address.id}`, address);
};

export const updateDefaultAddress = (id: number) => {
  return client.put(`/api/address/change_default/${id}`);
};

export interface UpdateDefaultAddress {
  id: number;
  addressId: number;
}

export const updateGradingOrderAddress = (ids: UpdateDefaultAddress) => {
  return client.put(`/api/gradingorder/changeAddress`, ids);
};

export const updateReholderOrderAddress = (ids: UpdateDefaultAddress) => {
  return clientNew.patch(`/api/reholder/shipping/address`, {
    orderId: ids.id,
    addressId: ids.addressId,
  });
};
