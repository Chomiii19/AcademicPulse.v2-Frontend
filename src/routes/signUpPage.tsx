import { ArrowRight, MailQuestion, Send } from 'lucide-react';
import Header from '../components/header';
import { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Header />
      <main className="w-full h-screen flex items-center justify-center font-manrope">
        <div className="h-[500px] w-[300px] flex flex-row items-center justify-center text-zinc-200 gap-5 overflow-hidden relative">
          <SignUpForm activePage={activePage} setActivePage={setActivePage} />
          <VerifyEmail activePage={activePage} />
        </div>
      </main>
    </>
  );
}

function VerifyEmail({ activePage }: { activePage: number }) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center text-zinc-200 gap-5 h-auto w-[300px] absolute transition-transform duration-300 ease-in-out ${
          activePage === 2 ? 'translate-x-0' : 'translate-x-[150%]'
        }`}
      >
        <img src="/assets/logo.png" className="w-[40px]" />
        <h1 className="text-lg font-bold text-shadow-neon">
          Verify your email address
        </h1>
        <div className="flex items-center justify-center bg-pinkish rounded-full h-[150px] w-[150px] shadow-lg shadow-black">
          <span className="flex">
            <MailQuestion className="w-[70px] h-[70px]" /> <Send />
          </span>
        </div>
        <p className="text-center text-zinc-400 text-sm">
          To verify your email address, tap the buton in the email we sent to
          you.
        </p>

        <button className="bg-pinkish w-full py-2 font-bold rounded-lg hover:bg-red-400 hover:-translate-y-1 transition-all duration-150 ease-in">
          Resend Email
        </button>
      </div>
    </>
  );
}

function SignUpForm({
  activePage,
  setActivePage,
}: {
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const [formData, setFormData] = useState({
    surname: '',
    firstname: '',
    middlename: '',
    extension: '',
    email: '',
    phoneNumber: '',
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
      await axios.post(
        'https://acadpulse-backend.onrender.com/api/v1/signup',
        formData
      );
      setResponseMessage('Signup successful!');

      setTimeout(() => setActivePage(activePage + 1), 2000);
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
      <div
        className={`h-auto w-[300px] flex flex-col items-center justify-center absolute gap-5 transition-transform duration-300 ease-in-out ${
          activePage === 1 ? 'translate-x-0' : '-translate-x-[150%]'
        }`}
      >
        <img src="/assets/logo.png" className="w-[40px]" />
        <h1 className="text-lg font-bold text-shadow-neon">
          Create a new account
        </h1>
        <form
          className="w-full text-xs flex flex-col gap-3 font-semibold"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="surname"
                onChange={handleInputChange}
                // required
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={handleInputChange}
                // required
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full flex gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="middlename">Middlename</label>
              <input
                type="text"
                name="middlename"
                id="middlename"
                onChange={handleInputChange}
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="extension">Extension</label>
              <input
                type="text"
                name="extension"
                id="extension"
                onChange={handleInputChange}
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
              // required
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleInputChange}
              // required
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
              // required
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <button className="w-full bg-pinkish rounded-md py-2 hover:bg-red-400 transition-colors duration-150 ease-in-out font-bold mt-2 flex items-center justify-center gap-1">
            Continue <ArrowRight className="w-[13px] h-[13px]" />
          </button>
          {responseMessage && <p>{responseMessage}</p>}
        </form>

        <p className="text-xs text-zinc-400">
          Already have an account?{' '}
          <a href="/signin" className="text-pinkish pl-[2px]">
            Sign in now
          </a>
        </p>
      </div>
    </>
  );
}
