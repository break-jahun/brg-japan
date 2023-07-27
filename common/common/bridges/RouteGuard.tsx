/* eslint-disable @typescript-eslint/no-throw-literal */
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Locals } from '@/common/types/common';

interface RouteGuardProps {
  children: JSX.Element;
}

// 권한이 없으면 접근불가능한 페이지들
const PRIVATE_PATHS = ['/account', '/grading/submit', '/reholder/submit'];

// 로그인한 유저가 접근불가능한 페이지들
const USER_NO_ACCESS_PATHS = ['/login', '/signup'];

function RouteGuard({ children }: RouteGuardProps) {
  const router = useRouter();

  const handleRouteChangeStart = useCallback(
    (url: string) => {
      const path = url.split('?')[0];
      const cookie = Cookies.get(Locals.REFRESH_TOKEN);

      const isPrivatePath = PRIVATE_PATHS.some(
        (privatePath) => privatePath === path || path.startsWith(privatePath)
      );

      // 토큰이 없고 권한이 필요한 페이지로 이동 시
      if (!cookie && isPrivatePath) {
        router.events.emit('routeChangeError', '/login', { returnUrl: url });
        throw 'Abort route';
      }
      // 토큰이 있는데 로그인 또는 회원가입 페이지 이동 시
      if (cookie && USER_NO_ACCESS_PATHS.includes(path)) {
        router.events.emit('routeChangeError', '/home');
        throw 'Abort route';
      }
    },
    [router]
  );

  const handleRouteChangeError = useCallback(
    (pathname: string, returnUrl?: { returnUrl: string }) => {
      // 간혹 페이지를 빠르게 브라우저 뒤로 가기를 하거나, 빠르게 앞으로 가기를 했을 때 Error: Route Cancelled 라는 에러가 납니다 (드물어요)
      // 그래서 pathname 의 타입이 string 이 맞을 때만 push 하게 짰습니다.
      if (!(typeof pathname === 'string')) return;
      router.push(
        {
          pathname,
          query: returnUrl,
        },
        pathname
      );
    },
    [router]
  );

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeError', handleRouteChangeError);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [handleRouteChangeStart, handleRouteChangeError, router.events]);
  return children;
}

export default RouteGuard;
