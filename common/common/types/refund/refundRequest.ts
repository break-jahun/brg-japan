import { GradingOrderAttributes } from '../grading/gradingOrder';
import { MemberAttributes } from '../user/member';
import { ProductOrderAttributes } from '../product/productOrder';
import { RefundReasonAttributes } from './refundReason';

export interface RefundRequestAttributes {
  mbId?: number;
  member?: MemberAttributes;
  gradingOrderId?: number;
  gradingOrder?: GradingOrderAttributes;
  productOrderId?: number;
  productOrder?: ProductOrderAttributes;
  approved?: boolean;
  amount?: number;
  refundReasonId: number;
  refundReason: RefundReasonAttributes;
  refundReasonDetail?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
