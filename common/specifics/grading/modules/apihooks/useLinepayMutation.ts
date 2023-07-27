import { Response } from '@/common/types/common';
import {
  postLinepayConfirm,
  PostLinepayConfirmBody,
  PostLinepayConfirmResponse,
  postLinepayRequest,
  PostLinepayRequestBody,
  PostLinepayRequestResponse,
} from '@/specifics/grading/modules/api/linepay';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useLinepayRequestMutation = () => {
  return useMutation<
    Response<PostLinepayRequestResponse>,
    AxiosError,
    PostLinepayRequestBody
  >(postLinepayRequest);
};

export const useLinepayConfirmMutation = () => {
  return useMutation<
    Response<PostLinepayConfirmResponse>,
    AxiosError,
    PostLinepayConfirmBody
  >(postLinepayConfirm);
};
