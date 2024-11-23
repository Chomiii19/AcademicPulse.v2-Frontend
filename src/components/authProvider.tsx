import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import LoadingPage from '../routes/loadingPage';

type User = {
  id: string;
  role: string;
  isSignedIn: boolean;
};

const AuthContext = createContext<User | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/v1/app/protected-page',
        {
          withCredentials: true,
        }
      );
      console.log(response.data); // Debugging the response
      if (response.data.status === 'Success') {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <LoadingPage />;

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context);
  return context;
};

export { AuthProvider, useAuth };
