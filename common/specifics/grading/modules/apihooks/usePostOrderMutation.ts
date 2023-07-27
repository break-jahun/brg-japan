import { Response } from '@/common/types/common';
import {
  postOrder,
  PostOrderBody,
  PostOrderResponse,
} from '@/specifics/grading/modules/api/order';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

const usePostOrderMutation = () => {
  return useMutation<Response<PostOrderResponse>, AxiosError, PostOrderBody>(
    postOrder
  );
};

export default usePostOrderMutation;
