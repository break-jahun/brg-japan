import commonEffects from '@/common/modules/recoil/commonEffects';
import { Membership } from '@/common/types/user/memberShip';
import { atom } from 'recoil';

export const memberShipState = atom<Membership>({
  key: 'memberShipState',
  default: undefined,
  effects: commonEffects({
    name: 'memberShipState',
    persist: true,
  }),
});
