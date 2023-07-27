import { queryParameter, ResponseType } from '@/common/types/common';
import {
  CurrencyType,
  GradingOrderAttributes,
  GradingOrderShippingMethod,
} from '@/common/types/grading/gradingOrder';
import client from '@/common/modules/client';
import { RefundAccount } from '@/common/modules/recoil/gradingOrder';
import { PaymentMethod } from '@/common/types/payment';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import {
  CardCategory,
  GradingOrderItemCorrespondCheck,
} from '@/common/types/grading/gradingOrderItem';

export interface ApproveOrderType
  extends Pick<
    GradingOrderAttributes,
    | 'receiverAddress'
    | 'receiverMemo'
    | 'receiverName'
    | 'receiverPhone'
    | 'receiverTitle'
  > {
  totalAmount: number;
  totalQt: number;
  addressId: number;
  shippingMethod: GradingOrderShippingMethod;
  paymentMethod: PaymentMethod;
  cautionAgreement: boolean;
  currency: CurrencyType;
  orderType: 'REHOLDER';
  orderItems?: ApproveOrderItemsType;
}

export interface ApproveOrderItemType {
  gradingOrderItemId?: number;
  serial?: string;
  price?: number;
  amount?: number;
  cardCategory?: CardCategory;
  correspondCheck?: GradingOrderItemCorrespondCheck;
}

export type ApproveOrderItemsType = ApproveOrderItemType[];

export interface QueryKeyParams {
  amount: number;
  paymentKey: string;
  orderId: string;
  gradingOrder: Omit<GradingOrderAttributes, 'paymentMethod'> & {
    paymentMethod: PaymentMethod | 'TOSS_PAY';
  };
  order: ApproveOrderType;
  files: number[];
  refundReceiveAccount?: RefundAccount;
  serviceType: ServiceType;
}

export type PaymentApproveDataType = GradingOrderAttributes & {
  orderId?: number;
};

export interface paymentApproveResponse extends ResponseType {
  data: PaymentApproveDataType;
}

async function paymentApprove(
  body: QueryKeyParams
): Promise<paymentApproveResponse> {
  const { serviceType } = body;
  const { data } = await client.post(
    serviceType === 'REHOLDER'
      ? '/api/v2/payment/approve/toss?service=reholder'
      : '/api/v2/payment/approve/toss',
    body
  );
  return data;
}

export interface PaymentCancelParams {
  paymentKey: string;
  merchant_uid?: string;
  amount?: number;
  cancelReason?: string;
  refundReceiveAccount?: RefundAccount;
}
export interface ReholderPaymentCancelParams {
  paymentKey: string;
  amount?: number;
  cancelReason?: string;
  refundReceiveAccount?: RefundAccount;
}

export interface PaymentCancel extends ResponseType {
  data: GradingOrderAttributes;
}

async function paymentCancel(
  body: PaymentCancelParams
): Promise<PaymentCancel> {
  const { data } = await client.post('/api/payment/cancelTossPayments', body);
  return data;
}
/**
 * @remarks 결제 취소 api를 호출합니다.
 */
async function reholderPaymentCancel(
  body: ReholderPaymentCancelParams
): Promise<PaymentCancel> {
  const { data } = await client.post(
    '/api/payment/cancelTossPayments?service=reholder',
    body
  );
  return data;
}

export interface ChangeRefundAccountResponse extends ResponseType {
  data: number[];
}

export interface ChangeRefundAccountParams {
  gradingOrderId: number;
  body: RefundAccount;
}

export interface ChangeReholderRefundAccountParams {
  merchantUid: string;
  body: RefundAccount;
}

async function changeRefundAccount(
  params: ChangeRefundAccountParams
): Promise<ChangeRefundAccountResponse> {
  const { gradingOrderId, body } = params;
  const { data } = await client.put(
    `/api/payment/changeRefundVAccount/${gradingOrderId}`,
    body
  );
  return data;
}
/**
 * @remarks 결제 취소 api를 호출합니다.
 */
async function changeReholderRefundAccount(
  params: ChangeReholderRefundAccountParams
): Promise<ChangeRefundAccountResponse> {
  const { merchantUid, body } = params;
  const { data } = await client.put(
    `/api/payment/changeRefundVAccount/${merchantUid}?service=reholder`,
    body
  );
  return data;
}

export default {
  paymentApprove,
  paymentCancel,
  reholderPaymentCancel,
  changeRefundAccount,
  changeReholderRefundAccount,
};
