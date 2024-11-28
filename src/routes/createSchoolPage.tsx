import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/header';

export default function RegisterSchoolPage() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Header />
      <main className="w-full h-screen flex items-center justify-center font-manrope">
        <div className="h-[500px] w-[300px] flex flex-row items-center justify-center text-zinc-200 gap-5 overflow-hidden relative">
          <SchoolPrompt activePage={activePage} setActivePage={setActivePage} />
          <SchoolForm activePage={activePage} setActivePage={setActivePage} />
          <SchoolVerification activePage={activePage} />
        </div>
      </main>
    </>
  );
}

function SchoolPrompt({
  activePage,
  setActivePage,
}: {
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
          <button
            onClick={() => setActivePage(2)}
            className="bg-custom-black border border-zinc-800 px-3.5 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:border-zinc-300 transition-colors duration-200 ease-in-out"
          >
            No, I would like to register our school.
          </button>
        </div>
      </div>
    </>
  );
}

function SchoolForm({
  activePage,
  setActivePage,
}: {
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [formData, setFormData] = useState({
    schoolId: '',
    name: '',
    address: '',
    email: '',
  });

  // const [responseMessage, setResponseMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const registerSchoolHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://acadpulse-backend.onrender.com/api/v1/app/register-school/submit',
        formData,
        { withCredentials: true }
      );

      if (response.data.status === 'Success')
        setTimeout(() => {
          setActivePage(3);
        }, 3000);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className={`h-auto w-[300px] flex flex-col items-center justify-center absolute gap-5 transition-transform duration-300 ease-in-out ${
          activePage === 2 ? 'translate-x-0' : 'translate-x-[150%]'
        }`}
      >
        <img src="/assets/logo.png" className="w-[40px]" />
        <h1 className="text-lg font-bold text-shadow-neon">
          Register your school
        </h1>

        <form
          onSubmit={registerSchoolHandler}
          className="w-full text-xs flex flex-col gap-3 font-semibold"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="schoolId">School Code</label>
            <div className="flex gap-2">
              <input
                onChange={handleInputChange}
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
            <label htmlFor="name">Name</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              id="name"
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="address">Address</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="address"
              id="address"
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber">Email address</label>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              id="email"
              className="bg-custom-black border border-zinc-800 rounded-md w-full px-2 py-1 outline-none focus:border-pinkish transition-colors duration-150 ease-in-out"
            />
          </div>

          {/* <div className="cursor-pointer">
            <input
              type="file"
              className="bg-pinkish w-10 cursor-pointer opacity-0"
            />
          </div> */}

          <button className="w-full bg-pinkish rounded-md py-2 hover:bg-red-400 transition-colors duration-150 ease-in-out font-bold flex items-center justify-center gap-1">
            Continue <ArrowRight className="w-[13px] h-[13px]" />
          </button>
        </form>
        <span
          onClick={() => setActivePage(1)}
          className="text-xs text-zinc-500 cursor-pointer transition-colors duration-150 ease-in hover:text-zinc-200"
        >
          Go Back
        </span>
      </div>
    </>
  );
}

function SchoolVerification({ activePage }: { activePage: number }) {
  return (
    <>
      {' '}
      <div
        className={`h-auto w-[300px] flex flex-col items-center justify-center absolute gap-5 transition-transform duration-300 ease-in-out ${
          activePage === 3 ? 'translate-x-0' : 'translate-x-[300%]'
        }`}
      >
        <img src="/assets/logo.png" className="w-[40px]" />
        <h1 className="text-lg font-bold text-shadow-neon">
          School is being Verified
        </h1>

        <p className="text-xs mt-3 w-[280px] text-zinc-400 text-center">
          Your school is under verification. Please wait 3 working days for
          verification result. An email will be sent to your account as soon as
          verification process is done. Thank you.
        </p>
      </div>
    </>
  );
}
