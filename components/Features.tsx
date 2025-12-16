import React, { useCallback, useEffect, useState } from 'react';
import { IoBookmarkOutline, IoChevronBackOutline, IoChevronForwardOutline, IoLayersOutline, IoPieChartOutline, IoSearchOutline } from 'react-icons/io5';
import { useLanguage } from './LanguageContext';

const icons = [IoLayersOutline, IoSearchOutline, IoBookmarkOutline, IoPieChartOutline];
const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per slide

// Now simple image renderer instead of complex UI
const FeatureVisual = ({ index }: { index: number }) => {
    // Defines the expected filename for each slide index
    const imageSrc = `./feature_${index}.png`;

    const altTexts = [
        "Gamedex universal tracking interface showing games across PC, PlayStation, Xbox, Nintendo and Mobile platforms",
        "Gamedex smart discovery search engine displaying game details, release dates, publishers and ratings",
        "Gamedex collection management system organizing games into Own, Wishlist and Beat categories",
        "Gamedex statistics dashboard visualizing gaming habits, completion rates and genre preferences"
    ];

    return (
        <img
            src={imageSrc}
            alt={altTexts[index] || `Gamedex feature ${index + 1} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
        />
    );
}

export const Features: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch state for swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % t.features.list.length);
  }, [t.features.list.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + t.features.list.length) % t.features.list.length);
  }, [t.features.list.length]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentSlide]); // Depend on currentSlide to reset timer when manually changed

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="features" className="py-24 bg-white dark:bg-neutral-900 relative transition-colors duration-300 overflow-hidden">
        {/* Subtle grid pattern for light mode */}
        <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        {/* Keyframes for Progress Bar Animation */}
        <style>{`
            @keyframes progress {
                0% { width: 0%; }
                100% { width: 100%; }
            }
        `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            {t.features.title}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Navigation Buttons - Desktop only */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 shadow-lg hover:scale-110 transition-transform hidden md:flex items-center justify-center"
                aria-label="Previous feature"
            >
                <IoChevronBackOutline className="w-6 h-6" />
            </button>

            <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 shadow-lg hover:scale-110 transition-transform hidden md:flex items-center justify-center"
                aria-label="Next feature"
            >
                <IoChevronForwardOutline className="w-6 h-6" />
            </button>

            {/* Slides Track */}
            <div className="overflow-hidden rounded-3xl relative shadow-2xl border border-neutral-200 dark:border-neutral-800">
                <div 
                    className="flex transition-transform duration-500 ease-out will-change-transform bg-neutral-50 dark:bg-neutral-950"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {t.features.list.map((feature, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div key={index} className="w-full flex-shrink-0">
                                <div className="group relative flex flex-col md:flex-row h-full overflow-hidden">
                                    
                                    {/* Content Side */}
                                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        
                                        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
                                            {feature.title}
                                        </h3>
                                        
                                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Visual Side - Phone Mockup Section */}
                                    <div className="flex-1 min-h-[400px] md:min-h-[500px] relative overflow-hidden bg-neutral-100 dark:bg-neutral-900/50 border-t md:border-t-0 md:border-l border-neutral-100 dark:border-neutral-800 flex justify-center items-end pt-8">
                                         {/* Phone Frame */}
                                         <div className="w-[260px] h-[450px] shadow-2xl rounded-t-[2.5rem] overflow-hidden border-x-[8px] border-t-[8px] border-neutral-800 bg-neutral-800 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500 relative">
                                            {/* Notch */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 pointer-events-none"></div>
                                            
                                            {/* Screen Area - Now displaying full image */}
                                            <div className="w-full h-full bg-neutral-900 overflow-hidden relative">
                                                 <FeatureVisual index={index} />
                                                 {/* Glossy overlay */}
                                                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20"></div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Progress Bar (Timer) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-200 dark:bg-neutral-800 z-30">
                    <div 
                        key={currentSlide} // Reset animation on slide change
                        className="h-full bg-brand-500"
                        style={{
                            width: '0%',
                            animation: `progress ${AUTO_PLAY_INTERVAL}ms linear`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                            animationFillMode: 'forwards'
                        }}
                    ></div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
                {t.features.list.map((feature, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${
                            currentSlide === idx
                                ? 'w-8 h-2 bg-brand-500'
                                : 'w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                        }`}
                        aria-label={`Go to ${feature.title} feature`}
                        aria-current={currentSlide === idx ? 'true' : 'false'}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};