import QrCodeScanner from '../components/qrCodeScanner';
import Header from '../components/header';
import SidebarSection from '../components/sidebar';

export default function IDValidaionPage() {
  return (
    <>
      <Header />
      <SidebarSection active={2} />
      <main className="bg-bg-color w-full h-screen pl-4 lg:pl-64 pr-4 pt-20 pb-10 flex justify-center items-center font-manrope">
        <QrCodeScanner
          title="ID Validation"
          desc="Validate a student by scanning the QR Code."
        />
      </main>
    </>
  );
}
