import React from 'react';

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white text-center">
            Designed for Speed
        </h2>
      </div>
      
      {/* Infinite Scroll Marquee Effect Container */}
      <div className="relative w-full">
        {/* Gradients to hide edges - Adaptive for Light/Dark */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-neutral-100 dark:from-neutral-950 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-neutral-100 dark:from-neutral-950 to-transparent pointer-events-none"></div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 snap-x hide-scrollbar justify-start md:justify-center">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="flex-none snap-center w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] bg-neutral-900 border-[8px] border-neutral-800 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                    <img 
                        src={`https://picsum.photos/400/800?random=${i+50}`} 
                        alt="App Screen" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/50"></div>
                 </div>
             ))}
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};