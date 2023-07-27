import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import auth from '@/common/modules/api/auth';
import { GetUserResponse } from '@/common/types/user/auth';
import { useTranslation } from 'react-i18next';

/**
 * @remarks
 * 가입 후 이메일 인증 체크하는 뮤테이션입니다.
 *
 */
function useEmailVerificationMutation(): UseMutationResult<
  GetUserResponse,
  AxiosError,
  {
    code: string;
    email: string;
  }
> {
  const router = useRouter();
  const { t } = useTranslation();
  return useMutation(auth.verifyEmailCode, {
    onSuccess: (data) => {
      if (data.data?.mbStatus === 'NORMAL') {
        alert(t('email-verification/email-authentication-complete'));
        router.push('/login');
      } else {
        alert(t('email-verification/email-authentication-fail'));
      }
    },
    onError: (error) => {
      alert(error);
    },
  });
}

export default useEmailVerificationMutation;
