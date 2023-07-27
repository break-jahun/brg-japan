import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  children: JSX.Element;
}

// 권한이 없으면 접근불가능한 페이지들
const PRIVATE_PATHS = ['/account', '/grading/submit', '/reholder/submit'];

// 로그인한 유저가 접근불가능한 페이지들
const USER_NO_ACCESS_PATHS = ['/login', '/signup'];

const RouteGuardV2 = ({ children }: Props) => {
  const { data: user, isLoading } = useGetUserInfoQuery();
  const router = useRouter();
  const { asPath } = router;

  const isPrivatePath = PRIVATE_PATHS.some(
    (privatePath) => privatePath === asPath || asPath.startsWith(privatePath)
  );

  const isDormancy = user?.mbStatus === 'DORMANCY';
  const shouldRedirectToLogin = !user && isPrivatePath;
  const shouldRedirectToHome = user && USER_NO_ACCESS_PATHS.includes(asPath);

  const showChildren = !shouldRedirectToLogin && !shouldRedirectToHome;

  useEffect(() => {
    if (isDormancy && router.pathname !== '/dormancy') {
      router.push('/dormancy');
    }

    if (!isLoading) {
      if (shouldRedirectToLogin) {
        router.push({ pathname: '/login', query: { returnUrl: asPath } });
      }

      if (shouldRedirectToHome) {
        router.push(String(router.query?.returnUrl ?? '/'));
      }
    }
  }, [
    isDormancy,
    shouldRedirectToLogin,
    shouldRedirectToHome,
    router,
    asPath,
    isLoading,
  ]);

  if (showChildren) {
    return children;
  }

  return null;
};

export default RouteGuardV2;
