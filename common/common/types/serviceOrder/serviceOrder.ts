import { FileInfoAttributes } from '@/common/types/fileInfo';
import {
  BoxStatus,
  BoxType,
  CurrencyType,
  GradingOrderAttributes,
  GradingOrderProcessingStatus,
  GradingOrderShippingMethod,
  GradingOrderStatus,
  GradingOrderStatusInfoType,
  GradingOrderType,
} from '@/common/types/grading/gradingOrder';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { PaymentAttributes, PaymentMethod } from '@/common/types/payment';
import { ProductAttributes } from '@/common/types/product/product';
import {
  ProductOrderAttributes,
  ProductOrderStatus,
} from '@/common/types/product/productOrder';
import { RefundRequestAttributes } from '@/common/types/refund/refundRequest';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';
import { AddressAttributes } from '@/common/types/user/address';
import { MemberAttributes } from '@/common/types/user/member';

export type AnyOrderType =
  | GradingOrderAttributes
  | ProductOrderAttributes
  | ReholderOrderAttributes;

export type ServiceType = 'GRADING' | 'EVENT' | 'REHOLDER';

export type ServiceOrderItemAttributes = GradingOrderItemAttributes;

export type ServiceOrderStatus = GradingOrderStatus | ProductOrderStatus;

export type ServiceOrderProcessingStatus =
  | GradingOrderProcessingStatus
  | undefined;

export type ServiceOrderType = GradingOrderType | 'REHOLDER';

export type ServiceOrderShippingMethod = GradingOrderShippingMethod;

export type ServiceOrderStatusInfoType = GradingOrderStatusInfoType;

export interface ServiceOrderAttributes {
  merchant_uid?: string;
  imp_uid?: string;
  id: number;
  mbId: number;
  member: MemberAttributes;
  addressId?: number;
  address?: AddressAttributes;
  serviceOrderItems?: ServiceOrderItemAttributes[];
  imageFiles?: FileInfoAttributes[];
  payment?: PaymentAttributes;
  refundRequest?: RefundRequestAttributes;
  totalPrice: number;
  totalAmount?: number;
  discountPrice?: number;
  deliveryDiscountAmount?: number;
  deliveryCost: number;
  totalQt: number;
  serviceOrderStatus: ServiceOrderStatus;
  serviceOrderProcessingStatus?: ServiceOrderProcessingStatus;
  serviceOrderType?: ServiceOrderType;
  shippingMethod?: ServiceOrderShippingMethod;
  deliveryComIn?: string;
  trackingNumIn?: string;
  deliveryComOut?: string;
  trackingNumOut?: string;
  memo?: string;
  shippingInDate?: string;
  estimatedServiceCompleteDate?: string;
  paymentDate?: string;
  paymentMethod?: PaymentMethod;
  serviceCompleteDate?: string;
  shippingStartDate?: string;
  estimatedShippingCompleteDate?: string;
  shippingCompleteDate?: string;
  cancelDate?: string;
  shippingStatus?: string;
  korQt: number;
  korAutoQt: number;
  foreignQt: number;
  foreignAutoQt: number;
  pokemonQt: number;
  yugiohQt: number;
  reholderQt: number;
  korTotalPrice: number;
  korAutoTotalPrice: number;
  foreignTotalPrice: number;
  foreignAutoTotalPrice: number;
  pokemonTotalPrice: number;
  yugiohTotalPrice: number;
  reholderTotalPrice: number;
  orderPhoto: string;
  needAutoGrading: boolean;
  photoUploadAgreement: boolean;
  cautionAgreement?: boolean;
  serviceAgreement?: boolean;
  noMinGradeAgreement?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  currency?: CurrencyType;
  product?: ProductAttributes;
  boxIn?: {
    id: number;
    name: string;
    type: BoxType;
    status: BoxStatus;
  };
  boxOut?: {
    id: number;
    name: string;
    type: BoxType;
    status: BoxStatus;
  };
  supportRegion?: string;
}

export type ServiceOrderDetailProps = Pick<
  ServiceOrderAttributes,
  | 'id'
  | 'serviceOrderStatus'
  | 'serviceOrderProcessingStatus'
  | 'serviceOrderType'
  | 'serviceOrderItems'
  | 'shippingStartDate'
  | 'shippingCompleteDate'
  | 'estimatedServiceCompleteDate'
  | 'serviceCompleteDate'
  | 'address'
  | 'createdAt'
  | 'discountPrice'
  | 'deliveryDiscountAmount'
  | 'totalPrice'
  | 'deliveryCost'
  | 'payment'
  | 'merchant_uid'
  | 'paymentMethod'
  | 'trackingNumIn'
  | 'deliveryComIn'
  | 'trackingNumOut'
  | 'deliveryComOut'
  | 'totalQt'
  | 'product'
  | 'totalAmount'
  | 'boxIn'
  | 'boxOut'
  | 'supportRegion'
>;
