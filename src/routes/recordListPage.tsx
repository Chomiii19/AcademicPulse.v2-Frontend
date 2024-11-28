import { Search } from 'lucide-react';
import Header from '../components/header';
import PageButton from '../components/pageButton';
import SidebarSection from '../components/sidebar';

export default function RecordListPage() {
  return (
    <>
      <Header />
      <SidebarSection active={5} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-20 pb-10 text-xs">
        <div className="flex flex-col justify-center items-center font-manrope gap-2 w-full h-full bg-custom-black rounded-2xl p-3 pb-0">
          <div className="h-10 w-full flex justify-between">
            <form className="flex gap-2 items-center h-full">
              <input
                placeholder="ID Number"
                type="text"
                className="outline-none rounded-lg bg-transparent border-[1px] border-zinc-800 px-3 text-zinc-300 w-28 h-full"
              />
              <input
                placeholder="Yr Level"
                type="text"
                className="outline-none rounded-lg bg-transparent border-[1px] border-zinc-800 px-3 text-zinc-300 w-28 h-full"
              />
              <input
                placeholder="Course"
                type="text"
                className="outline-none rounded-lg bg-transparent border-[1px] border-zinc-800 px-3 text-zinc-300 w-28 h-full"
              />
              <Search className="text-zinc-500 text-xs cursor-pointer transition-colors duration-150 ease-in hover:text-zinc-300" />
            </form>
            <div className="h-full flex gap-2">
              <button className="bg-pinkish px-2 rounded-lg text-zinc-200 font-bold">
                Delete Record
              </button>
              <button className="bg-pinkish px-2 rounded-lg text-zinc-200 font-bold">
                Generate QR
              </button>
            </div>
          </div>
          <div className="w-full h-full"></div>
          <PageButton />
        </div>
      </main>
    </>
  );
}
