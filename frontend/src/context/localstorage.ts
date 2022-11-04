export const saveTokenOnLocalStorage = (key: string, data: string) => localStorage
  .setItem(key, JSON.stringify(data));

export const getTokenFromLocalStorage = (key: string) => JSON
  .parse(localStorage.getItem(key) || '');
