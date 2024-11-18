import Header from '../components/header';

export default function SignInPage() {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex items-center justify-center font-manrope">
        <div className="h-[400px] w-[300px] flex flex-col gap-7 items-center justify-center text-zinc-200">
          <img src="/assets/logo.png" className="w-[40px]" />
          <h1 className="text-lg font-bold">Sign in to your account</h1>

          <form className="flex flex-col w-full text-xs gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex w-full justify-between">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <a href="#" className="text-pinkish font-semibold">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
            </div>

            <button className="w-full bg-pinkish rounded-md py-2 hover:bg-red-400 transition-colors duration-150 ease-in-out font-bold">
              Sign In
            </button>
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
