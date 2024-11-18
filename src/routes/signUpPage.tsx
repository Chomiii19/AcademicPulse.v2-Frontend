import { ArrowRight } from 'lucide-react';
import Header from '../components/header';

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex items-center justify-center font-manrope">
        <div className="h-auto w-[300px] flex flex-col items-center justify-center text-zinc-200 gap-5">
          <img src="/assets/logo.png" className="w-[40px]" />
          <h1 className="text-lg font-bold">Create a new account</h1>
          <form className="w-full text-xs flex flex-col gap-3 font-semibold">
            <div className="w-full flex gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstname">Firstname</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
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
                  className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="extension">Extension</label>
                <input
                  type="text"
                  name="extension"
                  id="extension"
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
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>

            <button className="w-full bg-pinkish rounded-md py-2 hover:bg-red-400 transition-colors duration-150 ease-in-out font-bold mt-2 flex items-center justify-center gap-1">
              Continue <ArrowRight className="w-[13px] h-[13px]" />
            </button>
          </form>

          <p className="text-xs text-zinc-400">
            Already have an account?{' '}
            <a href="/signup" className="text-pinkish pl-[2px]">
              Sign in now
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
