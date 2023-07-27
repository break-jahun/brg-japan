import commonEffects from '@/common/modules/recoil/commonEffects';
import { AddressAttributes } from '@/common/types/user/address';
import { atom } from 'recoil';

export const shippingAddressState = atom<AddressAttributes | null>({
  key: 'shippingAddressAtom',
  default: null,
  effects: commonEffects({
    name: 'shippingAddressAtom',
    persist: true,
  }),
});
