import React from 'react';
import { HashRouter } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <LanguageProvider>
          <SEOHead />
          <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 overflow-x-hidden selection:bg-brand-500/30 transition-colors duration-300">
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <DownloadSection />
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;