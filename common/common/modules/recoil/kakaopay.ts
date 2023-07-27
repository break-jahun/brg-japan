import commonEffects from '@/common/modules/recoil/commonEffects';
import { atom } from 'recoil';

export interface KakaoPayInfo {
  tid: string;
  partner_order_id: string;
  partner_user_id: string;
}

export const kakopayInfoState = atom<KakaoPayInfo | null>({
  key: 'kakopayInfo',
  default: null,
  effects: commonEffects({
    name: 'kakopayInfo',
    persist: true,
  }),
});
