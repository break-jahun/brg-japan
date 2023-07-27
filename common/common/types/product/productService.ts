import { GradingOrderType } from '../grading/gradingOrder';

export interface ProductServiceAttributes {
  id?: number;
  supportRegionId?: number;
  serviceName?: GradingOrderType;
  price?: number;
  discountPrice?: number;
  discountRate?: number;
  amount?: number;
  isUse?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
