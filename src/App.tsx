// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './pages/AboutMe';


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;