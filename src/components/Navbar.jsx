import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import translations from '../i18n/translations';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = ({ scrollY }) => {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language]; // Obtener traducciones
  
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { key: 'nav_home', to: 'hero' },
    { key: 'nav_about', to: 'about' },
    { key: 'nav_skills', to: 'skills' },
    { key: 'nav_projects', to: 'projects' },
    { key: 'nav_contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-blue-primary/10"
      style={{
        backgroundColor: scrollY > 50 ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.7)',
      }}
      animate={{ boxShadow: scrollY > 50 ? '0 10px 30px rgba(0, 102, 255, 0.1)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-primary to-blue-secondary rounded-lg flex items-center justify-center cursor-pointer">
              <span className="text-white font-bold text-lg">JC</span>
            </div>
            <span className="text-white font-bold hidden sm:inline">José Castro</span>
          </motion.div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer relative group"
              >
                <motion.span
                  className="text-gray-300 group-hover:text-blue-primary transition-colors text-sm"
                  whileHover={{ y: -3 }}
                >
                  {t[item.key]}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-primary to-blue-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CONTROLS DERECHA */}
          <div className="flex items-center gap-4">
            {/* Theme toggle (Desktop Only) */}
            <motion.button
              className="hidden md:flex text-white opacity-80 hover:text-blue-primary transition-colors px-3 py-1 rounded-lg border border-blue-primary/30 hover:border-blue-primary/60 text-sm font-medium items-center justify-center"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.button>

            {/* Language toggle */}
            <motion.button
              className="text-white opacity-80 hover:text-blue-primary transition-colors px-3 py-1 rounded-lg border border-blue-primary/30 hover:border-blue-primary/60 text-sm font-medium"
              onClick={toggleLanguage}
              whileTap={{ scale: 0.9 }}
              title={language === 'es' ? 'Cambiar a inglés' : 'Change to English'}
            >
              {language === 'es' ? 'ES' : 'EN'}
            </motion.button>

            {/* Hamburger Menu (Mobile) */}
            <motion.button
              className="md:hidden text-white p-2 hover:bg-blue-primary/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2 border-t border-blue-primary/10 pt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2.5 text-gray-300 hover:text-blue-primary cursor-pointer rounded-lg hover:bg-blue-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t[item.key]}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;