/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * @remarks
 * 함수를 처음 mount 될때 한번만 호출시키는 useEffect hook 입니다
 *
 */
function useInitialEffect(func: EffectCallback, deps: DependencyList): void {
  const didMount = useRef(true);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = false;
  }, deps);
}

export default useInitialEffect;
