// src/services/token.service.ts
export const TokenService = {
  getToken: (): string | null => {
    return localStorage.getItem('authToken');
  },
  setToken: (token: string): void => {
    localStorage.setItem('authToken', token);
  },
  removeToken: (): void => {
    localStorage.removeItem('authToken');
  },
  getUserData: () => {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  },
  setUserData: (user: any): void => {
    localStorage.setItem('userData', JSON.stringify(user));
  },
  removeUserData: (): void => {
    localStorage.removeItem('userData');
  },
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken');
  },
  clearAll: (): void => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  },
};