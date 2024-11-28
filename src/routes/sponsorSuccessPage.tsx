import ReactTypingEffect from 'react-typing-effect';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';

function SponsorSuccessPage() {
  return (
    <>
      <Header />
      <SidebarSection active={8} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-20 pb-10 flex justify-center items-center flex-col text-center gap-3">
        <h1 className="text-pinkish font-manrope font-bold">
          Thank you for supporting our mission!
          <ReactTypingEffect text={['']} speed={100} />
        </h1>
        <p className="text-sm text-zinc-400 font-manrope w-[300px]">
          We deeply appreciate your sponsorship. As a token of our gratitude, we
          have increased the request rate limit for your school within our
          system. Together, let's create a brighter future for education.
          Wishing you continued success!
        </p>
      </main>
    </>
  );
}

export default SponsorSuccessPage;
