import React from 'react';
import { IoCheckmarkCircleOutline, IoGameControllerOutline, IoLogoAndroid, IoLogoApple, IoStar } from 'react-icons/io5';
import { useLanguage } from './LanguageContext';
import { PhoneMockup } from './PhoneMockup';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden selection:bg-brand-500/30">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
            
            {/* Gradient Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        {t.hero.badge}
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                        {t.hero.title.split('\n').map((line, i) => (
                            <span key={i} className="block">{line}</span>
                        ))}
                    </h1>
                    
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                        <a
                            href="https://apps.apple.com/app/gamedex/id1644161325"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Gamedex on Apple App Store"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-neutral-800 dark:hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <IoLogoApple className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>{t.hero.cta_primary}</span>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.gamedex"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Gamedex on Google Play Store"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <IoLogoAndroid className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>{t.hero.cta_secondary}</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="flex -space-x-2">
                            {[51,28,23,11].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Gamedex user ${i - 50} profile picture`} loading="lazy" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900" />
                            ))}
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-1 text-accent-500">
                                {[1,2,3,4,5].map(i => <IoStar key={i} className="w-3 h-3" />)}
                            </div>
                            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                                {t.hero.users_count}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Image / Mockup */}
                <div className="flex-1 w-full max-w-[500px] lg:max-w-none perspective-1000">
                    <div className="relative z-10 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 preserve-3d">
                        {/* Updated to use the local screenshot.png */}
                        <PhoneMockup className="mx-auto" imageSrc="./dashboard_screen.png" alt="Gamedex app dashboard showing game collection with statistics and featured games" />
                        
                        {/* Floating Elements */}
                        <div className="absolute -right-4 top-20 z-20 bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-xl border border-neutral-200 dark:border-white/5 animate-bounce animation-delay-2000 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                    <IoGameControllerOutline className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Just added</div>
                                    <div className="text-sm font-bold text-neutral-900 dark:text-white">Elden Ring</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-8 bottom-40 z-20 bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-xl border border-neutral-200 dark:border-white/5 animate-bounce animation-delay-4000 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400">
                                    <IoCheckmarkCircleOutline className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Achievement Unlocked</div>
                                    <div className="text-sm font-bold text-neutral-900 dark:text-white">Collection Master</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};