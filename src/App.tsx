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
import UserSchoolStatus from './routes/noSchoolPage';
import UserVerificationStatus from './routes/notVerifiedPage';
import RegisterSchoolPage from './routes/createSchoolPage';
import RecordListPage from './routes/recordListPage';
import SponsorSuccessPage from './routes/sponsorSuccessPage';

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

        <Route
          path="/register-school"
          element={
            <AuthProvider>
              <ProtectedPage>
                <RegisterSchoolPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
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
        <Route
          path="/app/id-validation"
          element={
            <AuthProvider>
              <ProtectedPage>
                <IDValidaionPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/scan-id"
          element={
            <AuthProvider>
              <ProtectedPage>
                <ScanQrCodePage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/scan-id/entrance"
          element={
            <AuthProvider>
              <ProtectedPage>
                <EntryPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/scan-id/exit"
          element={
            <AuthProvider>
              <ProtectedPage>
                <ExitPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/dashboard"
          element={
            <AuthProvider>
              <ProtectedPage>
                <DashboardPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/upload-record"
          element={
            <AuthProvider>
              <ProtectedPage>
                <UploadRecordPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/students-record"
          element={
            <AuthProvider>
              <ProtectedPage>
                <RecordListPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route path="/app/account" />
        <Route path="/app/community" />
        <Route
          path="/app/sponsor/success"
          element={
            <AuthProvider>
              <ProtectedPage>
                <SponsorSuccessPage />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route path="/app/settings" />
        <Route
          path="/app/school-status"
          element={
            <AuthProvider>
              <ProtectedPage>
                <UserSchoolStatus />
              </ProtectedPage>
            </AuthProvider>
          }
        />
        <Route
          path="/app/verification-status"
          element={
            <AuthProvider>
              <ProtectedPage>
                <UserVerificationStatus />
              </ProtectedPage>
            </AuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
