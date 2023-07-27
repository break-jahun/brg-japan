import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import auth from '@/common/modules/api/auth';
import {
  FacebookLoginDataType,
  SocialAuthResponseType,
} from '@/common/types/user/auth';

/**
 * @remarks
 * 페이스북 로그인을 하는 mutation 입니다.
 */
function useFacebookLoginMutation(): UseMutationResult<
  SocialAuthResponseType,
  AxiosError,
  FacebookLoginDataType
> {
  return useMutation(auth.facebookLogin);
}

export default useFacebookLoginMutation;
