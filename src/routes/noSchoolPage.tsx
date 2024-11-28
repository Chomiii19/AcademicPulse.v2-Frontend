import ReactTypingEffect from 'react-typing-effect';
import Header from '../components/header';

function UserSchoolStatus() {
  return (
    <>
      <Header />
      <main className="h-screen w-full bg-bg-color flex justify-center items-center flex-col text-center gap-3">
        <h1 className="text-pinkish font-manrope font-bold">
          You are not yet in any school organization
          <ReactTypingEffect text={['']} speed={100} />
        </h1>
        <p className="text-sm text-zinc-400 font-manrope w-[300px]">
          Please contact your school owner to add you as collaborator. If you've
          registered your school, please wait 3 working days to verify.
        </p>
      </main>
    </>
  );
}

export default UserSchoolStatus;
