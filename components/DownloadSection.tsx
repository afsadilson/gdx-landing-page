import React from 'react';
import { useLanguage } from './LanguageContext';
import { IoLogoApple, IoLogoAndroid } from 'react-icons/io5';

export const DownloadSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            {t.download_section.title}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
            {t.download_section.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/app/gamedex/id1644161325"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-neutral-800 dark:hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <IoLogoApple className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>{t.download_section.cta_primary}</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gamedex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <IoLogoAndroid className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>{t.download_section.cta_secondary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};