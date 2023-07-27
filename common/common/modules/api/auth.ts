import client from '@/common/modules/client';
import clientNew from '@/common/modules/clientNew';
import {
  GetUserResponse,
  LoginFormType,
  LoginResponse,
  SignUpResponse,
  VerificationCheckBody,
  VerificationCheckResponse,
  ChangePasswordFormType,
  FacebookLoginDataType,
  SocialAuthResponseType,
  KakaoLoginDataType,
  CheckMemberStatusResponseType,
  FacebookOauthType,
} from '@/common/types/user/auth';
import { ResponseType } from '@/common/types/common';
import { MbStatus } from '@/common/types/user/member';

/**
 * @remarks
 * 사용자의 정보를 불러오는 함수입니다.
 *
 * @returns 사용자의 정보
 */
async function getUser(): Promise<GetUserResponse> {
  const { data } = await client.get<GetUserResponse>('/api/login');
  return data;
}

/**
 * @remarks
 * 로그인을 하는 함수입니다.
 *
 * @returns refreshToken
 */
async function login(body: LoginFormType): Promise<LoginResponse> {
  const { data } = await client.post<LoginResponse>('/api/login', body);
  return data;
}

/**
 * @remarks
 * 회원가입을 하는 함수입니다.
 *
 * @returns id
 */

async function signUp<T>(body: T): Promise<SignUpResponse> {
  const { data } = await client.post<SignUpResponse>(
    '/brg/api/member/signup',
    body
  );
  return data;
}

/**
 * @remarks
 * 로그아웃을 하는 함수입니다.
 */
async function logout(): Promise<ResponseType> {
  const { data } = await client.post('/api/logout');
  return data;
}

async function sendVerificationToken(
  phoneNumber: string
): Promise<ResponseType> {
  const { data } = await client.post<ResponseType>(
    '/api/sendVerificationToken',
    { phoneNumber }
  );
  return data;
}

async function verificationCheck(
  body: VerificationCheckBody
): Promise<VerificationCheckResponse> {
  const { data } = await client.post<VerificationCheckResponse>(
    '/api/verificationCheck',
    body
  );
  return data;
}

/**
 * @remarks
 *  유저 이메일로 비밀번호 변경 링크를 보내주는 API 입니다.
 */
async function sendPasswordChangeLink(email: string): Promise<GetUserResponse> {
  const { data } = await clientNew.post<GetUserResponse>(
    '/api/auth/send-password-change-email',
    { email }
  );
  return data;
}

/**
 * @remarks
 * 비밀번호 변경하는 함수 입니다.
 *
 * @returns code, message
 */
async function passwordChange(
  body: ChangePasswordFormType
): Promise<ResponseType> {
  const { data } = await clientNew.patch<ResponseType>(
    '/api/auth/password-by-mail',
    body
  );
  return data;
}

/**
 * @remarks
 * 페이스북 소셜 회원가입 API
 *
 * @returns id
 */
async function facebookSignUp(
  body: FacebookLoginDataType
): Promise<SocialAuthResponseType> {
  const { data } = await client.post<SocialAuthResponseType>(
    '/api/facebook/oauth',
    body
  );
  return data;
}

/**
 * @remarks
 * 페이스북 소셜 로그인 API
 *
 * @returns refreshToken
 */
async function facebookLogin(
  body: FacebookLoginDataType
): Promise<SocialAuthResponseType> {
  const { data } = await client.post<SocialAuthResponseType>(
    '/api/facebook/oauth',
    body
  );
  return data;
}

async function facebookAuth(body: FacebookOauthType) {
  const { data } = await clientNew.post<SocialAuthResponseType>(
    '/api/oauth/facebook',
    body
  );

  return data;
}

/**
 * @remarks
 * 카카오 소셜 로그인/회원가입을 하는 함수입니다.
 *
 * @returns 기존 유저인 경우 refreshToken, 새로 가입할 경우 id
 */
async function kakaoLogin(
  body: KakaoLoginDataType
): Promise<SocialAuthResponseType> {
  const { data } = await clientNew.post<SocialAuthResponseType>(
    '/api/oauth/kakao',
    body
  );
  return data;
}

/**
 * @remarks
 * 이메일 인증을 체크하는 함수 입니다.
 *
 */
async function verifyEmailCode({
  code,
  email,
}: {
  code: string;
  email: string;
}): Promise<GetUserResponse> {
  const { data } = await client.post<GetUserResponse>('/api/verifyEmailCode', {
    code,
    email,
  });
  return data;
}

/**
 * @remarks
 * 회원가입 성공 후 소셜아닌 일반회원일 때 status를 체크하는 함수입니다.
 *
 * @returns member status 값
 */
async function checkMemberStatus(
  email: string
): Promise<CheckMemberStatusResponseType> {
  const { data } = await client.post<CheckMemberStatusResponseType>(
    '/api/member/checkMbStatus',
    { email }
  );
  return data;
}

export interface PostRestoreDormancyResponse {
  code: number;
  message:
    | 'OK'
    | 'NOT_DORMANT_ACCOUNT'
    | 'AUTH_INVALID_TOKEN'
    | 'AUTH_NEED_LOGIN';
  data: {
    mbStatus: MbStatus;
  };
}

async function postDormancy() {
  const { data } = await client.post<PostRestoreDormancyResponse>(
    '/api/member/restore-dormancy'
  );
  return data;
}

export default {
  getUser,
  login,
  signUp,
  logout,
  sendVerificationToken,
  verificationCheck,
  sendPasswordChangeLink,
  passwordChange,
  facebookSignUp,
  facebookLogin,
  facebookAuth,
  kakaoLogin,
  verifyEmailCode,
  checkMemberStatus,
  postDormancy,
};
