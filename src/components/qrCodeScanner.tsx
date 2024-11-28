import axios from 'axios';
import { Html5Qrcode } from 'html5-qrcode';
import { useEffect, useRef, useState } from 'react';

export default function QrCodeScanner({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const scannerContainerRef = useRef<HTMLDivElement>(null);

  const handleScanned = async (decodedText: string) => {
    try {
      const response = await axios.post(link, decodedText, {
        withCredentials: true,
      });
      setScannedData(response.data.data.message);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setScannedData(
          error.response?.data?.message ||
            'An error occurred. Please try again.'
        );
      }
    } finally {
      if (scannerRef.current) {
        setTimeout(() => {
          scannerRef?.current
            ?.start(
              { facingMode: 'environment' },
              { fps: 10, qrbox: { width: 100, height: 100 } },
              (text) => handleScanned(text),
              () => {}
            )
            .catch(console.error);
          setScannedData('Scanning...');
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (scannerContainerRef.current) {
      const html5QrCode = new Html5Qrcode(scannerContainerRef.current.id);
      scannerRef.current = html5QrCode;

      const onScanSuccess = (decodedText: string) => {
        setScannedData(decodedText);
        handleScanned(decodedText);
        html5QrCode.stop().catch(console.error);
      };

      const onScanError = () => {};

      html5QrCode
        .start(
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 100, height: 100 },
          },
          onScanSuccess,
          onScanError
        )
        .catch((error) => console.error('Start Error:', error));

      return () => {
        html5QrCode
          .stop()
          .then(() => html5QrCode.clear())
          .catch((err) => console.error('Cleanup Error:', err));
      };
    }
  }, []);

  return (
    <div className="w-[390px] h-[430px] border border-zinc-800 bg-custom-black rounded-3xl shadow-lg shadow-zinc-950 flex flex-col p-4 text-zinc-200 items-center gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-shadow-neon">{title}</h1>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
      <div className="w-[200px] h-[200px] border border-zinc-800 bg-zinc-900 rounded-3xl overflow-hidden">
        <div
          ref={scannerContainerRef}
          id="qr-scanner-container"
          style={{ width: '265px' }}
          className="flex justify-center items-center right-8"
        />
      </div>
      <p className="w-full bg-gradient-to-b from-pinkish to-red-400 rounded-lg px-4 py-2 text-xl font-bold text-center">
        {scannedData ? `${scannedData}` : 'Scanning...'}
      </p>
    </div>
  );
}
