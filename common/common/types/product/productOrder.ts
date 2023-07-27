import { AddressAttributes } from '../user/address';
import { PaymentMethod, PaymentAttributes } from '../payment';
import { MemberAttributes } from '../user/member';
import { ProductAttributes } from './product';
import { RefundRequestAttributes } from '../refund/refundRequest';

export type ProductOrderStatus =
  | 'TEMP_SAVED'
  | 'PAYMENT_COMPLETE'
  | 'SHIPPING_OUT'
  | 'SHIPPING_OUT_COMPLETE'
  | 'CANCELLED'
  | 'REFUNDED';

export interface ProductOrderAttributes {
  merchant_uid?: string;
  imp_uid?: string;
  id: number;
  mbId: number;
  productId: number;
  addressId?: number;
  member?: MemberAttributes;
  product?: ProductAttributes;
  address?: AddressAttributes;
  payment?: PaymentAttributes;
  refundRequest?: RefundRequestAttributes;
  productOrderStatus: ProductOrderStatus;
  qt: number;
  price: number;
  deliveryCost: number;
  paymentMethod?: PaymentMethod;
  totalPrice: number;
  paymentDate?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  deliveryCom?: string;
  trackingNum?: string;
}
