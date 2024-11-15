import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './routes/home/main';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app"></Route>
        <Route path="/app/id-validation"></Route>
      </Routes>
    </Router>
  );
}
