import useFacebookLoginMutation from '@/common/modules/apiHooks/useFacebookLoginMutation';
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from '@/common/modules/hooks/useFacebookLogin';
import { setNotExpiredCookie } from '@/common/modules/utils/cookie';
import { Locals, queryKeys } from '@/common/types/common';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

const useFacebookSignUp = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useFacebookLoginMutation();

  const onSuccessFacebookSignUp = (
    res: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    mutate(
      {
        res,
        keepLogin: false,
      },
      {
        onSuccess: async (data) => {
          if (data.data.id) {
            router.replace('/login');
          } else if (data.data.refreshToken) {
            setNotExpiredCookie(Locals.REFRESH_TOKEN, data.data.refreshToken);
            // await queryClient.refetchQueries(queryKeys.user, {
            //   active: true,
            // });
            router.push('/');
          }
        },
        onError: (error) => {
          if (error.response?.data.code === 10305) {
            alert(t('이미사용중인아이디안내'));
          } else if (
            error.response?.data.code === 10307 ||
            error.response?.data.code === 10212
          ) {
            alert(t('이미탈퇴한아이디안내'));
          } else if (error.response?.data.code === 10308) {
            alert(t('이메일미설정페이스북계정안내'));
          } else {
            alert(error.response?.data.message);
          }
        },
      }
    );
  };

  const onFailFacebookSignUp = () => alert(t('페이스북연동실패'));

  return { onSuccessFacebookSignUp, onFailFacebookSignUp };
};

export default useFacebookSignUp;
