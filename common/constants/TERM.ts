import { GradingOrderType } from '@/common/types/grading/gradingOrder';

type TermType = {
  ESTIMATED_SHIPPING_TERM: {
    [key in GradingOrderType]: number;
  };
};

const TERM: TermType = {
  ESTIMATED_SHIPPING_TERM: {
    REG: 15,
    EXP: 5,
    REHOLDER: 10,
    BULK: 30,
  },
};

export default TERM;
