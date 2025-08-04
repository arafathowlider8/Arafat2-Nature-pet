import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const ADMIN_EMAIL = 'arafathowlider5@gmail.com';

export default function PrivateRoute({ children, adminOnly }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.email !== ADMIN_EMAIL) return <Navigate to="/customer" />;
  return children;
}
