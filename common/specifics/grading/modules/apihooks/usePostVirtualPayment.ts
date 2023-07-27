import { Response } from '@/common/types/common';
import {
  postVirtualPayment,
  PostVirtualPaymentBody,
  PostVirtualPaymentResponse,
} from '@/specifics/grading/modules/api/virtualPayment';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

const usePostVirtualPayment = () => {
  return useMutation<
    Response<PostVirtualPaymentResponse>,
    AxiosError,
    PostVirtualPaymentBody
  >(postVirtualPayment);
};

export default usePostVirtualPayment;
