import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/main';
import { AppPage } from './routes/app';
import IDValidaionPage from './routes/idValidationPage';
import ScanQrCodePage from './routes/scanQRCodePage';
import { EntryPage, ExitPage } from './routes/entryExitPage';
import DashboardPage from './routes/dashboardPage';
import UploadRecordPage from './routes/uploadRecordPage';
import SignInPage from './routes/signInPage';
import SignUpPage from './routes/signUpPage';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { AuthProvider } from './components/authProvider';
import ProtectedPage from './components/protectedPage';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create-school" element={<SignUpPage />} />
        <Route
          path="/app"
          element={
            <AuthProvider>
              <ProtectedPage>
                <AppPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route path="/app/id-validation" element={<IDValidaionPage />} />
        <Route path="/app/scan-id" element={<ScanQrCodePage />} />
        <Route path="/app/scan-id/entrance" element={<EntryPage />} />
        <Route path="/app/scan-id/exit" element={<ExitPage />} />
        <Route path="/app/dashboard" element={<DashboardPage />} />
        <Route path="/app/upload-record" element={<UploadRecordPage />} />
        <Route path="/app/account" />
        <Route path="/app/community" />
        <Route path="/app/settings" />
      </Routes>
    </BrowserRouter>
  );
}
