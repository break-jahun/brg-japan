import type { NextApiRequest, NextApiResponse } from 'next';

const result = {
  status: 'success',
  code: 0,
  message: 'OK',
  data: {
    autoTotalQt: 0,
    id: 12345,
    gradingOrderStatus: 'TEMP_SAVED',
    gradingOrderProcessingStatus:
      'OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION',
    gradingOrderType: 'REG',
    receiverName: '',
    receiverAddress: '',
    trackingNumIn: '',
    deliveryComIn: '',
    trackingNumOut: '',
    deliveryComOut: '',
    totalAmount: 3000,
    totalQt: 0,
    createdAt: '2022-03-02T11:08:17.000Z',
    memo: null,
    shippingInDate: null,
    estimatedGradingCompleteDate: null,
    shippingStartDate: null,
    member: {
      mbPhone: '010-5041-3220',
      mbName: '이상엽',
      mbEmail: 'dhsl0714@kakao.com',
    },
    payment: null,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.query?.searchWord === '795') {
  //   res.status(200).json(result);
  // } else {
  //   res.status(200).json({});
  // }
  res.status(200).json(result);
}
