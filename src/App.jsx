import './styles/app.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import RoutePage from './pages/RoutePage';
import ProjetsPage from './pages/ProjetsPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<RoutePage />} />
          <Route path="/projects" element={<ProjetsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
