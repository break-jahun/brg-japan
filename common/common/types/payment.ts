import { Bank } from '@tosspayments/payment__types/types/models/Bank';
import { GradingOrderAttributes } from './grading/gradingOrder';
import { MemberAttributes } from './user/member';
import { ProductOrderAttributes } from './product/productOrder';

export interface IamPortAuthData {
  merchant_uid?: string;
  company?: string;
  carrier?: string;
  name?: string;
  phone?: string;
  min_age?: number;
  popup?: boolean;
}

export type IamportPayMethod =
  | ''
  | 'card'
  | 'trans'
  | 'vbank'
  | 'phone'
  | 'samsung'
  | 'kpay'
  | 'kakaopay'
  | 'payco'
  | 'lpay'
  | 'ssgpay'
  | 'tosspay'
  | 'cultureland'
  | 'smartculture'
  | 'happymoney'
  | 'booknlife'
  | 'point'
  | 'naverpay'
  | 'paypal';

export type IamPortPaymentStatus = 'ready' | 'paid' | 'cancelled' | 'failed';

export type PaymentType = 'IMP' | 'Toss';

export interface PaymentAttributes {
  id?: number;
  virtualAccount: PaymentVirtualAccountAttributes;
  gradingOrderId?: number;
  gradingOrder?: GradingOrderAttributes;
  productOrderId?: number;
  productOrder?: ProductOrderAttributes;
  mbId?: number;
  member?: MemberAttributes;
  payment_uid: string;
  merchant_uid: string;
  name: string;
  payment_type: PaymentType;
  pay_method: string;
  card_name: string;
  card_number: string;
  amount: number;
  cancel_amount: number;
  status: paymentStatusType;
  paid_at: number;
  cancelled_at: number;
  receipt_url: string;
  secret?: string;
  refundReceiveAccount?: RefundReceiveAccountType;
  cancel_history?: CancelHistoryAttributes[];
}

export interface PaymentVirtualAccountAttributes {
  accountNumber: string;
  bank: Bank;
  customerName: string;
  dueDate: string;
}

export interface RefundReceiveAccountType {
  bank: Bank;
  accountNumber: string;
  holderName: string;
}
export type paymentStatusType =
  // 아임토트 status
  | 'cancelled'
  | 'paid'
  | 'ready'
  // 토스페이먼츠 status
  | 'WAITING_FOR_DEPOSIT'
  | 'DONE'
  | 'CANCELED'
  | 'PARTIAL_CANCELED'
  | 'DEADLINE_EXPIRED'
  // 카카오페이
  | 'SUCCESS_PAYMENT'
  | 'CANCEL_PAYMENT'
  | 'PART_CANCEL_PAYMENT';

export interface IamPortPaymentData {
  pg?: string;
  pay_method?: IamportPayMethod;
  merchant_uid?: string;
  amount?: number;
  name?: string;
  buyer_name?: string;
  buyer_tel?: string;
  buyer_email?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  escrow?: boolean;
  custom_data?: string;
  tax_free?: number;
  currency?: string;
  language?: string;
  notice_url?: string | string[];
  display?: unknown;
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}

export interface IamPortPaymentResponse {
  apply_num: string;
  bank_name: string;
  buyer_addr: string;
  buyer_email: string;
  buyer_name: string;
  buyer_postcode: string;
  buyer_tel: string;
  card_name: string;
  card_number: string;
  card_quota: number;
  currency: string;
  custom_data: string;
  imp_uid: string;
  merchant_uid: string;
  name: string;
  paid_amount: number;
  paid_at: string;
  pay_method: IamportPayMethod;
  pg_provider: string;
  pg_tid: string;
  pg_type: string;
  receipt_url: string;
  status: IamPortPaymentStatus;
  success: boolean;
  error_code: string;
  error_msg: string;
  vbank_num?: string;
  vbank_holder?: string;
  vbank_date?: string;
}

export interface IamPortCancelRequest {
  imp_uid: string;
  merchant_uid: string;
  cancel_request_amount?: number;
  reason: string;
  refund_holder?: string;
  refund_bank?: string;
  refund_account?: string;
}

export interface CancelHistoryAttributes {
  cancelReason: string;
  canceledAt: number;
  cancelAmount: number;
}

export type PaymentMethod =
  | 'NORMAL'
  | 'CASH'
  | 'KAKAO_PAY'
  | 'NAVER_PAY'
  | 'PAYPAL'
  | 'CARD'
  | 'VIRTUAL_ACCOUNT'
  | 'ACCOUNT_TRANSFER'
  | 'PHONE'
  | 'GIFT_CARD'
  | 'TOSS_PAY' // 서버에서는 TOSS_PAY로 받고 있어서 validation 오류 나는 상황. approve api 시점에선 TOSS_PAY로 전환 필요
  | 'CONNECT_PAY';

export const bankList: Bank[] = [
  '광주',
  '국민',
  '기업',
  '농협',
  '대구',
  '부산',
  '산업',
  '새마을',
  '산림',
  '수협',
  '신한',
  '신협',
  '씨티',
  '우리',
  '우체국',
  '저축',
  '전북',
  '제주',
  '카카오',
  '케이',
  '토스',
  '하나',
  'SC제일',
];
