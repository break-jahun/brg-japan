import { AxiosError } from 'axios';
import {
  RequestSignUpFormDefaultType,
  SignUpResponse,
} from '@/common/types/user/auth';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import auth from '@/common/modules/api/auth';

/**
 * @remarks
 * 이메일 회원가입을 하는 mutation 입니다.
 */
function useSignUpMutation(): UseMutationResult<
  SignUpResponse,
  AxiosError,
  RequestSignUpFormDefaultType
> {
  const { t } = useTranslation();

  return useMutation(auth.signUp, {
    onError: (error: AxiosError) => {
      if (error.response?.data.code === 10305) {
        alert(t('이미존재하는이메일'));
      } else if (error.response?.data.code === 10304) {
        alert(t('이미존재하는이메일혹은번호'));
      } else if (error.response?.data.code === 10307) {
        alert(t('이미탈퇴한메일'));
      } else if (error.response?.data.code === 10309) {
        alert(t('약관체크안내'));
      } else {
        alert(error.response?.data.message);
      }
    },
  });
}

export default useSignUpMutation;
