import { ShieldQuestion, DoorOpen } from 'lucide-react';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';
import { ReactNode } from 'react';

export default function ScanQrCodePage() {
  return (
    <>
      <Header />
      <SidebarSection active={3} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-20 pb-10 flex justify-center items-center font-manrope">
        <Options />
      </main>
    </>
  );
}

function Options() {
  const logoStyling =
    'h-[150px] w-[150px] group-hover:text-pinkish transition-colors duration-300 ease-in-out';

  return (
    <div className="flex gap-8">
      <Option
        type="entrance"
        title="Entrance Scanner"
        logo={<ShieldQuestion className={logoStyling} />}
        desc="Validate if a student is enrolled in your campus. Entry logs are
        automatically saved."
      />
      <Option
        type="exit"
        title="Exit Scanner"
        logo={<DoorOpen className={logoStyling} />}
        desc="Check if a student was validated in their entry. Exit logs are
        automatically saved."
      />
    </div>
  );
}

function Option({
  type,
  title,
  logo,
  desc,
}: {
  type: string;
  title: string;
  logo: ReactNode;
  desc: string;
}) {
  return (
    <a
      href={`/app/scan-id/${type}`}
      className="w-[250px] h-[250px] text-zinc-200 border border-zinc-800 bg-custom-black shadow-lg shadow-zinc-950 rounded-xl p-3 flex flex-col items-center gap-4 cursor-pointer group hover:scale-[1.03] transition-transform duration-200 ease-linear"
    >
      <h1 className="text-xl font-bold text-shadow-neon">{title}</h1>
      {logo}
      <p className="text-sm text-zinc-400 text-center">{desc}</p>
    </a>
  );
}
