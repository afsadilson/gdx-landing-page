import React, { useEffect, useRef, useState } from 'react';
import { IoChevronDownOutline, IoCloseOutline, IoGlobeOutline, IoMenuOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { Language } from '../types';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  // Separate refs for desktop and mobile dropdown containers
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is inside either desktop or mobile language menu
      const isInsideDesktop = desktopLangRef.current && desktopLangRef.current.contains(target);
      const isInsideMobile = mobileLangRef.current && mobileLangRef.current.contains(target);

      if (!isInsideDesktop && !isInsideMobile) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangSelect = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <rect x="6" y="2" width="5" height="28" rx="1.5" className="fill-green-600" />
              <rect x="14" y="2" width="5" height="28" rx="1.5" className="fill-blue-500" />
              <rect x="25" y="2" width="5" height="28" rx="1.5" className="fill-brand-500" transform="rotate(12 23.5 16)" />
            </svg>
            <span className="text-2xl font-display font-bold text-neutral-900 dark:text-white">
              Gamedex
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-white transition-colors">
              {t.nav.features}
            </a>
            {/* <a href="#testimonials" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-white transition-colors">
              {t.nav.testimonials}
            </a> */}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {theme === 'dark' ? <IoSunnyOutline className="w-5 h-5" /> : <IoMoonOutline className="w-5 h-5" />}
            </button>

            {/* Language Dropdown */}
            <div className="relative" ref={desktopLangRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 transition-all text-xs font-semibold text-neutral-700 dark:text-neutral-200 uppercase"
              >
                <IoGlobeOutline className="w-3 h-3" />
                {language}
                <IoChevronDownOutline className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute top-full mt-2 right-0 w-32 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors ${
                        language === lang.code ? 'text-brand-600 dark:text-brand-400 font-bold' : 'text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#download"
              className="px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-bold hover:bg-brand-600 dark:hover:bg-brand-50 transition-colors shadow-lg shadow-neutral-900/10 dark:shadow-white/5"
            >
              {t.nav.download}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <div className="relative" ref={mobileLangRef}>
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-semibold text-neutral-700 dark:text-neutral-200 uppercase"
                >
                  {language}
                </button>
                {langMenuOpen && (
                <div className="absolute top-full mt-2 right-0 w-32 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors ${
                        language === lang.code ? 'text-brand-600 dark:text-brand-400 font-bold' : 'text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
             </div>

             <button 
              onClick={toggleTheme}
              className="text-neutral-600 dark:text-neutral-300"
            >
              {theme === 'dark' ? <IoSunnyOutline className="w-5 h-5" /> : <IoMoonOutline className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-900 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-white p-2"
            >
              {mobileMenuOpen ? <IoCloseOutline className="w-6 h-6" /> : <IoMenuOutline className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-white/10 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/5"
            >
              {t.nav.features}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/5"
            >
              {t.nav.testimonials}
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 text-center px-3 py-3 rounded-lg bg-brand-500 text-white font-bold"
            >
              {t.nav.download}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};