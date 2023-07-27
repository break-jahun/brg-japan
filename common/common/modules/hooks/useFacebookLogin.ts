import useFacebookLoginMutation from '@/common/modules/apiHooks/useFacebookLoginMutation';
import { setNotExpiredCookie } from '@/common/modules/utils/cookie';
import { Locals, queryKeys } from '@/common/types/common';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

export interface ReactFacebookLoginInfo {
  // id: string;
  userID: string;
  accessToken: string;
  name?: string | undefined;
  email?: string | undefined;
  picture?:
    | {
        data: {
          height?: number | undefined;
          is_silhouette?: boolean | undefined;
          url?: string | undefined;
          width?: number | undefined;
        };
      }
    | undefined;
}

export interface ReactFacebookFailureResponse {
  status?: string | undefined;
}

function useFacebookLogin() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useFacebookLoginMutation();

  const onSuccessFacebookLogin = (res: ReactFacebookLoginInfo) => {
    let isKeepLogin = false;
    if (window.confirm(t('SNS계정유지확인'))) {
      isKeepLogin = true;
    }
    mutate(
      {
        res,
        keepLogin: isKeepLogin,
      },
      {
        onSuccess: async (data) => {
          if (data.data.refreshToken) {
            // 로그인 로직을 타고 기존 유저가 성공적으로 로그인 되었을 경우
            setNotExpiredCookie(Locals.REFRESH_TOKEN, data.data.refreshToken);
            // await queryClient.refetchQueries(queryKeys.user, { active: true });
            router.push(String(router.query?.returnUrl ?? '/'));
          } else if (data.data.id) {
            // 로그인 로직을 탔으나 기존 유저가 아니어서 회원가입이 된 경우
            router.push('/login');
          }
        },
        onError: (error) => {
          if (
            error.response?.data.code === 10307 ||
            error.response?.data.code === 10212
          ) {
            alert(t('이미탈퇴한메일'));
          } else {
            alert(t('로그인실패안내'));
          }
        },
      }
    );
  };

  const onFailFacebookLogin = () => alert(t('페이스북연동실패'));

  return {
    onSuccessFacebookLogin,
    onFailFacebookLogin,
  };
}

export default useFacebookLogin;
