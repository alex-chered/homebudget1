const tokenName = 'token';

export const getToken = (): string => {
  return localStorage.getItem(tokenName) || '';
};

export const setToken = (token: string): void => {
  localStorage.setItem(tokenName, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(tokenName);
};
