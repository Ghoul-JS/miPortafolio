import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const Navbar = ({ scrollY }) => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  const navItems = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Acerca de', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Contacto', to: 'contact' },
  ];

  const navItemsEN = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-blue-primary/10"
      style={{
        backgroundColor: scrollY > 50 ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.7)',
      }}
      animate={{ boxShadow: scrollY > 50 ? '0 10px 30px rgba(0, 102, 255, 0.1)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-primary to-blue-secondary rounded-lg flex items-center justify-center cursor-pointer">
              <span className="text-white font-bold text-lg">JC</span>
            </div>
            <span className="text-white font-bold hidden sm:inline">José Castro</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {(language === 'es' ? navItems : navItemsEN).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer relative group"
              >
                <motion.span
                  className="text-gray-300 group-hover:text-blue-primary transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {item.name}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-primary to-blue-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>

          {mobileMenuOpen && (
            <motion.div
              className="md:hidden pb-4 space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {(language === 'es' ? navItems : navItemsEN).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-gray-300 hover:text-blue-primary cursor-pointer rounded-lg hover:bg-dark-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}

          {/* Language toggle button */}
          <motion.button
            className="md:hidden text-white opacity-80 hover:text-blue-primary transition-colors"
            onClick={toggleLanguage}
            whileTap={{ scale: 0.9 }}
            title={language === 'es' ? 'Cambiar a inglés' : 'Change to English'}
            style={{
              padding: '8px',
              fontSize: '12px',
            }}
          >
            {language === 'es' ? 'ES' : 'EN'}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;