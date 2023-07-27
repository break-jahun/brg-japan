import tossPayments, {
  ChangeRefundAccountParams,
  ChangeRefundAccountResponse,
  ChangeReholderRefundAccountParams,
  PaymentCancel,
  ReholderPaymentCancelParams,
  PaymentCancelParams,
} from '@/specifics/grading/modules/api/tossPayments';
import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import * as Sentry from '@sentry/react';

/**
 * @remarks 결제 취소 뮤테이션입니다.
 */
export function usePaymentCancelMutation(): UseMutationResult<
  PaymentCancel,
  AxiosError,
  PaymentCancelParams
> {
  return useMutation(tossPayments.paymentCancel);
}

/**
 * @remarks 결제 취소 뮤테이션입니다.
 */
export function useReholderPaymentCancelMutation(): UseMutationResult<
  PaymentCancel,
  AxiosError,
  ReholderPaymentCancelParams
> {
  return useMutation(tossPayments.reholderPaymentCancel);
}

export function useChangeRefundAccountMutation(): UseMutationResult<
  ChangeRefundAccountResponse,
  AxiosError,
  ChangeRefundAccountParams
> {
  return useMutation(tossPayments.changeRefundAccount, {
    onError: (error) => {
      alert('환불 계좌 정보 수정에 실패하였습니다.');
      Sentry.captureException(error);
    },
  });
}

export function useChangeReholderRefundAccountMutation(): UseMutationResult<
  ChangeRefundAccountResponse,
  AxiosError,
  ChangeReholderRefundAccountParams
> {
  return useMutation(tossPayments.changeReholderRefundAccount, {
    onError: (error) => {
      alert('환불 계좌 정보 수정에 실패하였습니다.');
      Sentry.captureException(error);
    },
  });
}
