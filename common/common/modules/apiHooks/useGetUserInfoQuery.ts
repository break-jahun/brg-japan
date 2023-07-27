import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import * as Sentry from '@sentry/react';
import Cookies from 'js-cookie';
import { Locals, queryKeys } from '@/common/types/common';
import auth from '@/common/modules/api/auth';
import { MemberAttributes } from '@/common/types/user/member';
import { GetUserResponse } from '@/common/types/user/auth';
import { useRouter } from 'next/router';
import { setNotExpiredCookie } from '@/common/modules/utils/cookie';

function useGetUserInfoQuery() {
  const router = useRouter();
  const isExistRefreshToken = !!Cookies.get(Locals.REFRESH_TOKEN);
  const user = Cookies.get(Locals.USER);
  const initialData = user
    ? {
        code: 0,
        message: 'OK',
        data: JSON.parse(`${Cookies.get(Locals.USER)}`),
      }
    : undefined;

  return useQuery<GetUserResponse, AxiosError, MemberAttributes>(
    queryKeys.user,
    auth.getUser,
    {
      onSuccess: (data) => {
        if (data) {
          setNotExpiredCookie(Locals.USER, JSON.stringify(data));
        }

        const isDormancy = data.mbStatus === 'DORMANCY'; // 휴면회원인지 여부

        if (isDormancy) {
          router.push('/dormancy');
        }
      },
      onError: (error) => {
        Sentry.captureException(error);
      },
      select: (response) => {
        return response.data;
      },
      initialData,
      enabled: isExistRefreshToken,
      refetchOnMount: true,
      staleTime: 60 * 1000,
    }
  );
}

export default useGetUserInfoQuery;
