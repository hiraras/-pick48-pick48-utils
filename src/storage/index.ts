import { Obj } from '@pick48/pick48-utils/type';

export const getSessionItem = (key: string) => {
  return sessionStorage.getItem(key);
};

export const setSessionItem = (key: string, val: string) => {
  sessionStorage.setItem(key, val);
};

export const removeSessionItem = (key: string) => {
  sessionStorage.removeItem(key);
};

export const getLocalItem = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalItem = (key: string, val: string) => {
  localStorage.setItem(key, val);
};

export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key);
};

export const parseCookie = (cookie = document.cookie): Obj => {
  const items = cookie.split(';');
  return items.reduce((prev, item) => {
    const [key, value] = item.split('=');
    return { ...prev, [key.trim()]: value };
  }, {});
};

export const setCookie = (key: string, value: string, validTime: number) => {
  const expires = new Date(Date.now() + validTime).toUTCString();
  const cookie = `${key}=${value}; expires=${expires};`;
  document.cookie = cookie;
};
