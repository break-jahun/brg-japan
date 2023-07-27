import commonEffects from '@/common/modules/recoil/commonEffects';
import {
  gradingOrderAtom,
  gradingOrderItemsState,
  gradingOrderState,
  orderTypeState,
} from '@/common/modules/recoil/gradingOrder';
import { imagesState } from '@/common/modules/recoil/image';
import { reholderCardListState } from '@/common/modules/recoil/reholder';
import {
  GradingOrderType,
  GradingSubmitType,
  initGradingOrder,
} from '@/common/types/grading/gradingOrder';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { atom, DefaultValue, selector } from 'recoil';

export const gradingSubmitTypeAtom = atom<GradingSubmitType>({
  key: 'gradingSubmitTypeAtom',
  default: 'GENERAL',
  effects: commonEffects({ name: 'gradingSubmitTypeAtom', persist: true }),
});

export const gradingSubmitTypeState = selector<GradingSubmitType>({
  key: 'gradingSubmitTypeState',
  get: ({ get }) => {
    return get(gradingSubmitTypeAtom);
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(gradingSubmitTypeAtom, newValue);
    reset(gradingOrderAtom);
    reset(imagesState);
    reset(reholderCardListState);
  },
});

export const gradingOrderTypeAtom = atom<GradingOrderType>({
  key: 'gradingOrderTypeAtom',
  default: 'REG',
});

export const gradingOrderTypeState = selector<GradingOrderType>({
  key: 'gradingOrderTypeState',
  get: ({ get }) => {
    if (get(gradingSubmitTypeState) === 'SIMPLE') {
      return 'EXP';
    }
    return get(orderTypeState);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(orderTypeState, newValue);
  },
});

// 수정중인 아이템의 id
export const currentItemIdState = atom<number>({
  key: 'currentItemIdState',
  default: -1,
  effects: commonEffects({ name: 'currentItemIdState' }),
});

// 현재 수정중인 아이템
export const currentItemState = selector<
  GradingOrderItemAttributes | undefined
>({
  key: 'currentItemState',
  get: ({ get }) => {
    const gradingOrderItems = get(gradingOrderItemsState);
    const currentId = get(currentItemIdState);
    return gradingOrderItems.find((item) => item.id === currentId);
  },
});
