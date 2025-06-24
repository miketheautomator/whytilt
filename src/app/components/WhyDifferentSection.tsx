import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WhyDifferentSectionProps {
  className?: string;
}

export const WhyDifferentSection: FC<WhyDifferentSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-[#0a0b0f] to-[#071a2c] ${className}`}>
      <svg
        className="absolute -bottom-48 left-[-40%] h-320 w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-7xl pointer-events-none z-0"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="why-gradient" cx="100%">
            <stop offset="0%" stopColor="#233d6d33" />
            <stop offset="53.95%" stopColor="#0b234033" />
            <stop offset="100%" stopColor="#0a0b0f00" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#why-gradient)" />
      </svg>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="inline-block w-8 h-8 bg-gradient-to-tr from-orange-400 to-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-2xl flex items-center justify-center w-full h-full">A</span>
          </span>
          <span className="text-2xl font-bold text-white tracking-tight flex items-end">
            Automagic&nbsp;<span className="text-base font-semibold text-white mb-0.5">IT</span>
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight">Why Automagic IT is Different</h2>
          <p className="text-gray-300 text-lg max-w-2xl mb-10 leading-relaxed mx-auto">
            The only automation platform that actually <span className="text-orange-400 font-bold">uses a real computer</span>—not a browser simulation. No more brittle scripts, no more DOM hacks, no more endless maintenance. Just real, intelligent automation that works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center bg-[#101a2a]/80 px-8 py-10 shadow-lg border border-[#1a263a]">
            <h3 className="text-2xl font-bold text-white mb-4">More Reliable</h3>
            <p className="text-blue-100 text-lg mb-4">Eliminate fragile scripts and endless maintenance. Automagic IT uses a real desktop VM and browser, so you avoid the brittleness of headless tools that break every time a website changes.</p>
            <span className="inline-block bg-orange-400/10 text-orange-200 font-semibold px-4 py-1 rounded-full text-sm mt-auto">Rock solid</span>
          </div>
          <div className="flex flex-col items-center bg-[#101a2a]/80 px-8 py-10 shadow-lg border border-[#1a263a]">
            <h3 className="text-2xl font-bold text-white mb-4">Less Complexity</h3>
            <p className="text-blue-100 text-lg mb-4">No more DOM hacks or JavaScript headaches. Our AI interacts with a real browser and desktop—no stubbing, no hardcoding, and no fighting with site quirks. It just works, every time.</p>
            <span className="inline-block bg-orange-400/10 text-orange-200 font-semibold px-4 py-1 rounded-full text-sm mt-auto">No more hacks</span>
          </div>
          <div className="flex flex-col items-center bg-[#101a2a]/80 px-8 py-10 shadow-lg border border-[#1a263a]">
            <h3 className="text-2xl font-bold text-white mb-4">True Intelligence</h3>
            <p className="text-blue-100 text-lg mb-4">Our AI model is as adaptable as a real assistant. It handles popups, dynamic content, and new workflows—no brittle scripts, just real results.</p>
            <span className="inline-block bg-orange-400/10 text-orange-200 font-semibold px-4 py-1 rounded-full text-sm mt-auto">Actually smart</span>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};
