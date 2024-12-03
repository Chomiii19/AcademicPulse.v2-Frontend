import { Search } from 'lucide-react';
import Header from '../components/header';
import PageButton from '../components/pageButton';
import SidebarSection from '../components/sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Student = {
  studentId: string;
  surname: string;
  firstname: string;
  middlename?: string;
  extension?: string;
  course: string;
  yearLevel: number;
  email?: string;
};

type StudentsResponse = {
  data: {
    totalStudents: number;
    totalPages: number;
    students: Student[];
  };
};

export default function RecordListPage() {
  const [students, setStudents] = useState<Student[]>([]);

  const getAllStudents = async () => {
    try {
      const response = await axios.get<StudentsResponse>(
        'https://acadpulse-backend.onrender.com/api/v1/app/get-students?page=1',
        { withCredentials: true }
      );
      setStudents(response.data.data.students);
    } catch (error: unknown) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <>
      <Header />
      <SidebarSection active={5} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-20 pb-10 text-xs">
        <div className="flex flex-col justify-center items-center font-manrope gap-2 w-full h-full bg-custom-black rounded-2xl p-3 pb-0">
          <RecordHeader />
          <RecordList students={students} />
          <PageButton />
        </div>
      </main>
    </>
  );
}

function RecordHeader() {
  return (
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
  );
}

function RecordList({ students }: { students: Student[] }) {
  return (
    <div className="w-full h-full flex flex-col gap-1 mt-2 text-zinc-300 font-semibold overflow-x-auto">
      {students.map((student, i) => (
        <List key={i} student={student} />
      ))}
    </div>
  );
}

function List({ student }: { student: Student }) {
  return (
    <div className="w-full h-auto px-2 py-2 border-t border-t-zinc-800">
      <p>
        Student ID: <span>{student.studentId}</span>
      </p>
      <div className="flex gap-4">
        <p>
          Surname: <span>{student.surname}</span>
        </p>
        <p>
          Firstname: <span>{student.firstname}</span>
        </p>
        <p>
          Middlename: <span>{student.middlename}</span>
        </p>
        <p>
          Extension: <span>{student.extension}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <p>
          Course: <span>{student.course}</span>
        </p>
        <p>
          Year Level: <span>{student.yearLevel}</span>
        </p>
      </div>
      <p>
        Email: <span>{student.email}</span>
      </p>
    </div>
  );
}
