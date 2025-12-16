import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/5 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             {/* Custom Gamedex Logo SVG */}
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <rect x="6" y="2" width="5" height="28" rx="1.5" className="fill-green-600" />
              <rect x="14" y="2" width="5" height="28" rx="1.5" className="fill-blue-500" />
              <rect x="25" y="2" width="5" height="28" rx="1.5" className="fill-brand-500" transform="rotate(12 23.5 16)" />
            </svg>
            <span className="text-xl font-display font-bold text-neutral-900 dark:text-white">
              Gamedex
            </span>
          </div>

          <div className="flex gap-6 text-neutral-400 dark:text-neutral-500">
             <a href="https://www.instagram.com/gamedex.app/" className="hover:text-brand-600 dark:hover:text-white transition-colors"><IoLogoInstagram className="w-5 h-5" /></a>
          </div>

          <div className="text-sm text-neutral-500">
            {t.footer.copyright} {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};