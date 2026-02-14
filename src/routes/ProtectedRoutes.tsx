import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { TokenService } from '@/services/token.service';

export default function ProtectedRoutes() {
  const isAuthenticated = TokenService.isAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}