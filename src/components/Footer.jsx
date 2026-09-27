import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import translations from '../i18n/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  const footerLinks = [
    { name: t.github_name, url: 'https://github.com/Ghoul-JS' },
    { name: t.linkedin_name, url: 'https://www.linkedin.com/in/jose-castro-096435343/' },
    { name: t.instagram_name, url: 'https://www.instagram.com/joseph_spiegel.666/' },
  ];

  return (
    <footer className="border-t border-blue-primary/10 py-12 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-primary to-blue-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">JC</span>
            </div>
            <span className="text-white font-bold">{t.footer_name}</span>
          </div>

          <div className="flex gap-8">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} {t.footer_name}. {t.footer_all_rights}
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full border border-blue-primary/30 text-blue-primary hover:bg-blue-primary/10 hover:border-blue-primary/80 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t.scroll_top}
            title={t.scroll_top}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;