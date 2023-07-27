import gradingOrder from '@/common/modules/api/gradingOrder';
import { queryKeys } from '@/common/types/common';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import {
  GetTemporaryStorage,
  SaveTemporaryStorage,
} from '@/common/types/order';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useSavedGradingOrderQuery = () => {
  return useQuery<
    GetTemporaryStorage,
    AxiosError,
    { count: number; rows: GradingOrderAttributes[] }
  >(queryKeys.savedGradingOrder, gradingOrder.getSavedGradingOrder, {
    select: (res) => {
      return res.data;
    },
    refetchOnMount: false,
  });
};

export const useSaveGradingOrderMutation = () => {
  const { t } = useTranslation();

  return useMutation<SaveTemporaryStorage, AxiosError, GradingOrderAttributes>(
    gradingOrder.saveGradingOrder,
    {
      onSuccess: () => {
        alert(t('temporary-storage/text-1'));
      },
      onError: (error) => {
        if (error.response?.data.code === 10517) {
          alert(t('grading/submit/order-already-paid'));
        } else {
          alert(error);
        }
      },
    }
  );
};

export const useDeleteSavedGradingOrderMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation(gradingOrder.deleteTemporaryStorage, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.savedGradingOrder);
    },
    onError: () => {
      alert(t('grading/submit/failed-to-delete-order'));
    },
  });
};
