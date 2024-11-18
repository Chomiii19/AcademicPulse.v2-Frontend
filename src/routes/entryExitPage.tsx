import { ArrowLeft } from 'lucide-react';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';
import QrCodeScanner from '../components/qrCodeScanner';

function EntryPage() {
  return (
    <>
      <Header />
      <SidebarSection active={3} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-10 pb-10 flex flex-col justify-center items-center font-manrope">
        <a
          href="/app/scan-id"
          className="self-start p-1 hover:bg-zinc-800 transition-colors duration-150 ease-linear rounded-lg"
        >
          <ArrowLeft className="text-zinc-300 h-7 w-7" />
        </a>
        <QrCodeScanner
          title="Entrance Scanner"
          desc="Validate if a student is enrolled in your campus."
        />
      </main>
    </>
  );
}

function ExitPage() {
  return (
    <>
      <Header />
      <SidebarSection active={3} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-20 pb-10 flex flex-col justify-center items-center font-manrope">
        <a
          href="/app/scan-id"
          className="self-start p-1 hover:bg-zinc-800 transition-colors duration-150 ease-linear rounded-lg"
        >
          <ArrowLeft className="text-zinc-300 h-7 w-7" />
        </a>
        <QrCodeScanner
          title="Exit Scanner"
          desc="Check if a student was validated in their entry."
        />
      </main>
    </>
  );
}

export { EntryPage, ExitPage };
