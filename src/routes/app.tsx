import { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { IdCard, ScanQrCode, FileUp } from 'lucide-react';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';
import LineChart from '../services/logLineGraph';
import { useAuth } from '../components/authProvider';

function AppPage() {
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
      <div className="w-[1080px] h-[700px] grid lg:grid-cols-4 lg:grid-rows-4 gap-4 text-zinc-300 font-manrope">
        <UserGreetings />
        <StudentsInSchool />
        <UpdateLog />
        <WeeklyReport />
        <CommunityLog />
        <IDValidationHome />
        <ScanQRHome />
        <UploadHome />
      </div>
    </main>
  );
}

function UserGreetings() {
  const { user } = useAuth();
  return (
    <div className="col-span-2 bg-gradient-to-br from-red-500 via-pinkish to-red-400 rounded-lg p-3 text-zinc-200">
      <div className="flex h-full w-full justify-between gap-2">
        <div className="flex flex-col h-full justify-between pb-3">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-xl">{`Welcome back, ${user?.firstname}!`}</h1>
            <p className="border border-zinc-200 rounded-full px-2 text-xs">
              {user?.role === 3
                ? 'Staff'
                : user?.role === 2
                ? 'Admin'
                : user?.role === 1
                ? 'Owner'
                : 'Unknown Role'}
            </p>
          </div>
          <p className="text-sm">{user?.schoolName}</p>
        </div>
        <img
          src="/assets/communityUsers/user-2.jpeg"
          className="h-auto rounded-3xl"
        />
      </div>
    </div>
  );
}

function StudentsInSchool() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="border border-zinc-800 bg-custom-black rounded-lg p-3 flex flex-col items-center justify-between">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-xs text-zinc-400">As of {currentTime}</h1>

        <a className="text-pinkish text-xs border border-pinkish px-1 rounded-full cursor-pointer hover:text-red-300 hover:border-red-300 transition-colors duration-300">
          See list
        </a>
      </header>
      <h1 className="text-pinkish text-5xl font-semibold">
        368
        <ReactTypingEffect
          text={['']}
          speed={100}
          className="font-extralight text-5xl"
        />
      </h1>
      <p className="text-zinc-300">No. of currently in campus</p>
    </div>
  );
}

function UpdateLog() {
  const announcements = [
    {
      title: 'New community page!',
      date: '12/02/2024',
      content: 'Interact with one another...',
    },
    {
      title: 'Improved QR Code sca...',
      date: '11/25/2024',
      content: 'A newly improved QR Code...',
    },
    {
      title: 'New fixes!',
      date: '11/17/2024',
      content: 'Fixed the bug regarding the...',
    },
    {
      title: 'Notice of Issue',
      date: '10/18/2024',
      content: 'There will be a maintenance...',
    },
    {
      title: 'New fixes',
      date: '09/30/2024',
      content: 'We noticed a bug that makes...',
    },
  ];

  function Announcement({
    title,
    date,
    content,
  }: {
    title: string;
    date: string;
    content: string;
  }) {
    return (
      <div className="w-full flex flex-col hover:bg-zinc-800 px-1 py-[5px] rounded-md transition-colors duration-300 ease-in-out">
        <div className="w-full flex justify-between">
          {' '}
          <h1 className="font-semibold text-sm">{title}</h1>
          <p className="text-[0.7rem] text-zinc-400">{date}</p>
        </div>
        <p className="text-[0.8rem] text-zinc-400">{content}</p>
      </div>
    );
  }

  return (
    <div className="border border-zinc-800 bg-custom-black row-span-2 rounded-lg p-3 flex flex-col w-full h-full gap-2 overflow-hidden">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-lg font-bold">Announcement</h1>
        <a className="text-pinkish text-xs border border-pinkish px-1 rounded-full cursor-pointer hover:text-red-300 hover:border-red-300 transition-colors duration-300">
          See more
        </a>
      </header>
      <div className="w-full h-full flex flex-col gap-2 faded-bottom">
        {announcements.map((el) => (
          <Announcement
            key={`${el.title}-${el.date}`}
            title={el.title}
            date={el.date}
            content={el.content}
          />
        ))}
      </div>
    </div>
  );
}
function WeeklyReport() {
  return (
    <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-3 row-span-2 p-3 flex flex-col gap-2">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-lg font-extrabold">This Week's Report</h1>
        <a className="text-pinkish text-xs border border-pinkish px-1 rounded-full cursor-pointer hover:text-red-300 hover:border-red-300 transition-colors duration-300">
          See in details
        </a>
      </header>
      <div className="w-[770px] h-[280px]">
        <LineChart />
      </div>
    </div>
  );
}
function CommunityLog() {
  const userLogs = [
    {
      username: '@shane_',
      date: '12/02/2024',
      comment: 'There are some things I...',
    },
    {
      username: '@SDvargas',
      date: '11/28/2024',
      comment: 'So far so good. I hope it w...',
    },
    {
      username: '@helen_gloria',
      date: '11/20/2024',
      comment: 'Does someone know how...',
    },
    {
      username: '@gregoryAlex',
      date: '10/31/2024',
      comment: 'Nice web app.',
    },
    {
      username: '@ussop',
      date: '09/02/2024',
      comment: 'Is there a way to upload a...',
    },
  ];

  function User({
    id,
    username,
    date,
    comment,
  }: {
    id: number;
    username: string;
    date: string;
    comment: string;
  }) {
    return (
      <div className="w-full flex gap-2 px-1 py-[3px] hover:bg-zinc-800 transition-colors ease-in-out duration-300 rounded-md">
        <img
          src={`/assets/communityUsers/user-${id}.jpeg`}
          className="w-11 rounded-full"
        />
        <div className="w-full">
          <div className="w-full flex items-center justify-between">
            <h1 className="font-semibold text-sm">{username}</h1>
            <p className="text-[0.7rem] text-zinc-400">{date}</p>
          </div>
          <p className="text-[0.8rem] text-zinc-400">{comment}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-zinc-800 rounded-lg bg-custom-black col-span-1 row-span-2 h-full w-full p-3 flex flex-col gap-2">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-lg font-bold">Community</h1>
        <a className="text-pinkish text-xs border border-pinkish px-1 rounded-full cursor-pointer hover:text-red-300 hover:border-red-300 transition-colors duration-300">
          See more
        </a>
      </header>
      <div className="w-full h-full flex flex-col gap-2 faded-bottom overflow-hidden">
        {userLogs.map((user, i) => (
          <User
            key={`${user.username}-${user.date}`}
            id={i + 1}
            username={user.username}
            date={user.date}
            comment={user.comment}
          />
        ))}
      </div>
    </div>
  );
}

function IDValidationHome() {
  return (
    <a
      href="/app/id-validation"
      className="border border-zinc-800 rounded-lg bg-custom-black col-span-1 p-3 flex flex-col items-center h-full group IdCardcursor-pointer"
    >
      <IdCard className="w-auto h-full group-hover:text-pinkish transition-colors duration-300 ease-in-out" />
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium">ID Validation</h1>
        <p className="text-xs text-zinc-400 text-center">
          Validate an ID to allow QR Code scanning.
        </p>
      </div>
    </a>
  );
}

function ScanQRHome() {
  return (
    <a
      href="/app/scan-id"
      className="border border-zinc-800 rounded-lg bg-custom-black col-span-1 p-3 flex flex-col items-center h-full group cursor-pointer"
    >
      <ScanQrCode className="w-auto h-full group-hover:text-pinkish transition-colors duration-300 ease-in-out" />
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium">Scan QR Code</h1>
        <p className="text-xs text-zinc-400 text-center">
          Monitor entry & exit logs by scanning QR Codes
        </p>
      </div>
    </a>
  );
}

function UploadHome() {
  return (
    <a
      href="/app/upload-record"
      className="border border-zinc-800 rounded-lg bg-custom-black col-span-1 p-3 flex flex-col items-center h-full group cursor-pointer gap-1"
    >
      <FileUp className="w-auto h-full group-hover:text-pinkish transition-colors duration-300 ease-in-out" />
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium">Upload Record</h1>
        <p className="text-xs text-zinc-400 text-center">
          Upload your school's list of students.
        </p>
      </div>
    </a>
  );
}

export { AppPage, StudentsInSchool };
