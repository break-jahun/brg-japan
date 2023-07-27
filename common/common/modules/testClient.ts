/* eslint-disable consistent-return */
import Router from 'next/router';
import axios, { AxiosResponse } from 'axios';
import * as Sentry from '@sentry/react';
import { Locals } from '@/common/types/common';
import Cookies from 'js-cookie';
import client, {
  CustomAxiosError,
  renewClient,
  RequestObject,
} from '@/common/modules/client';

const testClient = axios.create({
  baseURL: 'https://gate.break.co.kr/brg',
  withCredentials: true,
  headers: {
    'x-country-code': process.env.NEXT_PUBLIC_API_X_COUNTRY_CODE as string,
  },
});

let failedRequestList: RequestObject[] = [];
let isRefreshing = false;

const onFulfilled = (response: AxiosResponse) => response;

const onRejected = (error: CustomAxiosError) => {
  const { config, response } = error;
  const refreshToken = Cookies.get(Locals.REFRESH_TOKEN);

  if (config) {
    if (response?.status === 401 && refreshToken && !config.retry) {
      config.retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        renewClient
          .post('/api/login/renew', {
            refreshToken,
          })
          .then(() => {
            failedRequestList.forEach((request) => {
              request.resolve();
            });
            failedRequestList = [];
          })
          .catch((renewError) => {
            failedRequestList.forEach((request) => {
              request.reject();
            });
            failedRequestList = [];

            Sentry.captureException(error, { extra: renewError.response });

            alert('로그인 세션이 만료되었습니다.');
            Cookies.remove(Locals.REFRESH_TOKEN);
            Cookies.remove(Locals.USER);
            window.location.href = '/login';
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      return new Promise((resolve, reject) => {
        failedRequestList.push({
          resolve: () => {
            resolve(testClient.request(config));
          },
          reject: () => {
            reject(error);
          },
        });
      });
    }
    if (response?.status === 401) {
      // alert('로그인 세션이 만료되었습니다.');
      if (window.location.pathname === '/') {
        // home의 경우 로그인 창으로 이동시킬 필요가 없어서 바로 로그아웃 처리
        client.post('/api/logout');
        window.location.reload();
        return;
      }
      window.location.href = '/login';
    } else if (response?.status === 500) {
      console.error('internal server error');
    } else if (response?.status === 404) {
      // window.location.href = '/notfound';
    } else if (response?.status === 400) {
      if (response?.data?.message === 'AUTH_INVALID_TOKEN') {
        // access token 이 있지만 유효하지 않은 토큰일 경우 (이런 경우는 거의 드뭄)
        /**
         * @todo
         * 로그아웃을 하게 될 경우 access token 값을 가지고 인증과정을 거치다보니 access token 이 잘못된 토큰일 경우
         * 다시 400에러를 리턴시켜
         * 무한루프가 발생합니다. 로그아웃 api에서 인증과정 없이 쿠키값만 삭제해주면 해결됩니다.
         */
        client.post('/api/logout');
        Router.push('/login');
      }
    }

    console.error(`Unknown Error: ${error}`);
    Sentry.captureException(error, { extra: response?.data });
  }
  return Promise.reject(error);
};

testClient.interceptors.response.use(onFulfilled, onRejected);
export default testClient;
