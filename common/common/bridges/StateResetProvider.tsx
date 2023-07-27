import { useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import useResetPersistState from '@/common/modules/hooks/useResetPersistState';
import { Locals } from '@/common/types/common';
import { isEmpty } from 'lodash';
import { useResetRecoilState } from 'recoil';
import { reholderCardListState } from '@/common/modules/recoil/reholder';

interface StateResetProviderProps {
  children: JSX.Element;
}

function StateResetProvider({ children }: StateResetProviderProps) {
  const router = useRouter();
  const { pathname } = router;
  const resetPersistState = useResetPersistState();

  useEffect(() => {
    if (
      !pathname.startsWith('/grading/submit') &&
      !pathname.startsWith('/reholder/submit') &&
      !pathname.startsWith('/kakaopay')
    ) {
      const allCookies = Cookies.get();

      let keys = Object.keys(allCookies);

      keys = keys.filter(
        (key) =>
          key !== Locals.ACCESS_TOKEN &&
          key !== Locals.REFRESH_TOKEN &&
          key !== Locals.USER
      );
      if (!isEmpty(keys)) {
        keys.forEach((key) => {
          Cookies.remove(key);
        });
      }
      resetPersistState();
      let localStorageKeys = Object.keys(localStorage);
      localStorageKeys = localStorageKeys.filter((item) => item !== 'language');
      localStorageKeys.forEach((item) => {
        localStorage.removeItem(item);
      });
    }
  }, [pathname, resetPersistState]);

  return children;
}

export default StateResetProvider;
