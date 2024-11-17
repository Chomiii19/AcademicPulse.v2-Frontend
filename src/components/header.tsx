import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Moon,
  CircleUserRound,
  AlignRight,
} from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  return (
    <header className="lg:border-b-zinc-800 bg-bg-color bg-opacity-70 backdrop-blur-md lg:border-b fixed w-full h-auto flex justify-center z-1000">
      <div className=" h-16 flex justify-between items-center px-5 w-full lg:px-10  py-2 lg:w-custom">
        <div className="flex gap-8 w-auto h-full items-center">
          <AlignRight className="lg:hidden text-zinc-500 cursor-pointer" />
          <div className="cursor-pointer flex gap-8">
            <Logo />
            <SearchBar />
          </div>
        </div>

        <div className="lg:hidden flex gap-6 text-zinc-500 items-center">
          <Search />
        </div>
        <nav className="hidden lg:flex gap-5 items-center">
          <NavList text="Guide" />
          <NavList text="Features" />
          <NavList text="About" />
          <NavList text="Contact" />
          <DarkLightToggle />
          <SocialMedia />
          <Profile />
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img className="h-7 w-9" src="/assets/logo.png" alt="" />
      <span className="text-slate-100 font-semibold text-lg font-sans">
        AcadPulse
      </span>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="hidden lg:flex h-auto w-38 bg-zinc-900 rounded-lg items-center px-2 py-1.5 justify-between cursor-pointer ease border border-transparent hover:border hover:border-pinkish duration-300 transition-colors group">
      <div className="flex gap-2 items-center">
        <Search className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 h-4 w-4" />
        <span className="text-zinc-500 font-semibold text-sm group-hover:text-zinc-300 transition-colors duration-500">
          Search
        </span>
      </div>
      <span className="text-zinc-500 font-semibold ml-6 border border-zinc-700 text-xs p-0.5 px-1 rounded-md">
        Ctrl K
      </span>
    </div>
  );
}

function NavList({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="text-zinc-400 text-base font-semibold hover:text-pinkish transition-colors duration-500"
    >
      {text}
    </a>
  );
}

function DarkLightToggle() {
  return (
    <div className="px-2 border-x border-zinc-800">
      <div className="bg-zinc-900 border border-zinc-800 w-14 px-1 py-0.5 rounded-3xl cursor-pointer hover:border-pinkish transition-colors duration-300">
        <Moon className="text-zinc-300 bg-black rounded-full w-5 h-5 p-0.5" />
      </div>
    </div>
  );
}

function SocialMedia() {
  const style: string =
    'text-zinc-400 w-5 h-5 cursor-pointer hover:text-pinkish transition-colors duration-300';

  return (
    <>
      <Facebook className={style} />
      <Twitter className={style} />
      <Instagram className={style} />
    </>
  );
}

function Profile() {
  const [active, setActive] = useState('none');

  const toggleActive = () => setActive(active === 'none' ? 'flex' : 'none');

  return (
    <div className="cursor-pointer relative" onClick={toggleActive}>
      <CircleUserRound className="duration-300 text-zinc-400 hover:text-pinkish" />
      <ProfileHover status={active} />
    </div>
  );
}

function ProfileHover({ status }: { status: string }) {
  return (
    <div
      className="absolute top-9 right-1 flex-col gap-1 bg-zinc-900 border border-zinc-800 p-2 rounded-md"
      style={{ display: status }}
    >
      <span className="text-zinc-400 text-sm cursor-pointer w-full hover:text-pinkish">
        Login
      </span>
      <span className="text-zinc-400 text-sm cursor-pointer w-full hover:text-pinkish transition-colors duration-300">
        Signup
      </span>
    </div>
  );
}
