'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';
import { WaitlistModal } from './WaitlistModal';
import { DemoModal } from './DemoModal';

interface HeroSectionProps {
  typed: string;
  className?: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ typed, className = '' }) => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    <ScreenSection className={`hero-bg ${className}`}>
      {/* Background Image with Blur and Low Opacity - Hidden on mobile */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-no-repeat opacity-30 blur-sm hidden md:block"
          style={{
            backgroundImage: 'url(/screenshot-1.png)',
            backgroundSize: '80%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 hidden md:block"></div>
        <div className="background-glow"></div>
      </div>
      
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/favicon-32x32.png" 
              alt="Automagic IT Logo" 
              width={24} 
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Automagic IT
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/AutomagicIT/the-automator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent border border-white/30 hover:border-white/40 text-white text-xs font-medium rounded-md transition-all duration-200 hover:bg-white/10"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Star Us
            </a>
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden md:inline-flex px-3 py-1.5 bg-transparent border border-white/30 hover:border-white/40 text-white text-xs font-medium rounded-md transition-all duration-200 hover:bg-white/10"
            >
              BOOK DEMO
            </button>
            <button 
              onClick={() => setIsWaitlistModalOpen(true)}
              className="hidden md:inline-flex px-3 py-1.5 bg-white text-black text-xs font-medium rounded-md transition-all duration-200 hover:bg-gray-100"
            >
              JOIN WAITLIST
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 h-full flex flex-col max-w-7xl mx-auto pt-20 sm:pt-24 pb-8 sm:pb-16">
        <div className="px-4 sm:px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-8 sm:mb-12 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-white text-xs sm:text-sm font-medium">Early Access • Limited Alpha Testing</span>
          </div>
          
          {/* Main Headline - Mobile Optimized */}
          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-6 sm:mb-8 leading-[1.1] tracking-tight">
            <span className="gradient-text block">Automate</span>
            <span className="gradient-text block overflow-visible">
              <div className="text-left h-[2.5em] sm:h-[2.5em] w-full overflow-visible whitespace-nowrap">
                {typed}
                <span className="border-r-2 animate-pulse ml-2 border-blue-500" />
              </div>
            </span>
          </h1>
          
          {/* Your Original Subtitle */}
          <p className="text-xl sm:text-xl leading-snug tracking-tight text-gray-300 mb-6 sm:mb-8 max-w-2xl lg:max-w-none">
            We build intelligent automation models to create digital workers that do real desktop work, using web browsers and desktop applications.
          </p>
          
          {/* Your Value Prop */}
          <div className="text-xl sm:text-xl text-white font-semibold mb-8 sm:mb-12 max-w-2xl">
            You&apos;re not buying software. You&apos;re buying an agent that gives you back time and money.
          </div>
        </div>

        {/* Bottom Content - Positioned at bottom */}
        <div className="px-4 sm:px-6 lg:px-12 w-full">
          {/* Your Original Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-base sm:text-lg"
            >
              Schedule Demo
            </button>
            <button 
              onClick={() => setIsWaitlistModalOpen(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/20 hover:border-white/30 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5 text-base sm:text-lg"
            >
              Join Waitlist
            </button>
          </div>
        </div>

      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-80 w-full bg-gradient-to-b from-transparent to-[#090A0C] pointer-events-none"></div>
      
      <ScrollArrow onClick={() => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }} />
    </ScreenSection>
    </>
  );
};
