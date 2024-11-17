import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/main';
// import Modal from './components/modal';
import AppPage from './routes/app';
import IDValidaionPage from './routes/idValidation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />}></Route>
        <Route path="/app/id-validation" element={<IDValidaionPage />}></Route>
        <Route path="/app/scan-id"></Route>
        <Route path="/app/dashboard"></Route>
        <Route path="/app/upload"></Route>
        <Route path="/app/account"></Route>
        <Route path="/app/community"></Route>
        <Route path="/app/settings"></Route>
      </Routes>
    </Router>
  );
}
