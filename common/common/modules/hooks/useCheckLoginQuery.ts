import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import * as Sentry from '@sentry/react';
import Cookies from 'js-cookie';
import { Locals, queryKeys } from '@/common/types/common';
import auth from '@/common/modules/api/auth';
import { GetUserResponse } from '@/common/types/user/auth';

/**
 * @remarks 로그인을 했는지 여부를 체크하는 쿼리입니다.
 */
function useCheckLoginQuery() {
  return useQuery<GetUserResponse, AxiosError, boolean>(
    queryKeys.user,
    auth.getUser,
    {
      select: (response) => {
        return !!response.data;
      },
      initialData: Cookies.get(Locals.USER)
        ? {
            code: 0,
            message: 'OK',
            data: JSON.parse(`${Cookies.get(Locals.USER)}`),
          }
        : undefined,
      enabled: !!Cookies.get(Locals.REFRESH_TOKEN),
      refetchOnWindowFocus: true,
      staleTime: 60 * 1000,
    }
  );
}

export default useCheckLoginQuery;
