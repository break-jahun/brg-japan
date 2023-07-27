import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import auth from '@/common/modules/api/auth';
import { Locals, queryKeys } from '@/common/types/common';
import Cookies from 'js-cookie';
import { setNotExpiredCookie } from '@/common/modules/utils/cookie';

function useKakaoSignUpMutation() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(auth.kakaoLogin, {
    onSuccess: async (data) => {
      // postSignUpEventToGA('Kakao');
      if (data.data.id) {
        // 회원가입 로직을 타고 성공적으로 가입된 경우
        router.push('/signupcomplete/social');
      } else if (data.data.refreshToken) {
        // 회원가입 로직을 탔으나 기존에 가입된 유저인 경우
        setNotExpiredCookie(Locals.REFRESH_TOKEN, data.data.refreshToken);
        // await queryClient.refetchQueries(queryKeys.user, { active: true });
        router.push('/');
      }
    },
    onError: (error: AxiosError) => {
      if (error.response?.data.code === 10304) {
        alert(t('signup/alert/already-exist-email-or-phone'));
      } else if (
        error.response?.data.code === 10307 ||
        error.response?.data.code === 10212
      ) {
        alert(t('signup/alert/withdrawn-member'));
      } else {
        alert(error.response?.data.message);
      }
    },
  });
}

export default useKakaoSignUpMutation;
