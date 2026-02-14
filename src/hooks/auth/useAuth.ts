import { TokenService } from '@/services/token.service';

export const useAuth = () => {
  const isLoggedIn = TokenService.isAuthenticated();
  const token = TokenService.getToken();
  return { isLoggedIn, token };
};