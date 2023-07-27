import { PaymentMethod, PaymentAttributes } from '../payment';
import { FileInfoAttributes } from '../fileInfo';
import { initMember, MemberAttributes } from '../user/member';
import { AddressAttributes } from '../user/address';
import { RefundRequestAttributes } from '../refund/refundRequest';
import { GradingOrderItemAttributes } from './gradingOrderItem';

export const GRADING_ORDER = {
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
    REHOLDER: 'REHOLDER',
  } as const,
  TYPE: {
    REG: 'REG',
    EXP: 'EXP',
    REHOLDER: 'REHOLDER',
    BULK: 'BULK',
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
    TWD: 'TWD',
  } as const,
  PHOTO_LIMIT: {
    MIN: 1,
    MAX: 100,
  } as const,
  ESTIMATED_SHIPPING_TERM: {
    REG: 15,
    REHOLDER: 10,
    EXP: 5,
  } as const,
};

export type GradingOrderStatus =
  typeof GRADING_ORDER.STATUS[keyof typeof GRADING_ORDER.STATUS];
export type GradingOrderProcessingStatus =
  | typeof GRADING_ORDER.PROCESSING_STATUS[keyof typeof GRADING_ORDER.PROCESSING_STATUS];

export type GradingSubmitType =
  typeof GRADING_ORDER.SUBMIT_TYPE[keyof typeof GRADING_ORDER.SUBMIT_TYPE];
export type GradingOrderType =
  typeof GRADING_ORDER.TYPE[keyof typeof GRADING_ORDER.TYPE];
export type GradingOrderShippingMethod =
  typeof GRADING_ORDER.SHIPPING_METHOD[keyof typeof GRADING_ORDER.SHIPPING_METHOD];
export type CurrencyType =
  typeof GRADING_ORDER.CURRENCY_TYPE[keyof typeof GRADING_ORDER.CURRENCY_TYPE];
export type PhotoLimit =
  typeof GRADING_ORDER.PHOTO_LIMIT[keyof typeof GRADING_ORDER.PHOTO_LIMIT];
export type BoxType = 'IN' | 'OUT'; // 한국->대만 IN, 대만->한국 OUT
export type BoxStatus = 'AT_PICKUP' | 'IN_TRANSIT' | 'DELIVERED'; // 발송전,배송중,수령완료
export type NewGradingOrderType = 'REG' | 'EXP' | 'BULK' | 'SAMPLE'; // 신규 주문 API 주문 타입
export type NewCardCategory =
  | 'TCG'
  | 'POKEMON'
  | 'YUGIOH'
  | 'ETC_TCG'
  | 'SPORTS'
  | 'ETC';
export interface GradingOrderAttributes {
  merchant_uid?: string;
  imp_uid?: string;
  id: number;
  mbId: number;
  member: MemberAttributes;
  addressId?: number;
  address?: AddressAttributes;
  gradingOrderItems?: GradingOrderItemAttributes[];
  imageFiles?: FileInfoAttributes[];
  payment?: PaymentAttributes;
  refundRequest?: RefundRequestAttributes;
  totalPrice: number;
  totalAmount: number;
  discountPrice?: number;
  deliveryDiscountAmount?: number;
  deliveryCost: number;
  totalQt: number;
  gradingOrderStatus: GradingOrderStatus;
  gradingOrderProcessingStatus: GradingOrderProcessingStatus;
  gradingOrderType: GradingOrderType;
  shippingMethod?: GradingOrderShippingMethod;
  deliveryComIn?: string;
  trackingNumIn?: string;
  deliveryComOut?: string;
  trackingNumOut?: string;
  memo?: string;
  shippingInDate?: string;
  estimatedGradingCompleteDate?: string;
  paymentDate?: string;
  paymentMethod?: PaymentMethod;
  gradingCompleteDate?: string;
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
  supportRegion?: {
    id: number;
    region: string;
  };
}

export type GradingOrderStatusInfoType =
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

export interface GradingOrderStatusInfoAttributes {
  statusText?: string;
  deliveryInfoText?: string;
  mainText: string;
  type: GradingOrderStatusInfoType;
  deliveryCost?: number;
  activeStep?: number;
  invoiceText1?: string;
  invoiceText2?: string;
  stepText?: string;
}

// 그레이딩 주문 진행 상태를 나타내는 타입을 모아놓았습니다.
export const GRADING_ORDER_STATUS_INFO = {
  DELIVERY_INFO_SENT_TO_BREAK: ['SHIPPING_IN'] as GradingOrderStatusInfoType[],
  DELIVERY_INFO_SENT_TO_THE_USER: [
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as GradingOrderStatusInfoType[],
  REVOCABLE_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
  ] as GradingOrderStatusInfoType[],
  REFUNDABLE_TYPE: [
    'WAREHOUSE_IN',
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as GradingOrderStatusInfoType[],
  ADDRESS_CHANGEABLE_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
    'WAREHOUSE_IN',
    'GRADING',
    'SHIPPING_IN_COMPLETE',
  ] as GradingOrderStatusInfoType[],
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
  ] as GradingOrderStatusInfoType[],
  ALLOWED_TO_SHOW_GRADING_RESULTS_SUMMARY_TYPE: [
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as GradingOrderStatusInfoType[],
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
  ] as GradingOrderStatusInfoType[],
  ALLOWED_TO_SHOW_GRADING_ITEM_RESULTS_TYPE: [
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
  ] as GradingOrderStatusInfoType[],
  ALLOWED_TO_SHOW_GRADING_ORDER_STATUS_TEXT_TYPE: [
    'WAITING_FOR_DEPOSIT',
    'WAREHOUSE_IN',
    'GRADING',
    'GRADING_COMPLETE',
    'SHIPPING_OUT',
    'SHIPPING_OUT_COMPLETE',
    'CANCELLED',
  ] as GradingOrderStatusInfoType[],
  ALLOWED_TO_MODIFY_ADDRESS_TYPE: {
    GRADING: 'GRADING',
  } as const,
  BEFORE_GRADING_COMPLETE_TYPE: [
    'NEED_INVOICE_INPUT',
    'PICKUP_REQUIRED',
    'SHIPPING_IN',
    'WAREHOUSE_IN',
    'GRADING',
  ] as GradingOrderStatusInfoType[],
  AFTER_GRADING_COMPLETE_TYPE: {
    GRADING_COMPLETE: 'GRADING_COMPLETE',
    SHIPPING_OUT: 'SHIPPING_OUT',
    SHIPPING_OUT_COMPLETE: 'SHIPPING_OUT_COMPLETE',
  } as const,
};

export const initGradingOrder: GradingOrderAttributes = {
  id: -1,
  mbId: -1,
  member: initMember,
  gradingOrderItems: [],
  totalPrice: 0,
  totalAmount: 0,
  totalQt: 0,
  gradingOrderStatus: 'TEMP_SAVED',
  gradingOrderProcessingStatus: 'NOT_PROCESSING',
  shippingMethod: 'SELF_SHIPPING',
  deliveryCost: 0,
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
