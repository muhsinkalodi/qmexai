import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import LoadingScreen from './components/ui/LoadingScreen';
import { useState, useEffect } from 'react';

import { HelmetProvider } from 'react-helmet-async';
import GlobalSEO from './components/seo/GlobalSEO';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <HelmetProvider>
      <Router>
        <GlobalSEO />
        <div className="flex flex-col min-h-screen bg-white">
          {/* Main Content Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Base Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                {/* Region-specific Routes */}
                <Route path="/:region" element={<Home />} />
                <Route path="/:region/about" element={<About />} />
                <Route path="/:region/services" element={<Services />} />
                <Route path="/:region/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
