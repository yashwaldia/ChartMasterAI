import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Upgrade from './pages/Upgrade';


function App() {
  return (
    <BrowserRouter>
      <div 
        className="min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #0A0B1A 0%, #1A1B2E 50%, #0A0B1A 100%)',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/upgrade" element={<Upgrade />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
