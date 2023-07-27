import commonEffects from '@/common/modules/recoil/commonEffects';
import { costPolicyState } from '@/common/modules/recoil/costPolicy';
import { gradingOrderState } from '@/common/modules/recoil/gradingOrder';
import { memberShipState } from '@/common/modules/recoil/memberShip';
import { CardAttributes } from '@/common/types/grading/card';
import {
  CardCategory,
  GradingOrderItemCorrespondCheck,
} from '@/common/types/grading/gradingOrderItem';
import REHOLDER_PRICE_INFO from '@/constants/REHOLDER_PRICE';
import { atom, selector } from 'recoil';

export interface ReholderCardType {
  id: number;
  serial: string;
  cardInfo?: string;
  cardCategory: CardCategory;
  price: number;
  amount: number;
  correspondCheck?: GradingOrderItemCorrespondCheck;
}

export type ReholderCardList = ReholderCardType[];

export const reholderCardListState = atom<ReholderCardList | undefined>({
  key: 'reholderCardListState',
  default: undefined,
  effects: commonEffects({
    name: 'reholderCardListState',
    persist: true,
  }),
});

export const fetchedReholderPriceState = atom<number>({
  key: 'fetchedReholderPrice',
  default: undefined,
  effects: commonEffects({
    name: 'fetchedReholderPrice',
    persist: true,
  }),
});

export const fetchedReholderTotalPriceState = atom<number>({
  key: 'fetchedReholderTotalPriceState',
  default: undefined,
  effects: commonEffects({
    name: 'fetchedReholderTotalPriceState',
    persist: true,
  }),
});

export const fetchedReholderTotalAmountState = atom<number>({
  key: 'fetchedReholderTotalAmountState',
  default: undefined,
  effects: commonEffects({
    name: 'fetchedReholderTotalAmountState',
    persist: true,
  }),
});

export const reholderPriceState = selector<number>({
  key: 'reholderPriceState',
  get: ({ get }) => {
    if (get(fetchedReholderPriceState)) {
      return get(fetchedReholderPriceState);
    }
    const costPolicy = get(costPolicyState);
    const membership = get(memberShipState);

    if (costPolicy && membership) {
      let reholderPrice = REHOLDER_PRICE_INFO.KRW;

      const reholderAmount = costPolicy.productService.find(
        (item) => item.serviceName === 'REHOLDER'
      )?.amount;

      if (reholderAmount) {
        reholderPrice = reholderAmount;
      }

      const { discountRate } = membership.membership;

      if (discountRate) {
        reholderPrice *= 1 - discountRate;
      }

      return reholderPrice;
    }
    return REHOLDER_PRICE_INFO.KRW;
  },
});

export const reholderTotalPriceState = selector<number>({
  key: 'reholderTotalPriceState',
  get: ({ get }) => {
    if (get(fetchedReholderTotalPriceState)) {
      return get(fetchedReholderTotalPriceState);
    }
    const quantity = get(reholderCardListState)?.length ?? 0;
    const price = get(reholderPriceState);

    return quantity * price;
  },
});

export const reholderTotalAmountState = selector<number>({
  key: 'reholderTotalAmountState',
  get: ({ get }) => {
    if (get(fetchedReholderTotalAmountState)) {
      return get(fetchedReholderTotalAmountState);
    }
    const quantity = get(reholderCardListState)?.length ?? 0;
    const price = get(reholderPriceState);
    const { deliveryCost } = get(gradingOrderState);

    return quantity * price + deliveryCost;
  },
});

export const reholderTotalQtState = selector<number>({
  key: 'reholderTotalQtState',
  get: ({ get }) => {
    return get(reholderCardListState)?.length ?? 0;
  },
});
