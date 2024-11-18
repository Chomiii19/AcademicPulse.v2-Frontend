import { ScanQrCode } from 'lucide-react';

export default function QrCodeScanner({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="w-[390px] h-[430px] border border-zinc-800 bg-custom-black rounded-3xl shadow-lg shadow-zinc-950 flex flex-col p-4 text-zinc-200 items-center gap-8">
      <div className="flex flex-col items-center">
        <h1 className=" text-3xl font-bold text-shadow-neon">{title}</h1>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
      <div className="w-[200px] h-[200px] border border-zinc-800 bg-zinc-900 rounded-3xl">
        <ScanQrCode className="w-[200px] h-[200px]" />
      </div>
      <p className="w-full bg-gradient-to-b from-pinkish to-red-400 rounded-lg px-4 py-2 text-xl font-bold text-center">
        Scanning...
      </p>
    </div>
  );
}
