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
    <ScreenSection className={`bg-black ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8 sm:py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/favicon-32x32.png" 
            alt="Automagic IT Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold text-white tracking-tight flex items-end">
            Automagic&nbsp;
            <span className="text-base font-semibold text-white mb-0.5">
              IT
            </span>
          </span>
        </div>
        
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full w-fit">
          <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
          <span className="text-zinc-300 text-sm font-medium">Early Access • Limited Alpha Testing</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-tight min-h-[4em] sm:min-h-[3.4em] md:min-h-[3.2em] lg:min-h-[2.8em] xl:min-h-[2.6em]">
          Automate{" "}
          <span className="text-[color:var(--accent)] inline-block min-h-[2em] align-top">
            {typed}
            <span className="border-r-2 border-[color:var(--accent)] animate-pulse ml-1" />
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 mb-6 sm:mb-8 leading-relaxed max-w-3xl lg:max-w-4xl">
          We build intelligent automation models to create digital workers that do real desktop work, using web browsers and desktop applications.
        </p>
        
        <div className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-6 sm:mb-8 max-w-3xl lg:max-w-4xl">
          You&apos;re not buying software. You&apos;re buying an agent that gives you back time and money.
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[color:var(--accent)] text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-[color:var(--accent)]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule Demo
          </button>
          <button 
            onClick={() => setIsWaitlistModalOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-600 text-zinc-300 rounded-lg font-semibold text-base sm:text-lg hover:bg-zinc-800 hover:text-white transition-all duration-200"
          >
            Join Waitlist
          </button>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
            <span>Currently testing with select clients</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
            <span>Limited spots available</span>
          </div>
        </div>
      </div>
      
      <ScrollArrow onClick={() => {
        const nextSection = document.querySelector('[data-section="mystery"]');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </ScreenSection>
    </>
  );
};
