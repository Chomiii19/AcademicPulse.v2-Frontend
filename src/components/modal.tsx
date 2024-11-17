export default function Modal() {
  return (
    <div className="w-[400px] h-[500px] bg-bg-color fixed inset-0 -translate-x-1/2 -translate-y-1/2 z-1000 top-1/2 left-1/2 border border-zinc-800 rounded-3xl flex justify-center py-8 px-11">
      <Login />
    </div>
  );
}

function Login() {
  return (
    <form className="flex flex-col w-full gap-4 ">
      <div className="w-full flex flex-col items-center gap-2 pb-5">
        <img src="/assets/logo.png" className="w-[50px]" />
        <h1 className="text-zinc-200 font-manrope font-bold text-xl">
          Sign in to your account
        </h1>
      </div>
      <div className="w-full">
        <p className="text-zinc-300 font-manrope pb-2 text-sm">
          School ID Number
        </p>
        <input
          type="text"
          name="idNumber"
          className="w-full text-zinc-400 rounded-[0.3rem] border border-zinc-800 bg-custom-black outline-none focus:border-zinc-500 transition-all duration-300 ease-in-out px-2 py-[2px]"
        />
      </div>
      <div className="w-full">
        <p className="text-zinc-300 font-manrope pb-2 text-sm">Password</p>
        <input
          type="password"
          name="password"
          className="text-zinc-400 w-full rounded-[0.3rem] border border-zinc-800 bg-custom-black outline-none focus:border-zinc-500 transition-all duration-300 ease-in-out px-2 py-[2px]"
        />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="remember" />
          <p className="pl-3 font-normal text-zinc-300 text-sm">Remember me</p>
        </div>
        <a href="#" className="text-pinkish font-manrope pb-1 text-sm pl-2">
          Forgot password?
        </a>
      </div>
      <button className="w-full bg-red-500 text-zinc-200 font-manrope text-sm font-bold rounded-[0.3rem] py-[0.2rem] hover:bg-pinkish duration-300 ease-in-out transition-colors">
        {' '}
        Sign in
      </button>
      <div className="flex w-full justify-center pt-3">
        <p className="text-xs text-zinc-500 font-manrope">No account yet?</p>
        <p className="pl-2 text-xs text-pinkish font-manrope cursor-pointer">
          Create an account
        </p>
      </div>
    </form>
  );
}
