import { queryKeys, ResponseType } from '@/common/types/common';
import { MemberAttributes } from '@/common/types/user/member';
import auth from '@/common/modules/api/auth';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import {
  GetUserResponse,
  VerificationCheckBody,
  VerificationCheckResponse,
} from '@/common/types/user/auth';

export function useSendVerificationTokenMutation(): UseMutationResult<
  ResponseType,
  AxiosError,
  string
> {
  const { t } = useTranslation();

  return useMutation(auth.sendVerificationToken, {
    onSuccess: (data) => {
      if (data.code === 0) {
        alert(t('phone/auth/sent-auth-number'));
      } else {
        alert(t('phone/auth/fail-sent-auth-number'));
      }
    },
    onError: (error) => {
      alert(error);
    },
  });
}

export function useVerificationCheckMutation(
  mbPhone: MemberAttributes['mbPhone']
): UseMutationResult<
  VerificationCheckResponse,
  AxiosError,
  VerificationCheckBody
> {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation(auth.verificationCheck, {
    onSuccess: (res) => {
      const { code } = res;
      if (code === 0) {
        alert(t('phone/auth/success-phone-auth'));
        // user 캐시값 변경
        queryClient.setQueryData<GetUserResponse>(
          queryKeys.user,
          (prevData) =>
            ({
              ...prevData,
              data: {
                ...prevData?.data,
                isAuthorized: true,
                mbPhone,
              },
            } as GetUserResponse)
        );
      } else {
        alert(t('phone/auth/fail-phone-auth'));
      }
    },
    onError: () => {
      alert(t('phone/auth/fail-phone-auth'));
    },
  });
}
