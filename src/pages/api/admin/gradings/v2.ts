import type { NextApiRequest, NextApiResponse } from 'next';

const result = {
  status: 'success',
  code: 0,
  message: 'OK',
  data: {
    autoTotalQt: 0,
    receiverPhone: '010-5093-3787',
    id: 795,
    gradingOrderStatus: 'COMPLETE',
    gradingOrderProcessingStatus: 'SHIPPING_OUT_COMPLETE',
    gradingOrderType: 'REG',
    receiverName: '최윤순',
    receiverAddress:
      '경북 경산시 백천동로 5 (백천동, 부영 초록마을) 106동 402호',
    trackingNumIn: '6745101045705',
    deliveryComIn: '01',
    trackingNumOut: '643155388412',
    deliveryComOut: '04',
    totalAmount: 22800,
    totalQt: 1,
    createdAt: '2021-08-29T05:11:30.000Z',
    memo: null,
    shippingInDate: null,
    estimatedGradingCompleteDate: '2021-09-30T09:48:22.000Z',
    shippingStartDate: '2021-09-15T09:48:22.000Z',
    member: {
      mbName: '',
      mbEmail: null,
    },
    payment: {
      virtualAccount: null,
      pay_method: '포인트',
      paid_at: '2021-08-29T05:14:09.000Z',
      cancelled_at: 0,
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query?.searchWord === '795') {
    res.status(200).json(result);
  } else {
    res.status(200).json({});
  }
}
