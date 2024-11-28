import { ReactNode, useEffect } from 'react';
import { useAuth } from './authProvider';
import { useNavigate, useLocation } from 'react-router-dom';

function ProtectedPage({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user === null || !user) {
      navigate('/', { replace: true });
    } else if (user.isVerified === false) {
      navigate('/app/verification-status', { replace: true });
    } else if (
      user.schoolName === null &&
      location.pathname !== '/register-school'
    ) {
      navigate('/app/school-status', { replace: true });
    }
  }, [user, navigate, location.pathname]);

  return <>{children}</>;
}

export default ProtectedPage;
