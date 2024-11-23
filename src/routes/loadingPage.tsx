import ReactTypingEffect from 'react-typing-effect';
import Header from '../components/header';

function LoadingPage() {
  return (
    <>
      <Header />
      <main className="h-screen w-full bg-bg-color flex justify-center items-center">
        <h1 className="text-zinc-200 font-manrope">
          Loading page
          <ReactTypingEffect text={['']} speed={100} />
        </h1>
      </main>
    </>
  );
}

export default LoadingPage;
