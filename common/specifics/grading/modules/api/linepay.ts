import clientNew from '@/common/modules/clientNew';
import { Response } from '@/common/types/common';

export interface PostLinepayRequestBody {
  merchantUid: string;
  amount: number;
  confirmUrl: string;
  cancelUrl: string;
}

export interface PostLinepayRequestResponse {
  amount: number;
  merchantUid: string;
  paymentUid: string;
  status: string;
  paymentUrl: {};
}

export const postLinepayRequest = async (body: PostLinepayRequestBody) => {
  const { data } = await clientNew.post<Response<PostLinepayRequestResponse>>(
    '/api/linepay/request',
    body
  );

  return data;
};

export interface PostLinepayConfirmBody {
  orderId: string;
  transactionId: string;
}

export interface PostLinepayConfirmResponse {
  id: number;
  merchantUid: string;
  paymentUid: string;
  status: string;
  gradingOrder: {
    id: number;
    gradingOrderStatus: string;
  };
}

export const postLinepayConfirm = async (body: PostLinepayConfirmBody) => {
  const { data } = await clientNew.post<Response<PostLinepayConfirmResponse>>(
    '/api/linepay/confirm',
    body
  );

  return data;
};
