import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translation } from '../types';
import { CONTENT } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'gamedex_language_preference';
const SUPPORTED_LANGUAGES: Language[] = ['en', 'pt', 'es', 'it', 'fr', 'de', 'ja'];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Use lazy initialization for state to prevent flash of default language
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check Local Storage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language;
      if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
        return savedLang;
      }
      
      // 2. Check Browser Language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (SUPPORTED_LANGUAGES.includes(browserLang)) {
        return browserLang;
      }
    }
    
    // 3. Default
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const value = {
    language,
    setLanguage,
    t: CONTENT[language] || CONTENT['en'], // Fallback to English if something goes wrong
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};