import { AtomEffect } from 'recoil';
import historyEffect from './historyEffect';
import localStorageEffect from './localStorageEffect';

interface Params {
  persist?: boolean;
  name: string;
}

type CommonEffects = <T>(params: Params) => ReadonlyArray<AtomEffect<T>>;

/**
 * @remarks
 * atom에 공통적으로 들어갈 effects 입니다.
 */
const commonEffects: CommonEffects = <T>({ persist = false, name = '' }) => {
  if (persist) {
    return [historyEffect<T>(name), localStorageEffect<T>(name)];
  }
  return [historyEffect(name)];
};

export default commonEffects;
