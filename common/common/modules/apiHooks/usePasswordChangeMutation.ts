import auth from '@/common/modules/api/auth';
import { ResponseType } from '@/common/types/common';
import { ChangePasswordFormType } from '@/common/types/user/auth';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

/**
 * @remarks
 * 비밀번호 변경하는 뮤테이션입니다.
 *
 */
export function usePasswordChangeMutation(): UseMutationResult<
  ResponseType,
  AxiosError,
  ChangePasswordFormType
> {
  const router = useRouter();
  const { t } = useTranslation();
  return useMutation(auth.passwordChange, {
    onSuccess: () => {
      alert(t('change-8'));
      router.push(`/login`);
    },
    onError: (error: AxiosError) => {
      if (error.response?.data.code === 10301) {
        alert(t('존재하지않는이메일'));
      } else {
        alert(t('서버에러'));
      }
    },
  });
}
