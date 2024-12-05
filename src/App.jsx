import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from './Template';
import Nav from './Nav';
import LandingPage from './components/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-900 text-white text-5xl">
          Codeify
        </div>
      ) : (
        <>
          <Nav />
          
          <Router>
            <Routes>
              {/* Define routes for different components */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/Minor_Project" element={<LandingPage />} />
              <Route path="/Minor_Project/editor" element={<Template />} />
            </Routes>
          </Router>
          
        </>
      )}
    </>
  );
}

export default App;
