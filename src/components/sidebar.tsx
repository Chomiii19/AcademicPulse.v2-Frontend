import axios from 'axios';
import {
  House,
  IdCard,
  ScanQrCode,
  LayoutDashboard,
  FileUp,
  CircleUserRound,
  MessageSquare,
  Handshake,
  Settings,
  MessageSquareWarning,
  LogOut,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authProvider';

export default function SidebarSection({ active }: { active: number }) {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function signOut() {
    try {
      await axios.get('https://acadpulse-backend.onrender.com/api/v1/signout', {
        withCredentials: true,
      });
      setUser(null);
      navigate('/', { replace: true });
    } catch (err) {
      console.error('ERROR: ', err);
    }
  }

  async function handleSponsor() {
    try {
      const response = await axios.get(
        'https://acadpulse-backend.onrender.com/api/v1/app/sponsor',
        { withCredentials: true }
      );

      window.location.href = response.data.session.url;
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  return (
    <nav className=" bg-bg-color fixed z-50 h-screen w-60 p-2 pt-20 text-zinc-400 font-manrope lg:hover:overflow-x-auto transition-all duration-300 -translate-x-64 lg:translate-x-0">
      <section className="flex flex-col w-full gap-1 border-b pb-4 border-b-zinc-800">
        <a
          href="/app"
          className={`flex gap-5 items-center transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg hover:text-pinkish hover:bg-zinc-900 ${
            active === 1 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <House /> <p>Home</p>
        </a>
        <a
          href="/app/id-validation"
          className={`flex gap-5 items-center transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg hover:text-pinkish hover:bg-zinc-900 ${
            active === 2 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <IdCard /> <p>ID Validation</p>
        </a>
        <a
          href="/app/scan-id"
          className={`flex gap-5 items-center transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg hover:text-pinkish hover:bg-zinc-900 ${
            active === 3 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <ScanQrCode /> <p>Scan QR Code</p>
        </a>
        <a
          href="/app/dashboard"
          className={`flex gap-5 items-center transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg hover:text-pinkish hover:bg-zinc-900 ${
            active === 4 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <LayoutDashboard /> <p>Dashboard</p>
        </a>
        <a
          href="/app/upload-record"
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 5 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <FileUp /> <p>Upload Record</p>
        </a>
      </section>
      <section className="flex flex-col w-full gap-1 border-b pb-4 border-b-zinc-800 pt-2">
        <div
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 6 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <CircleUserRound /> <p>Your Account</p>
        </div>
        <div
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 7 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <MessageSquare /> <p>Community</p>
        </div>
        <button
          onClick={handleSponsor}
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 8 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <Handshake /> <p>Become a Sponsor</p>
        </button>
        <div
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 9 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <Settings /> <p>Settings</p>
        </div>
        <div
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 10 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <MessageSquareWarning /> <p>Send Feedback</p>
        </div>
        <button
          onClick={signOut}
          className={`flex gap-5 items-center hover:text-pinkish hover:bg-zinc-900 transition-all ease-in-out duration-300 cursor-pointer w-full px-3 py-2 rounded-lg ${
            active === 11 ? 'text-pinkish bg-zinc-900' : ''
          }`}
        >
          <LogOut /> <p>Sign Out</p>
        </button>
      </section>
      <footer className="flex flex-col gap-2 center w-full text-xs text-zinc-500 font-semibold text-center pt-4">
        <p>Copyright © 2024 AcadPulse Inc.</p>
      </footer>
    </nav>
  );
}
