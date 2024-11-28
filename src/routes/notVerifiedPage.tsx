import ReactTypingEffect from 'react-typing-effect';
import Header from '../components/header';

function UserVerificationStatus() {
  return (
    <>
      <Header />
      <main className="h-screen w-full bg-bg-color flex justify-center items-center flex-col text-center gap-3">
        <h1 className="text-pinkish font-manrope font-bold">
          You have not yet verified your email address
          <ReactTypingEffect text={['']} speed={100} />
        </h1>
        <p className="text-sm text-zinc-400 font-manrope w-[300px]">
          Please check your email inbox to verify your account.
        </p>
      </main>
    </>
  );
}

export default UserVerificationStatus;
