import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import translations from '../i18n/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t.email_label,
      value: t.email_value,
      link: `mailto:${t.email_value}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t.phone_label,
      value: t.phone_value,
      link: `tel:+573168435020`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t.location_label,
      value: t.location_value,
      link: '#',
    },
  ];

  const socialLinks = [
    {
      name: t.github_name,
      url: 'https://github.com/Ghoul-JS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: t.linkedin_name,
      url: 'https://www.linkedin.com/in/jose-castro-096435343/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: t.instagram_name,
      url: 'https://www.instagram.com/joseph_spiegel.666/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // TODO: Reemplaza la URL abajo con tu endpoint de Formspree después de crear tu cuenta gratis en emailjs.com o formspree.io
    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(async (response) => {
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        alert(language === 'es' ? 'Error al enviar. Por favor inténtalo de nuevo.' : 'Error sending. Please try again.');
      }
    })
    .catch((error) => {
      alert(language === 'es' ? 'Error de red. Por favor inténtalo de nuevo.' : 'Network error. Please try again.');
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: -24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mb-4 block">{language === 'es' ? 'Trabajemos Juntos' : 'Let\'s Work Together'}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            {t.contact_title} <span className="text-gradient">{language === 'es' ? 'Contacto' : 'Touch'}</span>
          </h2>
          <p className="text-gray-400 text-lg mt-2">{t.contact_subtitle}</p>
          <div className="section-line mt-5" />
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-5 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl text-center group"
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-primary/10 border border-blue-primary/20 flex items-center justify-center text-blue-primary group-hover:border-blue-primary/50 group-hover:bg-blue-primary/15 transition-all">
                {info.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{info.label}</h3>
              <p className="text-gray-400 text-sm group-hover:text-blue-primary transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          className="max-w-2xl mx-auto glass-card p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <form className="space-y-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="contact-name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.name_placeholder}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 focus:ring-1 focus:ring-blue-primary/30 focus:bg-white/[0.05] transition-all text-sm"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="contact-email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.email_placeholder}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 focus:ring-1 focus:ring-blue-primary/30 focus:bg-white/[0.05] transition-all text-sm"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="contact-message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.message_placeholder}
                required
                rows="5"
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 focus:ring-1 focus:ring-blue-primary/30 focus:bg-white/[0.05] transition-all resize-none text-sm"
              />
            </div>

            <motion.button
              type="submit"
              id="contact-submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-primary to-blue-secondary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-primary/30 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t.form_success}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t.send_message}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-500 text-sm mb-5">{t.social_title}</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-primary transition-colors"
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;