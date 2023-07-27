import { useRouter } from 'next/router';

/**
 * @remarks
 * footer를 노출시킬지 말지를 결정해주는 hook입니다.
 */
function useShowFooter() {
  const { pathname } = useRouter();

  const isHideFooter =
    pathname.startsWith('/account') ||
    pathname === '/agreement' ||
    pathname === '/privacy' ||
    pathname.startsWith('/grading/submit') ||
    pathname.startsWith('/grading/orderComplete') ||
    pathname.startsWith('/reholder/submit') ||
    pathname.startsWith('/reholder/orderComplete');

  const showFooter = !isHideFooter;

  return showFooter;
}

export default useShowFooter;
