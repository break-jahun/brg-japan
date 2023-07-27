import { ResponseType } from '@/common/types/common';
import {
  CardCategory,
  GradingOrderItemCorrespondCheck,
} from '@/common/types/grading/gradingOrderItem';
import { PaymentMethod } from '@/common/types/payment';
import {
  CurrencyType,
  ReholderOrderAttributes,
} from '@/common/types/reholderOrder/reholderOrder';
import { MemberAttributes } from '@/common/types/user/member';

export interface GetReholderOrderById extends ResponseType {
  result: ReholderOrderAttributes;
}

export interface ReholderDetailResultType {
  id: number;
  mbId: number;
  totalPrice: number;
  discountPrice: number;
  totalAmount: number;
  deliveryCost: number;
  estimatedReholderCompleteDate: string;
  paymentDate: string;
  paymentMethod: PaymentMethod;
  cautionAgreement: boolean;
  currency: CurrencyType;
  member: MemberAttributes;
  receiverName?: string;
  receiverPhone?: string;
  receiverAddress?: string;
  receiverMemo?: string;
  receiverTitle?: string;
  totalQt: number;
  reholderOrderItems: {
    gradingOrderItemId: number;
    serial: string;
    price: number;
    amount: number;
    cardCategory: CardCategory;
    correspondCheck: GradingOrderItemCorrespondCheck;
  }[];
}

export interface GetReholderOrderDetailById extends ResponseType {
  result: ReholderDetailResultType;
}

export interface GetReholderOrder extends ResponseType {
  data: { result: { count: number; rows: ReholderOrderAttributes[] } };
}
