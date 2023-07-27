import clientNew from '@/common/modules/clientNew';
import { Response } from '@/common/types/common';
import {
  GradingOrderShippingMethod,
  NewGradingOrderType,
} from '@/common/types/grading/gradingOrder';
import { NewGradingOrderItem } from '@/common/types/grading/gradingOrderItem';

export interface PostOrderBody {
  gradingOrderType: NewGradingOrderType;
  shippingMethod: GradingOrderShippingMethod;
  submitType: 'GENERAL' | 'SIMPLE';
  addressId: number;
  // noMinGradeAgreement, photoUploadAgreement EXP 동의 관련 항목
  noMinGradeAgreement?: boolean;
  photoUploadAgreement?: boolean;
  items: NewGradingOrderItem[];
}

export interface PostOrderResponse {
  id: number;
  merchantUid: string;
  totalAmount: number;
  gradingOrderStatus: string;
  gradingOrderProcessingStatus: string;
}

export const postOrder = async (body: PostOrderBody) => {
  const { data } = await clientNew.post<Response<PostOrderResponse>>(
    '/api/gradings/order',
    body
  );

  return data;
};
