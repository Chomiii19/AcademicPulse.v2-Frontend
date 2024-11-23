import { ReactNode, useEffect } from 'react';
import { useAuth } from './authProvider';
import { useNavigate } from 'react-router-dom';

function ProtectedPage({ children }: { children: ReactNode }) {
  const user = useAuth();
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || !user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return <>{children}</>;
}
export default ProtectedPage;
