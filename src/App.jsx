import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <ResumeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<FormPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
