import clientNew from '@/common/modules/clientNew';
import { Response } from '@/common/types/common';

export interface PostVirtualPaymentBody {
  merchantUid: string;
  amount: number;
}

export interface PostVirtualPaymentResponse {
  gradingOrderId: number;
  paymentUid: string;
  merchantUid: string;
  status: string;
  amount: number;
}

export const postVirtualPayment = async (body: PostVirtualPaymentBody) => {
  const { data } = await clientNew.post<Response<PostVirtualPaymentResponse>>(
    '/api/payment/virtual-payment',
    body
  );

  return data;
};
