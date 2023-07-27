import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import {
  FacebookLoginDataType,
  SocialAuthResponseType,
} from '@/common/types/user/auth';
import auth from '@/common/modules/api/auth';

function useFacebookSignUpMutation(): UseMutationResult<
  SocialAuthResponseType,
  AxiosError,
  FacebookLoginDataType
> {
  const { t } = useTranslation();
  return useMutation(auth.facebookLogin, {
    onError: (error: AxiosError) => {
      if (error.response?.data.code === 10305) {
        alert(t('signup/alert/already-exist-email-or-phone'));
      } else if (
        error.response?.data.code === 10307 ||
        error.response?.data.code === 10212
      ) {
        alert(t('signup/alert/withdrawn-member'));
      } else if (error.response?.data.code === 10308) {
        alert(t('login/error/facebook/not-exist-email'));
      } else {
        alert(error.response?.data.message);
      }
    },
  });
}

export default useFacebookSignUpMutation;
