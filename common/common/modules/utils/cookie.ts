import Cookies from 'js-cookie';

export const setNotExpiredCookie = (key: string, value: string) => {
  Cookies.set(key, value, {
    expires: 365,
  });
};
