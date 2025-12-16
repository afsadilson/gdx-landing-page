import React from 'react';

interface PhoneMockupProps {
  className?: string;
  imageSrc?: string;
  alt?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  className = "",
  imageSrc = "",
  alt = "App screenshot showing Gamedex interface"
}) => {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl ${className}`}>
      {/* Physical Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen Container */}
      <div className="rounded-[2.2rem] overflow-hidden w-[292px] h-[622px] bg-[#0f1014] relative flex flex-col font-sans">
        
        {/* Dynamic Notch Island (Hardware Overlay) - Keeps it looking like a phone */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[24px] w-[80px] bg-black rounded-full z-30 pointer-events-none"></div>

        {/* Screenshot Image - Renders the user provided image directly */}
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover z-10"
        />
        
        {/* Glossy Reflection Overlay for realism */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20 rounded-[2.2rem]"></div>
      </div>
    </div>
  );
};