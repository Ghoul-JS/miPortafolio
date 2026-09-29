import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageContext, { useLanguage } from './i18n/LanguageContext';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="fixed w-6 h-6 border border-blue-primary/60 rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transition: 'all 0.06s ease-out',
        }}
      />
      <div
        className="fixed w-2 h-2 bg-blue-primary rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePosition.x - 4}px`,
          top: `${mousePosition.y - 4}px`,
          transition: 'all 0.1s ease-out',
        }}
      />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 via-transparent to-transparent" />
        <motion.div
          className="absolute w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ left: '5%', top: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ right: '5%', bottom: '10%' }}
        />
      </div>

      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
