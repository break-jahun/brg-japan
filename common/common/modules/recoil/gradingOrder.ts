import _ from 'lodash';
import {
  currentItemIdState,
  gradingSubmitTypeState,
} from '@/specifics/grading/modules/recoil/apply';
import {
  CurrencyType,
  GradingOrderAttributes,
  GradingOrderType,
  initGradingOrder,
} from '@/common/types/grading/gradingOrder';
import PriceCalculator from '@/common/modules/utils/priceCalculator';
import {
  GradingOrderItemAttributes,
  initGradingOrderItem,
} from '@/common/types/grading/gradingOrderItem';
import { atom, DefaultValue, selector, selectorFamily } from 'recoil';
import { PaymentMethod } from '@/common/types/payment';
import { Bank } from '@tosspayments/payment__types/types/models/Bank';
import {
  reholderTotalAmountState,
  reholderTotalPriceState,
  reholderTotalQtState,
} from '@/common/modules/recoil/reholder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import commonEffects from './commonEffects';
import { costPolicyState } from './costPolicy';
import { memberShipState } from './memberShip';

export const gradingOrderAtom = atom<GradingOrderAttributes>({
  key: 'gradingOrderAtom',
  default: initGradingOrder,
  effects: commonEffects({
    name: 'gradingOrderAtom',
    persist: true,
  }),
});

export const gradingOrderState = selector<GradingOrderAttributes>({
  key: 'gradingOrderState',
  get: ({ get }) => {
    return get(gradingOrderAtom);
  },
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    const costPolicy = get(costPolicyState);
    const membership = get(memberShipState);
    if (costPolicy && membership) {
      const newGradingOrder = new PriceCalculator({
        gradingOrder: { ...newValue },
        costPolicy: get(costPolicyState),
        memberShip: get(memberShipState),
      }).calculate();
      // 가격 재계산후 데이터를 넣어줍니다.
      set(gradingOrderAtom, newGradingOrder);
      return;
    }
    set(gradingOrderAtom, newValue);
  },
});

export const newGradingOrderState = selector<GradingOrderAttributes>({
  key: 'newGradingOrderState',
  get: ({ get }) => {
    return get(gradingOrderAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }

    set(gradingOrderAtom, newValue);
  },
});

export const gradingOrderItemsState = selector<GradingOrderItemAttributes[]>({
  key: 'gradingOrderItemsState',
  get: ({ get }) => {
    return get(gradingOrderState).gradingOrderItems || [];
  },
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }

    const newGradingOrder: GradingOrderAttributes = {
      ...get(gradingOrderState),
      gradingOrderItems: newValue,
    };

    set(gradingOrderState, newGradingOrder);
    set(currentItemIdState, -1);
  },
});

export const newGradingOrderItemsState = selector<GradingOrderItemAttributes[]>(
  {
    key: 'newGradingOrderItemsState',
    get: ({ get }) => {
      return get(newGradingOrderState).gradingOrderItems || [];
    },
    set: ({ set, get }, newValue) => {
      if (newValue instanceof DefaultValue) {
        return;
      }

      const newGradingOrder: GradingOrderAttributes = {
        ...get(gradingOrderState),
        gradingOrderItems: newValue,
      };

      set(newGradingOrderState, newGradingOrder);
      set(currentItemIdState, -1);
    },
  }
);

export const gradingOrderItemsSelectorFamily = selectorFamily<
  GradingOrderItemAttributes,
  number
>({
  key: 'gradingOrderItemsSelectorFamily',
  get:
    (index) =>
    ({ get }) =>
      get(gradingOrderItemsState).find(
        (item, itemIndex) => itemIndex === index
      ) || initGradingOrderItem,
  set:
    (id) =>
    ({ get, set, reset }, gradingOrderItem) => {
      if (!gradingOrderItem) {
        return;
      }
      if (gradingOrderItem instanceof DefaultValue) {
        // 삭제
        set(
          gradingOrderItemsState,
          get(gradingOrderItemsState).filter((item) => item.id !== id)
        );
        return;
      }
      // 기존 배열에 이미 존재하는 데이터인지 여부
      const isExistData = get(gradingOrderItemsState).some(
        (item) => item.id === id
      );
      // 이미 존재하는 데이터는 수정해주고 존재하지 않는 데이터라면 새로 추가해줍니다.
      const newGradingOrderItems = isExistData
        ? get(gradingOrderItemsState).map((item) =>
            item.id === id ? gradingOrderItem : item
          )
        : [...get(gradingOrderItemsState), { ...gradingOrderItem, id }];
      set(gradingOrderItemsState, newGradingOrderItems);
    },
});

export const currencyState = selector<CurrencyType>({
  key: 'currencyState',
  get: ({ get }) => {
    return get(gradingOrderState).currency || 'KRW';
  },
});

export const totalPriceState = selector<number>({
  key: 'totalPriceState',
  get: ({ get }) => {
    if (get(gradingSubmitTypeState) === 'REHOLDER') {
      return get(reholderTotalPriceState);
    }
    return get(gradingOrderState).totalPrice || 0;
  },
});

export const totalAmountState = selector<number>({
  key: 'totalAmountState',
  get: ({ get }) => {
    if (get(gradingSubmitTypeState) === 'REHOLDER') {
      return get(reholderTotalAmountState);
    }
    return get(gradingOrderState).totalAmount || 0;
  },
});

export const totalQtState = selector<number>({
  key: 'totalQtState',
  get: ({ get }) => {
    if (get(gradingSubmitTypeState) === 'REHOLDER') {
      return get(reholderTotalQtState);
    }
    return get(gradingOrderState).totalQt;
  },
});

export const isServiceAgreementCheckedState = atom<boolean>({
  key: 'isServiceAgreementCheckedState',
  default: false,
  effects: commonEffects({
    name: 'isServiceAgreementCheckedState',
    persist: true,
  }),
});

export const paymentMethodState = atom<PaymentMethod>({
  key: 'paymentMethodState',
  default: 'CONNECT_PAY',
  effects: commonEffects({
    name: 'paymentMethodState',
    persist: true,
  }),
});

export interface RefundAccount {
  bank: Bank;
  accountNumber: string;
  holderName: string;
}

export const refundAccountState = atom<RefundAccount>({
  key: 'refundAccountState',
  default: {
    bank: '국민',
    accountNumber: '',
    holderName: '',
  },
  effects: commonEffects({
    name: 'refundAccountState',
    persist: true,
  }),
});

export const orderTypeState = selector<GradingOrderType>({
  key: 'orderTypeState',
  get: ({ get }) => {
    return get(gradingOrderState).gradingOrderType;
  },
  set: ({ get, set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    const newGradingOrder: GradingOrderAttributes = {
      ...get(gradingOrderState),
      gradingOrderType: newValue,
    };

    set(gradingOrderState, newGradingOrder);
  },
});

export const serviceTypeState = selector<ServiceType>({
  key: 'serviceTypeState',
  get: ({ get }) => {
    return get(gradingSubmitTypeState) === 'REHOLDER' ? 'REHOLDER' : 'GRADING';
  },
});
