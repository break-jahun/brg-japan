import { useRouter } from 'next/router';

/**
 * @remarks
 * 서브메뉴를 노출시킬지 말지를 결정해주는 hook입니다.
 */
function useShowSubmenu() {
  const { pathname } = useRouter();
  return !pathname.startsWith('/account');
}

export default useShowSubmenu;
