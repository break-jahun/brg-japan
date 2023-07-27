import { OrderTypeType } from '@/specifics/account/modules/type/orderType';
import { atom } from 'recoil';

export const currentOrderTypeState = atom<OrderTypeType>({
  key: 'currentOrderType',
  default: 'GRADING',
});

export const currentOrderStatusState = atom({
  key: 'currentOrderStatus',
  default: 'ALL',
});
