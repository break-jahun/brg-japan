import {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from '@/common/modules/hooks/useFacebookLogin';
import { ResponseType } from '@/common/types/common';
import { MbStatus, MemberAttributes } from '@/common/types/user/member';
import { AxiosError } from 'axios';
import { UseMutationResult } from '@tanstack/react-query';

/* ******************************************************************************* */
/* ************************************* 로그인 ************************************ */
/* ******************************************************************************* */

export interface LoginFormType {
  email: string;
  password: string;
  keepLogin: boolean;
}

/**
 * @remark
 * login useMutation Result Type
 */
export type UseLoginMutationResult = UseMutationResult<
  LoginResponse,
  AxiosError,
  LoginFormType
>;

/* ******************************************************************************* */
/* ************************************ 회원가입 *********************************** */
/* ******************************************************************************* */

/**
 * @remark
 * [korea🇰🇷] email signup default form type
 */
export interface SignUpFormDefaultType {
  mbName: string;
  mbEmail: string;
  mbPw: string;
  mbPwConfirm: string;
  isAgreedOver14: boolean;
  checkAll: boolean | undefined;
  checkAgreement: boolean;
  checkPrivacy: boolean;
}

/**
 * @remark
 * [taiwan🇹🇼] email signup taiwan form type
 */
export interface TwSignUpFormType extends SignUpFormDefaultType {
  isAgreeAdvertisement: boolean | undefined;
  agreeWithOverseasTransfer: boolean;
}

/**
 * @remark
 * [korea🇰🇷] signup request form type
 */
export interface RequestSignUpFormDefaultType
  extends Pick<
    SignUpFormDefaultType,
    'mbName' | 'mbEmail' | 'mbPw' | 'isAgreedOver14'
  > {}

/**
 * @remark
 * [taiwan🇹🇼] signup request form type
 */
export interface RequestTwSignUpFormType
  extends Pick<
    TwSignUpFormType,
    'mbName' | 'mbEmail' | 'mbPw' | 'isAgreedOver14' | 'isAgreeAdvertisement'
  > {}

/* ******************************************************************************* */
/* ******************************************************************************* */
/* ******************************************************************************* */

export interface ChangePasswordFormType {
  code: string;
  email: string;
  password: string;
}

export interface GetUserResponse extends ResponseType {
  data: MemberAttributes;
}

export interface LoginResponse extends ResponseType {
  data: { refreshToken: string };
}

export interface SignUpResponse extends ResponseType {
  data: { id: number };
}

export interface VerificationCheckBody {
  phoneNumber: string;
  code: string;
}

export interface VerificationCheckResponse extends ResponseType {
  data?: number[];
}

//  --- kakao
interface Profile {
  nickname: string;
  profile_image: string;
  thumbnail_image_url: string;
  profile_needs_agreement?: boolean;
}

interface KakaoAccount {
  profile: Profile;
  email: string;
  age_range: string;
  birthday: string;
  birthyear: string;
  gender: 'female' | 'male';
  phone_number: string;
  ci: string;
}

interface UserProfile {
  id: number;
  kakao_account: KakaoAccount;
  synched_at: string;
  connected_at: string;
  properties: Profile;
}

interface KaKaoLoginResponse {
  token_type: string;
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}
export interface KakaoLoginResponseType {
  response: KaKaoLoginResponse;
  profile?: UserProfile;
}

export interface KakaoLoginDataType extends KakaoLoginResponseType {
  keepLogin: boolean;
}

// --- facebook
export interface FacebookLoginDataType {
  res: ReactFacebookLoginInfo | ReactFacebookFailureResponse;
  keepLogin: boolean;
}

export interface FacebookOauthType extends ReactFacebookLoginInfo {
  keepLogin: boolean;
}

// --- line

export type LoginActionType = 'signup' | 'login';

export interface PostLineSignUpBodyType {
  code: string;
  state: string;
}

export interface PostLineLoginBodyType {
  code: string;
  state: string;
  keepLogin: boolean;
}

export interface PostLineOauthBodyType {
  code: string;
  state: string;
  keepLogin?: boolean;
}

export interface LineProfileType {
  sub: string; // userId
  email?: string;
  name: string;
  picture?: string;
}

export interface LineSignUpResponseResponse extends ResponseType {
  data: {
    id?: string;
  };
}

export interface LineLoginResponseResponse extends ResponseType {
  data: {
    refreshToken: string;
  };
}

export interface SocialAuthResponseType extends ResponseType {
  data: {
    id?: number;
    refreshToken?: string;
  };
}

export interface CheckMemberStatusResponseType extends ResponseType {
  data: MbStatus;
}
