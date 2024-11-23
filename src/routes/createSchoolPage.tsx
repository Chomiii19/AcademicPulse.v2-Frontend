import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/header';

export default function SignUpPage() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Header />
      <main className="w-full h-screen flex items-center justify-center font-manrope">
        <div className="h-[500px] w-[300px] flex flex-row items-center justify-center text-zinc-200 gap-5 overflow-hidden relative">
          <SchoolPrompt activePage={activePage} setActivePage={setActivePage} />
          <SchoolForm activePage={activePage} setActivePage={setActivePage} />
        </div>
      </main>
    </>
  );
}

function SchoolPrompt({
  activePage,
}: // setActivePage,
{
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div
        className={`h-auto w-[300px] flex flex-col items-center justify-center absolute gap-5 transition-transform duration-300 ease-in-out ${
          activePage === 1 ? 'translate-x-0' : '-translate-x-[150%]'
        }`}
      >
        <img src="/assets/logo.png" className="w-[40px]" />
        <h1 className="text-lg font-bold text-shadow-neon text-center">
          Does your school already use AcadPulse?
        </h1>
        <div className="h-28 flex flex-col justify-center gap-3 py-28">
          <button className="bg-custom-black border border-zinc-800 px-3.5 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:border-zinc-300 transition-colors duration-200 ease-in-out">
            Yes, our school is already registered.
          </button>
          <button className="bg-custom-black border border-zinc-800 px-3.5 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:border-zinc-300 transition-colors duration-200 ease-in-out">
            No, I would like to register our school.
          </button>
        </div>
      </div>
    </>
  );
}

function SchoolForm({
  activePage,
}: // setActivePage,
{
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div
        className={`h-auto w-[300px] flex flex-col items-center justify-center absolute gap-5 transition-transform duration-300 ease-in-out ${
          activePage === 1 ? 'translate-x-0' : '-translate-x-[150%]'
        }`}
      >
        <img src="/assets/logo.png" className="w-[40px]" />
        <h1 className="text-lg font-bold text-shadow-neon">
          Register your school
        </h1>

        <form className="w-full text-xs flex flex-col gap-3 font-semibold">
          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber">School Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="schoolId"
                id="schoolId"
                className="bg-custom-black border border-zinc-800 rounded-md w-full h-[26px] px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
              />
              <em className="text-zinc-400">
                For e.g: 'APUM1996' stands for AcadPulse University - Manila
                (1996)
              </em>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber">Address</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber">Email address</label>
            <input
              type="email"
              name="name"
              id="name"
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <input type="file" className="bg-pinkish" />

          <button className="w-full bg-pinkish rounded-md py-2 hover:bg-red-400 transition-colors duration-150 ease-in-out font-bold mt-2 flex items-center justify-center gap-1">
            Continue <ArrowRight className="w-[13px] h-[13px]" />
          </button>
        </form>
      </div>
    </>
  );
}
