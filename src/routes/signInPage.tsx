import { useState } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://acadpulse-backend.onrender.com/api/v1/login',
        formData,
        { withCredentials: true }
      );
      setResponseMessage('Signin successful!');

      if (response.data.status === 'Success') console.log(response.data);
      navigate('/app/dashboard', { replace: true });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setResponseMessage(
          error.response?.data?.message ||
            'An error occurred. Please try again.'
        );
      } else if (error instanceof Error) {
        setResponseMessage('An error occurred. Please try again.');
      } else {
        setResponseMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <>
      <Header />
      <main className="w-full h-screen flex items-center justify-center font-manrope">
        <div className="h-[400px] w-[300px] flex flex-col gap-7 items-center justify-center text-zinc-200">
          <img src="/assets/logo.png" className="w-[40px]" />
          <h1 className="text-lg font-bold text-shadow-neon">
            Sign in to your account
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full text-xs gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex w-full justify-between">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <a
                  href="http://localhost:8080/api/v1/refresh"
                  className="text-pinkish font-semibold"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                onChange={handleInputChange}
                name="password"
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>

            <button className="w-full bg-pinkish rounded-md py-2 hover:bg-red-400 transition-colors duration-150 ease-in-out font-bold">
              Sign In
            </button>
            {responseMessage && <p>{responseMessage}</p>}
          </form>

          <p className="text-xs text-zinc-400">
            No account yet?{' '}
            <a href="/signup" className="text-pinkish pl-[2px]">
              Create an account
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
