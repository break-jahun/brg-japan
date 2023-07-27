import Link from 'next/link';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { Locals, queryKeys } from '@/common/types/common';
import auth from '@/common/modules/api/auth';
import {
  KakaoLoginDataType,
  SocialAuthResponseType,
} from '@/common/types/user/auth';
import Cookies from 'js-cookie';
import { setNotExpiredCookie } from '@/common/modules/utils/cookie';

/**
 * @remarks
 * 카카오 로그인을 하는 mutation 입니다.
 */
function useKakaoLoginMutation(): UseMutationResult<
  SocialAuthResponseType,
  AxiosError,
  KakaoLoginDataType
> {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(auth.kakaoLogin, {
    onSuccess: async (data) => {
      // postLogInEventToGA('Kakao');
      if (data.data.refreshToken) {
        // 로그인 로직을 타고 기존 유저가 성공적으로 로그인 되었을 경우
        setNotExpiredCookie(Locals.REFRESH_TOKEN, data.data.refreshToken);
        // await queryClient.refetchQueries(queryKeys.user, { active: true });
        router.push(String(router.query?.returnUrl ?? '/home'));
      } else if (data.data.id) {
        // 로그인 로직을 탔으나 기존 유저가 아니어서 회원가입이 된 경우
        router.push('/signupcomplete/social');
      }
    },
    onError: (error: AxiosError) => {
      if (
        error.response?.data.code === 10307 ||
        error.response?.data.code === 10212
      ) {
        alert(t('signup/alert/withdrawn-member'));
      } else {
        alert(t('login/alert/login-failed'));
      }
    },
  });
}

export default useKakaoLoginMutation;
