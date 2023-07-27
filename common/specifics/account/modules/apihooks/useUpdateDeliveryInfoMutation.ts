import { ResponseType } from '@/common/types/common';
import { ServiceOrderAttributes } from '@/common/types/serviceOrder/serviceOrder';
import delivery from '@/specifics/account/modules/api/delivery';
import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface UpdateDeliveryInfoIn extends ResponseType {
  data: any;
}

export interface UpdateDeliveryInfoInParams {
  id: number;
  deliveryCompanyNumber: string;
  trackingNumber: string;
}

export function useUpdateGradingOrderDeliveryInfoInMutation(): UseMutationResult<
  UpdateDeliveryInfoIn,
  AxiosError,
  UpdateDeliveryInfoInParams
> {
  return useMutation(delivery.updateGradingOrderDeliveryInfoIn, {
    onError: () => {
      alert('운송장이 정상적으로 등록되지 않았습니다.');
    },
  });
}

export function useUpdateReholderOrderDeliveryInfoInMutation(): UseMutationResult<
  UpdateDeliveryInfoIn,
  AxiosError,
  UpdateDeliveryInfoInParams
> {
  return useMutation(delivery.updateReholderOrderDeliveryInfoIn, {
    onError: () => {
      alert('운송장이 정상적으로 등록되지 않았습니다.');
    },
  });
}
