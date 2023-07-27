import { ResponseType } from '@/common/types/common';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import client from '@/common/modules/client';
import {
  ApproveOrderType,
  PaymentApproveDataType,
} from '@/specifics/grading/modules/api/tossPayments';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';

export interface paymentApproveResponse extends ResponseType {
  data: PaymentApproveDataType;
}

export interface ReadyKakaoPay extends ResponseType {
  data: {
    tid: string;
    tms_result: boolean;
    next_redirect_app_url: string;
    next_redirect_mobile_url: string;
    next_redirect_pc_url: string;
    android_app_scheme: string;
    ios_app_scheme: string;
    partner_order_id: string;
    partner_user_id: string;
  };
}

export interface ReadyKakaoPayParams {
  partner_order_id: string;
  partner_user_id: string;
  item_name: string;
  quantity: number;
  total_amount: number;
  tax_free_amount: number;
  approval_url: string;
  cancel_url: string;
  fail_url: string;
}

export interface KakaoPayApproveParams {
  tid: string;
  partner_order_id: string;
  partner_user_id: string;
  pg_token: string;
  total_amount?: number;
  gradingOrder: GradingOrderAttributes;
  files: number[];
  amount?: number;
  orderId?: string;
  order: ApproveOrderType;
  serviceType: ServiceType;
}

async function readyKakaoPay(
  params: ReadyKakaoPayParams
): Promise<ReadyKakaoPay> {
  const { data } = await client.post('/api/payment/kakaoPayReady', params);
  return data;
}

async function kakaoPayPaymentApprove(
  params: KakaoPayApproveParams
): Promise<paymentApproveResponse> {
  const { serviceType } = params;

  const { data } = await client.post(
    serviceType === 'REHOLDER'
      ? '/api/v2/payment/approve/kakaopay?service=reholder'
      : '/api/v2/payment/approve/kakaopay',
    params
  );
  return data;
}

export default {
  readyKakaoPay,
  kakaoPayPaymentApprove,
};
