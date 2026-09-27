import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const words = ['Full Stack Developer', 'Ing. de Software', 'IA & Multiagentes', 'Creador de Soluciones'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-primary text-lg font-semibold mb-4 tracking-widest uppercase"
        >
          Bienvenido a mi portafolio
        </motion.p>

        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">Hola, soy</span>
          <motion.span
            className="block text-gradient font-black animate-glow-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            José Castro
          </motion.span>
        </motion.h1>

        <motion.div
          className="h-20 flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <div className="text-2xl sm:text-3xl text-blue-secondary font-semibold min-h-[40px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Cursando <span className="text-blue-primary font-medium">Ingeniería de Software</span>, con Tecnología en Desarrollo de Software.
          Especializado en stacks MERN/PERN y en el uso de{' '}
          <span className="text-blue-primary font-medium">IA con multiagentes</span> para automatizaciones y desarrollo moderno.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-primary to-blue-secondary text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-primary/50 group relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver mis proyectos
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </span>
            </motion.button>
          </Link>

          <motion.a
            href="https://github.com/Ghoul-JS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-primary text-blue-primary font-bold rounded-lg hover:bg-blue-primary/10 hover:shadow-lg hover:shadow-blue-primary/30 transition-all inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visita mi GitHub
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-400 text-sm mb-2">Desplázate para explorar</span>
          <svg className="w-6 h-6 text-blue-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-blue-primary/30 rounded-lg pointer-events-none"
        animate={{
          rotate: 360,
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-32 h-32 border border-blue-secondary/20 rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
