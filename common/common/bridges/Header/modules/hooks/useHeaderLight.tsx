import { useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';

interface useHeaderLightProps {}

/**
 * @remarks
 * 스크롤을 내렸을때 헤더의 색을 밝게 해주기 위한 boolean 값을 만들어주는 hook입니다.
 * 여러군데 재사용이 되어서 hook으로 분리했습니다.
 */
function useHeaderLight() {
  const { pathname } = useRouter();
  let isHeaderLight = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  if (
    pathname !== '/' &&
    pathname !== '/login' &&
    pathname !== '/signup' &&
    pathname !== '/findpassword' &&
    !pathname.startsWith('/changePassword')
  ) {
    isHeaderLight = true;
  }
  return isHeaderLight;
}

export default useHeaderLight;
