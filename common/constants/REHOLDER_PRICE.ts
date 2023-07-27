import { CurrencyType } from '@/common/types/reholderOrder/reholderOrder';

type ReholderPriceInfo = {
  [key in CurrencyType]: number;
};

const REHOLDER_PRICE_INFO: ReholderPriceInfo = {
  KRW: 9800,
  USD: 10,
};

export default REHOLDER_PRICE_INFO;
