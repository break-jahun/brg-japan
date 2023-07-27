import { FileInfoAttributes } from '@/common/types/fileInfo';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { PaymentAttributes, PaymentMethod } from '@/common/types/payment';
import { RefundRequestAttributes } from '@/common/types/refund/refundRequest';
import { AddressAttributes } from '@/common/types/user/address';
import { initMember, MemberAttributes } from '@/common/types/user/member';

export const REHOLDER_ORDER = {
  STATUS: {
    TEMP_SAVED: 'TEMP_SAVED',
    SAVED: 'SAVED',
    CANCELLED: 'CANCELLED',
    DEADLINE_EXPIRED: 'DEADLINE_EXPIRED',
    WAITING_FOR_DEPOSIT: 'WAITING_FOR_DEPOSIT',
    PROCESSING: 'PROCESSING',
    COMPLETE: 'COMPLETE',
    REFUNDED: 'REFUNDED',
    REQUEST_PARTIAL_CANCELED: 'REQUEST_PARTIAL_CANCELED',
    COMPLETE_PARTIAL_CANCELED: 'COMPLETE_PARTIAL_CANCELED',
    WRONG_REFUND_ACCOUNT: 'WRONG_REFUND_ACCOUNT',
    PAYMENT_FAILED: 'PAYMENT_FAILED',
  } as const,
  PROCESSING_STATUS: {
    OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION:
      'OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION',
    BREAK_SHIPPING_BEFORE_PICKUP: 'BREAK_SHIPPING_BEFORE_PICKUP',
    NOT_PROCESSING: 'NOT_PROCESSING',
    SHIPPING_IN: 'SHIPPING_IN',
    SHIPPING_IN_COMPLETE: 'SHIPPING_IN_COMPLETE',
    WAREHOUSE_IN: 'WAREHOUSE_IN',
    CARD_CORRESPOND_CHECKED: 'CARD_CORRESPOND_CHECKED',
    VSC_CHECKED: 'VSC_CHECKED',
    CARD_DEFECT_CHECKED: 'CARD_DEFECT_CHECKED',
    CARD_SCORED: 'CARD_SCORED',
    CASING_COMPLETE: 'CASING_COMPLETE',
    WAREHOUSE_OUT: 'WAREHOUSE_OUT',
    SHIPPING_OUT: 'SHIPPING_OUT',
    SHIPPING_OUT_COMPLETE: 'SHIPPING_OUT_COMPLETE',
  } as const,
  SUBMIT_TYPE: {
    GENERAL: 'GENERAL',
    SIMPLE: 'SIMPLE',
  } as const,
  TYPE: {
    REG: 'REG',
    EXP: 'EXP',
  } as const,
  SHIPPING_METHOD: {
    SELF_SHIPPING: 'SELF_SHIPPING',
    BRG_SHIPPING: 'BRG_SHIPPING',
    QUICK: 'QUICK',
    VISIT: 'VISIT',
  } as const,
  CURRENCY_TYPE: {
    KRW: 'KRW',
    USD: 'USD',
  } as const,
  PHOTO_LIMIT: {
    MIN: 1,
    MAX: 100,
  } as const,
  ESTIMATED_SHIPPING_TERM: {
    REG: 15,
    EXP: 5,
  } as const,
};

export type ReholderOrderStatus =
  typeof REHOLDER_ORDER.STATUS[keyof typeof REHOLDER_ORDER.STATUS];
export type ReholderOrderProcessingStatus =
  typeof REHOLDER_ORDER.PROCESSING_STATUS[keyof typeof REHOLDER_ORDER.PROCESSING_STATUS];

export type GradingSubmitType =
  typeof REHOLDER_ORDER.SUBMIT_TYPE[keyof typeof REHOLDER_ORDER.SUBMIT_TYPE];
export type ReholderOrderType =
  typeof REHOLDER_ORDER.TYPE[keyof typeof REHOLDER_ORDER.TYPE];
export type ReholderOrderShippingMethod =
  typeof REHOLDER_ORDER.SHIPPING_METHOD[keyof typeof REHOLDER_ORDER.SHIPPING_METHOD];
export type CurrencyType =
  typeof REHOLDER_ORDER.CURRENCY_TYPE[keyof typeof REHOLDER_ORDER.CURRENCY_TYPE];
export type PhotoLimit =
  typeof REHOLDER_ORDER.PHOTO_LIMIT[keyof typeof REHOLDER_ORDER.PHOTO_LIMIT];

export interface ReholderOrderItemAttributes {
  [key: string]: any;
  gradingOrderItem: GradingOrderItemAttributes;
}
export interface ReholderOrderAttributes {
  merchant_uid?: string;
  imp_uid?: string;
  id: number;
  mbId: number;
  member: MemberAttributes;
  addressId?: number;
  address?: AddressAttributes;
  reholderOrderItems?: ReholderOrderItemAttributes[];
  imageFiles?: FileInfoAttributes[];
  payment?: PaymentAttributes;
  refundRequest?: RefundRequestAttributes;
  totalPrice: number;
  totalAmount: number;
  discountPrice?: number;
  deliveryCost: number;
  totalQt: number;
  reholderOrderStatus: ReholderOrderStatus;
  reholderOrderProcessingStatus: ReholderOrderProcessingStatus;
  gradingOrderType: ReholderOrderType;
  shippingMethod?: ReholderOrderShippingMethod;
  deliveryComIn?: string;
  trackingNumIn?: string;
  deliveryComOut?: string;
  trackingNumOut?: string;
  memo?: string;
  shippingInDate?: string;
  estimatedReholderCompleteDate?: string;
  paymentDate?: string;
  paymentMethod?: PaymentMethod;
  reholderCompleteDate?: string;
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
  receiverName?: string;
  receiverPhone?: string;
  receiverAddress?: string;
  receiverMemo?: string;
  receiverTitle?: string;
}

export type ReholderOrderStatusInfoType =
  | 'CONTINUE_ORDER'
  | 'WAITING_FOR_DEPOSIT'
  | 'NEED_INVOICE_INPUT'
  | 'PICKUP_REQUIRED'
  | 'SHIPPING_IN'
  | 'SHIPPING_IN_COMPLETE'
  | 'WAREHOUSE_IN'
  | 'GRADING'
  | 'GRADING_COMPLETE'
  | 'SHIPPING_OUT'
  | 'SHIPPING_OUT_COMPLETE'
  | 'MY_ORDER'
  | 'CANCELLED'
  | 'CANNOT_SELECT';

export interface ReholderOrderStatusInfoAttributes {
  statusText?: string;
  deliveryInfoText?: string;
  mainText: string;
  type: ReholderOrderStatusInfoType;
  deliveryCost?: number;
  activeStep?: number;
  invoiceText1?: string;
  invoiceText2?: string;
  stepText?: string;
}

// 그레이딩 주문 진행 상태를 나타내는 타입을 모아놓았습니다.
export const REHOLDER_ORDER_STATUS_INFO = {
  DELIVERY_INFO_SENT_TO_BREAK: ['SHIPPING_IN'] as ReholderOrderStatusInfoType[],
  DELIVERY_INFO_SENT_TO_THE_USER: [
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  REVOCABLE_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
  ] as ReholderOrderStatusInfoType[],
  REFUNDABLE_TYPE: [
    'WAREHOUSE_IN',
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  ADDRESS_CHANGEABLE_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
    'WAREHOUSE_IN',
    'GRADING',
    'SHIPPING_IN_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  ALLOWED_TO_SHOW_DELIVERY_INFO_TYPE: [
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
    'SHIPPING_IN_COMPLETE',
    'WAREHOUSE_IN',
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  ALLOWED_TO_SHOW_GRADING_RESULTS_SUMMARY_TYPE: [
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  ALLOWED_TO_SHOW_ADDRESS_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
    'WAREHOUSE_IN',
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
    'SHIPPING_IN_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  ALLOWED_TO_SHOW_GRADING_ITEM_RESULTS_TYPE: [
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as ReholderOrderStatusInfoType[],
  ALLOWED_TO_SHOW_REHOLDER_ORDER_STATUS_TEXT_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'WAREHOUSE_IN',
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
    'CANCELLED',
  ] as ReholderOrderStatusInfoType[],
  ALLOWED_TO_MODIFY_ADDRESS_TYPE: {
    GRADING: 'GRADING',
  } as const,
  BEFORE_GRADING_COMPLETE_TYPE: [
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
    'WAREHOUSE_IN',
    'GRADING',
  ] as ReholderOrderStatusInfoType[],
  AFTER_GRADING_COMPLETE_TYPE: {
    GRADING_COMPLETE: 'GRADING_COMPLETE',
    SHIPPING_OUT: 'SHIPPING_OUT',
    SHIPPING_OUT_COMPLETE: 'SHIPPING_OUT_COMPLETE',
  } as const,
};

export const initReholderOrder: ReholderOrderAttributes = {
  id: -1,
  mbId: -1,
  member: initMember,
  reholderOrderItems: [],
  totalPrice: 0,
  totalAmount: 0,
  totalQt: 0,
  reholderOrderStatus: 'TEMP_SAVED',
  reholderOrderProcessingStatus: 'NOT_PROCESSING',
  shippingMethod: 'SELF_SHIPPING',
  deliveryCost: 3000,
  paymentMethod: 'CONNECT_PAY',
  orderPhoto: '',
  korQt: 0,
  korAutoQt: 0,
  foreignQt: 0,
  foreignAutoQt: 0,
  pokemonQt: 0,
  yugiohQt: 0,
  reholderQt: 0,
  korTotalPrice: 0,
  korAutoTotalPrice: 0,
  foreignTotalPrice: 0,
  foreignAutoTotalPrice: 0,
  pokemonTotalPrice: 0,
  yugiohTotalPrice: 0,
  reholderTotalPrice: 0,
  needAutoGrading: false,
  photoUploadAgreement: false,
  cautionAgreement: false,
  gradingOrderType: 'REG',
  deliveryComIn: '',
  trackingNumIn: '',
  deliveryComOut: '',
  trackingNumOut: '',
};
