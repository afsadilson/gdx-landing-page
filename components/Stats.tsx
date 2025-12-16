import React from 'react';
import { useLanguage } from './LanguageContext';

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-y border-neutral-200 dark:border-white/5 bg-neutral-100/50 dark:bg-neutral-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {t.stats.items.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight text-neutral-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};