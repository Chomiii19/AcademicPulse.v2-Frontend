import Header from '../components/header';
import SidebarSection from '../components/sidebar';

export default function AppPage() {
  return (
    <>
      <Header />
      <SidebarSection active={1} />
      <AppBody />
    </>
  );
}

function AppBody() {
  return (
    <main className="bg-bg-color w-full h-auto pl-4 lg:pl-64 pr-4 pt-20 pb-10 flex justify-center">
      <div className="w-[1080px] h-[700px] grid lg:grid-cols-4 lg:grid-rows-4 gap-4">
        <div className="col-span-2 bg-gradient-to-br from-red-500 via-pinkish to-red-400 rounded-lg"></div>
        <div className="border border-zinc-800 bg-custom-black rounded-lg"></div>
        <div className="border border-zinc-800 bg-custom-black row-span-2 rounded-lg"></div>
        <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-3 row-span-2"></div>
        <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-1 row-span-2"></div>
        <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-1"></div>
        <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-1"></div>
        <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-1"></div>
      </div>
    </main>
  );
}
