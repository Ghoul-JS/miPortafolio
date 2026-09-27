/**
 * Language Context for portfolio-jose
 * Provides language toggle between Spanish (es) and English (en)
 * Uses useState + context pattern - no external dependencies
 */

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({
  language: 'es',
  setLanguage: (lang) => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;