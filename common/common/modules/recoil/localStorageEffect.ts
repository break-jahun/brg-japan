import { AtomEffect } from 'recoil';
import Cookies from 'js-cookie';

/**
 * @remarks
 * 리코일의 상태값을 쿠키에 저장해주는 effect입니다.
 */
const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export default localStorageEffect;
