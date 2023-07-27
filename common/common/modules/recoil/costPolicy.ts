import commonEffects from '@/common/modules/recoil/commonEffects';
import { CostPolicy } from '@/common/types/cost/costPolicy';
import { CurrencyType } from '@/common/types/grading/gradingOrder';
import { atom, selectorFamily } from 'recoil';

export const costPolicyState = atom<CostPolicy>({
  key: 'costPolicyState',
  default: undefined,
  effects: commonEffects({
    name: 'costPolicyState',
    persist: true,
  }),
});

export const productServicePriceState = selectorFamily({
  key: 'productService',
  get:
    (type) =>
    ({ get }) => {
      const costPolicy = get(costPolicyState);

      if (!costPolicy) {
        return null;
      }

      return costPolicy.productService.find((item) => item.serviceName === type)
        ?.amount;
    },
});

export const newCurrencyState = atom<CurrencyType>({
  key: 'newCurrencyType',
  default: undefined,
});
