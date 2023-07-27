import { useMutation } from '@tanstack/react-query';
import auth from '@/common/modules/api/auth';
import {
  FacebookOauthType,
  SocialAuthResponseType,
} from '@/common/types/user/auth';
import { AxiosError } from 'axios';

const useFacebookOauthMutation = () => {
  // 로그인 or 회원가입 서버에서 내부 분기
  return useMutation<SocialAuthResponseType, AxiosError, FacebookOauthType>(
    auth.facebookAuth
  );
};

export default useFacebookOauthMutation;
