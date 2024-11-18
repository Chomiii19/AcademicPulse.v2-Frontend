import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/main';
import { AppPage } from './routes/app';
import IDValidaionPage from './routes/idValidationPage';
import ScanQrCodePage from './routes/scanQRCodePage';
import { EntryPage, ExitPage } from './routes/entryExitPage';
import DashboardPage from './routes/dashboardPage';
import UploadRecordPage from './routes/uploadRecordPage';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />}></Route>
        <Route path="/app/id-validation" element={<IDValidaionPage />}></Route>
        <Route path="/app/scan-id" element={<ScanQrCodePage />}></Route>
        <Route path="/app/scan-id/entrance" element={<EntryPage />}></Route>
        <Route path="/app/scan-id/exit" element={<ExitPage />}></Route>
        <Route path="/app/dashboard" element={<DashboardPage />}></Route>
        <Route path="/app/upload-record" element={<UploadRecordPage />}></Route>
        <Route path="/app/account"></Route>
        <Route path="/app/community"></Route>
        <Route path="/app/settings"></Route>
      </Routes>
    </Router>
  );
}
