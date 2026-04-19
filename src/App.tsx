// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './pages/AboutMe';
import Certifications from './pages/Certificates';
import Projects from './pages/Projects';


function Home() {
  return (
    <>
      <Hero />
      {/* Certificados e Game entrarão aqui depois */}
    </>
  );
}

function App() {
  return (
    <Router basename='/'>
      <div className="min-h-screen bg-[#eef5fd]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutMe />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;