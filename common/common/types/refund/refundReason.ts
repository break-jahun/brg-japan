import { RefundRequestAttributes } from './refundRequest';

export interface RefundReasonAttributes {
  id: number;
  reason: string;
  refundRequests?: RefundRequestAttributes[];
}
