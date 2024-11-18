import { SearchIcon } from 'lucide-react';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';
import { StudentsInSchool } from './app';
import BarChart from '../services/validatedBarGraph';
import LineChart from '../services/logLineGraph';
import DoughnutChart from '../services/validatedStatsDoughnutChart';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <SidebarSection active={4} />
      <main className="bg-bg-color w-full h-auto pl-4 lg:pl-64 pr-4 pt-20 pb-10 flex justify-center items-center font-manrope">
        <DashboardLayout />
      </main>
    </>
  );
}

function DashboardLayout() {
  return (
    <div className="w-[1080px] h-[700px] grid grid-cols-4 grid-rows-3 gap-4">
      <ValidatedIdStats />
      <StudentsInSchool />
      <ValidatedIdGraph />
      <SchoolLogGraph />
      <StudentsInSchoolList />
    </div>
  );
}

function ValidatedIdStats() {
  return (
    <div className="col-span-1 bg-custom-black border border-zinc-800 rounded-lg p-3 relative flex justify-center items-center">
      <h1 className="absolute text-pinkish text-3xl translate-y-4"> 83%</h1>
      <DoughnutChart />
    </div>
  );
}

function ValidatedIdGraph() {
  return (
    <div className="col-span-2 bg-custom-black border border-zinc-800 rounded-lg">
      <BarChart />
    </div>
  );
}

function SchoolLogGraph() {
  return (
    <div className="row-span-3 col-span-3 bg-custom-black border border-zinc-800 rounded-lg">
      <LineChart />
    </div>
  );
}

function StudentsInSchoolList() {
  return (
    <div className="row-span-2 bg-custom-black border border-zinc-800 rounded-lg p-3 flex flex-col gap-3">
      <SchoolLogGraphService />
    </div>
  );
}

function SchoolLogGraphService() {
  return (
    <>
      <header className="flex w-full justify-between">
        <form className="flex w-full gap-2 text-zinc-200 text-sm">
          <input
            placeholder="Name"
            type="text"
            className="w-[90px] border border-none px-2 py-[1px] bg-zinc-800 rounded-md outline-none focus:bg-zinc-700 transition-colors duration-200 ease-linear"
          />
          <button className="bg-pinkish p-[2px] rounded-md hover:bg-red-400 transition-colors duration-150 ease-in">
            <SearchIcon className="w-[20px] h-[20px] text-zinc-300" />
          </button>
        </form>
        <button className="text-xs w-[130px] text-pinkish border border-pinkish rounded-full hover:text-red-300 hover:border-red-300 transition-colors duration-150 ease-linear">
          See in details
        </button>
      </header>
      <div className="flex flex-col gap-2 overflow-x-auto w-full h-full">
        <StudentLog name="Chomi Borines" course="BSCS-3B" status="in" />
        <StudentLog name="Andrei Alvez" course="BSCS-4B" status="out" />
        <StudentLog name="Jason Maunes" course="BSIS-1A" status="in" />
        <StudentLog name="Jomarie Esguerra" course="BSA-2A" status="in" />
        <StudentLog name="Jake Arpon" course="BSCS-3B" status="in" />
        <StudentLog name="Euclid Agustin" course="BSIS-1B" status="out" />
        <StudentLog name="John Lloyd Andres" course="BSCS-4B" status="out" />
        <StudentLog name="Master Ablaza" course="BSCS-4B" status="in" />
        <StudentLog name="Andrei Bata" course="PEDO-1A" status="out" />
      </div>
    </>
  );
}

function StudentLog({
  name,
  course,
  status,
}: {
  name: string;
  course: string;
  status: string;
}) {
  const color =
    status === 'in'
      ? 'text-green-400 border-green-400'
      : 'text-orange-500 border-orange-500';

  return (
    <div className="flex w-full justify-between items-center hover:bg-zinc-800 px-2 py-[1px] rounded-lg transition-colors duration-300 ease-linear">
      <div>
        <h1 className="text-zinc-200 text-sm font-medium">{name}</h1>
        <p className="text-zinc-500 text-xs">{course}</p>
      </div>
      <p className={`border ${color} rounded-full text-xs px-2 py-[1px]`}>
        {status === 'in' ? 'Inside' : 'Outside'}
      </p>
    </div>
  );
}
