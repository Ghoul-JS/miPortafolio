import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import translations from '../i18n/translations';

const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, inView } = useInView({ threshold: 0.15 });

  const projects = [
    {
      id: 1,
      title: 'Libro Virtual Agroindustrial',
      description: language === 'es' 
        ? 'Plataforma educativa interactiva con simulaciones para el sector agroindustrial. Implementa modelos de simulación de procesos, visualizaciones dinámicas y contenido técnico estructurado para estudiantes y profesionales.'
        : 'Interactive educational platform with simulations for the agro-industrial sector. Implements process simulation models, dynamic visualizations, and structured technical content for students and professionals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      tech: ['React', 'TypeScript', 'Tailwind', 'Prisma', 'Express.js', 'JWT'],
      link: 'https://github.com/Ghoul-JS/libro-virtual-agroindustrial',
      accentColor: 'from-emerald-500 to-teal-500',
      accentHex: '#10b981',
      dates: '2026',
      featured: true,
    },
    {
      id: 2,
      title: 'Metal Crypt',
      description: language === 'es'
        ? 'Plataforma para registro de bandas musicales con autenticación, creación de álbumes y canciones. Backend robusto con API REST y frontend moderno.'
        : 'Platform for registering musical bands with authentication, album creation, and songs. Robust backend with REST API and modern frontend.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Node.js', 'Render'],
      link: 'https://github.com/Ghoul-JS/Metal-Crypt',
      accentColor: 'from-purple-500 to-pink-500',
      accentHex: '#a855f7',
      dates: 'Oct 2024 – Dic 2024',
      featured: false,
    },
    {
      id: 3,
      title: 'Online Nature',
      description: language === 'es'
        ? 'Plataforma web para preservación de fauna y flora. Incluye sistema de donaciones con métodos de pago integrados, gestión de campañas y panel de administración.'
        : 'Web platform for the preservation of flora and fauna. Includes donation system with integrated payment methods, campaign management, and admin panel.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'AWS'],
      link: 'https://github.com/ezeluiten/Online-Nature-PF-FRONT-',
      accentColor: 'from-green-500 to-teal-500',
      accentHex: '#22c55e',
      dates: 'Jul 2022 – Jun 2023',
      featured: false,
    },
    {
      id: 4,
      title: 'PI - Individual Project',
      description: language === 'es'
        ? 'Proyecto individual del bootcamp. API backend completa y frontend con funcionalidades avanzadas, autenticación, filtros y paginación.'
        : 'Individual bootcamp project. Complete backend API and frontend with advanced features, authentication, filters, and pagination.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      link: 'https://github.com/Ghoul-JS/PI-BACK',
      accentColor: 'from-yellow-500 to-orange-500',
      accentHex: '#f59e0b',
      dates: '2023',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <motion.div ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mb-4 block">{t.projects_title}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.projects_subtitle}
          </h2>
          <div className="section-line mt-4" />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-full"
              whileHover={{ y: -6 }}
            >
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col relative overflow-hidden">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 badge" style={{ color: '#34d399', borderColor: 'rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.08)' }}>
                    {language === 'es' ? 'Destacado' : 'Featured'}
                  </div>
                )}

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${project.accentHex}08 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border flex-shrink-0"
                  style={{
                    background: `${project.accentHex}12`,
                    borderColor: `${project.accentHex}30`,
                    color: project.accentHex,
                  }}
                >
                  {project.icon}
                </div>

                {/* Title & date */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs font-medium text-gray-500 mb-3">{project.dates}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs rounded-md font-medium border"
                      style={{
                        background: `${project.accentHex}08`,
                        borderColor: `${project.accentHex}25`,
                        color: `${project.accentHex}cc`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all w-fit mt-auto"
                  style={{
                    background: `${project.accentHex}12`,
                    borderColor: `${project.accentHex}30`,
                    color: project.accentHex,
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${project.accentHex}22`;
                    e.currentTarget.style.borderColor = `${project.accentHex}60`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${project.accentHex}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${project.accentHex}12`;
                    e.currentTarget.style.borderColor = `${project.accentHex}30`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <GitHubIcon />
                  {t.view_code}
                  <ArrowIcon />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All projects CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/Ghoul-JS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-blue-primary/30 text-blue-primary font-semibold rounded-xl hover:bg-blue-primary/8 hover:border-blue-primary/60 hover:shadow-lg hover:shadow-blue-primary/20 transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <GitHubIcon />
            {t.see_all_projects}
            <ExternalIcon />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;