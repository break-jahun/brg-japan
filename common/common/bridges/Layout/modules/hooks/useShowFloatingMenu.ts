import { useRouter } from 'next/router';

/**
 * @remarks
 * floating 메뉴를 노출시킬지 말지를 결정해주는 hook입니다.
 */
function useShowFloatingMenu() {
  const { pathname } = useRouter();

  const isHideFloatingMenu =
    pathname === '/agreement' ||
    pathname.startsWith('/changePassword') ||
    pathname === '/dormancy' ||
    pathname.startsWith('/emailVerification') ||
    pathname === '/findPassword' ||
    pathname.startsWith('/grading/submit') ||
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/privacy' ||
    pathname.startsWith('/signupcomplete');

  const showFloatingMenu = !isHideFloatingMenu;

  return showFloatingMenu;
}

export default useShowFloatingMenu;
