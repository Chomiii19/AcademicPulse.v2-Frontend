import { BookA } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ReactTypingEffect from 'react-typing-effect';
import { users, Iuser } from './communityUsers';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="bg-bg-color w-full h-auto flex items-center flex-col ">
        <Main />
        <Section
          id={1}
          title="Effortless School Monitoring Features"
          desc="AcadPulse makes school monitoring simple"
          radiusTop="border-t border-t-zinc-900 lg:rounded-t-[100px] shadow-pinkish"
        />
        <Section
          id={2}
          title="Your Gateway to Smarter School Management"
          desc=""
          radiusTop=""
        />
        <Community />
        <a
          href="#"
          className="font-manrope text-xl text-zinc-200 border-[2px] border-zinc-600 py-1 px-4 rounded-full transition-all ease-in-out duration-300 hover:border-zinc-200 hover:-translate-y-1"
        >
          Be one of our sponsors
        </a>

        <section className="w-full h-14"></section>
      </div>
      <Footer />
    </>
  );
}

function Main() {
  return (
    <main className="flex justify-center items-center h-screen lg:w-custom lg:h-custom relative overflow-hidden lg:overflow-visible">
      <div className="flex justify-center items-center flex-col w-full z-40">
        <div className="flex gap-2 items-center rounded-full border-pinkish border px-3 py-0.5 bg-gradient-radial">
          <img src="/assets/logo.png" className="w-6 h-5" />
          <h1 className="text-lg font-sans text-zinc-300 ">
            <ReactTypingEffect
              text={[
                'AcadPulse',
                'Trusted by organizations',
                'Monitor with ease',
                'Improve school security',
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2500}
              typingDelay={500}
            />
          </h1>
        </div>
        <h1 className=" text-transparent leading-1 font-semibold text-5xl lg:text-7xl w-4/6 text-center self-center font-manrope bg-clip-text bg-gradient-to-b via-zinc-400 from-zinc-50 to-zinc-800 p-3">
          Your Personal School Monitoring App
        </h1>
        <p className="text-zinc-400 mt-5 w-3/6 text-sm text font-manrope text-center tracking-wider">
          Crafted for seamless student management, our platform excels in
          tracking student logs, validating IDs, and streamlining administrative
          tasks.
        </p>
        <div className="mt-10 flex gap-10">
          <a
            href="/app"
            className="text-zinc-100 font-manrope px-4 py-1.5 font-semibold rounded-xl bg-gradient-to-br from-red-500 via-red-400 to-pinkish hover:-translate-y-1 ease-in-out duration-300 transition-transform"
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
      <div className="z-1 w-[1500px] h-[1500px] bg-custom-radial absolute rounded-full top-32"></div>
    </main>
  );
}

function Section({
  title,
  desc,
  id,
  radiusTop,
}: {
  title: string;
  desc: string;
  id: number;
  radiusTop: string;
}) {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`w-full h-auto rounded-[50px] flex justify-start items-center flex-col gap-11 px-8 lg:px-40 pb-44 pt-10 ${radiusTop} bg-bg-color z-50 ${
        inView ? 'mt-0' : 'mt-44'
      } transition-all ease-in duration-500`}
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-manrope text-center font-semibold text-3xl lg:text-4xl text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_center,_#de4d4d_100%,_#ED6161,_#fff)] text-shadow-neon">
          {title}
        </h1>
        <p className="text-center font-manrope text-lg text-zinc-400 font-medium tracking-wider">
          {desc}
        </p>
      </div>
      <Features id={id} />
    </section>
  );
}

function Features({ id }: { id: number }) {
  const { ref: ref1, inView: isVisible1 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: ref2, inView: isVisible2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: ref3, inView: isVisible3 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: ref4, inView: isVisible4 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const layout1 = id === 1 ? 'lg:col-span-1' : 'lg:col-span-2';
  const layout2 = id === 1 ? 'lg:col-span-2' : 'lg:col-span-1';

  const grid1ELementsStyle = `border bg-custom-black border-zinc-800 ${layout1} row-span-1 w-full h-full rounded-2xl transition-transform duration-300 ease-in`;
  const grid2ELementsStyle = `border bg-custom-black border-zinc-800 ${layout2} row-span-1 w-full h-full rounded-2xl transition-transform duration-300 ease-in`;

  return (
    <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-3 lg:grid-rows-2 gap-7 w-full lg:w-[1200px] h-[750px] items-center justify-center">
      <div
        ref={ref1}
        className={`${grid1ELementsStyle} ${
          isVisible1 ? 'translate-x-0' : '-translate-x-7'
        }`}
      ></div>
      <div
        ref={ref2}
        className={`${grid2ELementsStyle} ${
          isVisible2 ? 'translate-x-0' : 'translate-x-7'
        }`}
      ></div>
      <div
        ref={ref3}
        className={`${grid2ELementsStyle} ${
          isVisible3 ? 'translate-x-0' : '-translate-x-7'
        }`}
      ></div>
      <div
        ref={ref4}
        className={`${grid1ELementsStyle} ${
          isVisible4 ? 'translate-x-0' : 'translate-x-7'
        }`}
      ></div>
    </div>
  );
}

function Community() {
  return (
    <section className="h-auto lg:w-custom w-full flex items-center flex-col gap-11 pb-24 px-3 overflow-hidden">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-manrope font-semibold text-3xl lg:text-4xl text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_center,_#de4d4d_100%,_#ED6161,_#fff)] text-shadow-neon">
          Hear from Our Community
        </h1>
        <p className="font-manrope text-lg text-zinc-400 font-medium tracking-wider w-80 lg:w-[550px] text-center">
          See what educators, students, and administrators are saying about
          their experience with our platform.
        </p>
      </div>
      <CommunityList />
    </section>
  );
}

function CommunityList() {
  return (
    <div className="grid grid-cols-2 grid-rows-z lg:grid-cols-3 lg:grid-rows-4 grid-flow-dense auto-rows-auto w-full lg:w-[1000px] lg:gap-6 gap-3">
      {users.map((user, i) => (
        <CommunityListUser
          name={user.name}
          username={user.username}
          comment={user.comment}
          image={`user-${i + 1}.jpeg`}
          rowSpan={user.rowSpan}
        />
      ))}
    </div>
  );
}

function CommunityListUser({ name, username, comment, image, rowSpan }: Iuser) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`h-auto flex flex-col bg-custom-black border 
    border-zinc-800 rounded-xl p-4 gap-3 transition-all duration-500 ease-in ${rowSpan} ${
        inView ? 'translate-y-0 opacity-1' : '-translate-y-14 opacity-0'
      }`}
    >
      <div className="flex gap-4 items-center">
        <img
          className="w-8 lg:w-12 rounded-full"
          src={`/assets/communityUsers/${image}`}
        />
        <div>
          <h1 className="font-manrope text-xs lg:text-sm text-zinc-200 font-semibold">
            {name}
          </h1>
          <p className="font-manrope text-xs lg:text-sm text-zinc-400 ">
            {username}
          </p>
        </div>
      </div>
      <p className="font-manrope text-xs lg:text-sm text-zinc-400">{comment}</p>
    </div>
  );
}
