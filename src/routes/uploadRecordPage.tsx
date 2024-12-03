import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UploadRecordPage() {
  return (
    <>
      <Header />
      <SidebarSection active={5} />
      <main className="bg-bg-color w-full h-full pl-4 lg:pl-64 pr-4 pt-24 pb-10 flex justify-center items-center">
        <UploadDataForm />
      </main>
    </>
  );
}

function UploadDataForm() {
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      console.log('Files dropped:', files);
      handleSubmit(files[0]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;
    if (files && files.length) {
      console.log('Files uploaded:', files);
      handleSubmit(files[0]);
    }
  };

  const handleSubmit = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        'https://acadpulse-backend.onrender.com/api/v1/app/upload-record/submit',
        formData,
        {
          headers: { 'Content-type': 'multipart/form-data' },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setTimeout(
        () => navigate('/app/students-record', { replace: true }),
        1500
      );
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="h-[500px] w-1/2 bg-custom-black border border-zinc-800 rounded-2xl shadow-lg shadow-zinc-950 flex flex-col gap-4 p-3 items-center">
      <h1 className="text-2xl text-zinc-200 font-bold text-shadow-neon">
        Upload your Student Record
      </h1>
      <form
        className={`w-[400px] h-[350px] border-[4px] rounded-2xl border-dashed flex flex-col gap-2 items-center justify-center cursor-pointer transition-all duration-150 ease-in relative ${
          isDragging ? 'bg-zinc-800 border-pinkish' : 'border-zinc-300'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <FontAwesomeIcon
          icon={faCloudArrowUp}
          size="5x"
          className={`transition-all duration-150 ease-in ${
            isDragging ? 'text-pinkish -translate-y-8' : 'text-zinc-300'
          }`}
        />
        <p className="text-zinc-300 text-lg font-medium">
          Drag file or Upload by clicking
        </p>
        <input
          type="file"
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </form>
    </div>
  );
}
