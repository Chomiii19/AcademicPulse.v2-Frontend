import { ReactNode, useEffect } from 'react';
import { useAuth } from './authProvider';
import { useNavigate } from 'react-router-dom';

function ProtectedPage({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (user === null || !user)) {
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) return null;
  return <>{children}</>;
}
export default ProtectedPage;
