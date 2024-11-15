import { BookA } from 'lucide-react';
import ReactTypingEffect from 'react-typing-effect';

export default function HomePage() {
  return (
    <div className="bg-bg-color w-full h-auto flex justify-center flex-col">
      <Main />
      <Section />
    </div>
  );
}

function Main() {
  return (
    <main className="flex justify-center items-center h-screen lg:w-custom lg:h-custom">
      <div className="flex justify-center items-center flex-col">
        <div className="flex gap-2 items-center rounded-full border-pinkish border px-3 py-0.5 bg-gradient-radial">
          <img src="/assets/logo.png" className="w-6 h-5" />
          <h1 className="text-lg font-sans text-zinc-300 ">
            <ReactTypingEffect
              text={[
                'AcadPulse',
                'Trusted by organizations',
                'Monitor with ease!',
                'Improve school security',
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2500}
              typingDelay={500}
            />
          </h1>
        </div>
        <h1 className=" text-transparent leading-1 font-semibold text-3xl lg:text-7xl w-4/6 text-center self-center font-manrope bg-clip-text bg-gradient-to-b via-zinc-400 from-zinc-100 to-zinc-800 p-3">
          Your Personal School Monitoring App
        </h1>
        <p className="text-zinc-400 mt-5 w-3/6 text-sm text font-manrope text-center tracking-wider">
          Crafted for seamless student management, our platform excels in
          tracking student logs, validating IDs, and streamlining administrative
          tasks.
        </p>
        <div className="mt-10 flex gap-10">
          <a
            href="#"
            className="text-zinc-100 font-manrope px-4 py-1.5 font-semibold rounded-xl bg-gradient-to-br from-pinkish via-red-400 to-red-300 hover:-translate-y-1 ease-in-out duration-300 transition-transform"
          >
            Get Started
          </a>
          <a
            href="#"
            className="font-manrope text-zinc-400 border px-4 py-1.5 rounded-xl border-zinc-400 flex gap-2 items-center hover:-translate-y-1 ease-in-out duration-300 transition-transform"
          >
            <BookA className="w-5" />
            <p>Learn More</p>
          </a>
        </div>
      </div>
    </main>
  );
}

function Section() {
  return <section className="lg:w-custom lg:h-custom"></section>;
}
