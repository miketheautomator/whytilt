'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { DemoModal } from '../demo-modal';

interface HeaderProps {
  onReset: () => void;
  selectedPath: 'management' | 'worker' | null;
  mainRef?: React.RefObject<HTMLElement | null>;
}

export const Header: FC<HeaderProps> = ({ onReset, selectedPath, mainRef }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = mainRef?.current;
      if (mainElement) {
        const heroSectionHeight = window.innerHeight * 0.8;
        const scrollTop = mainElement.scrollTop;
        
        // Regular scroll handling for header
        const scrolled = scrollTop > heroSectionHeight;
        setIsScrolled(scrolled);
      }
    };

    const mainElement = mainRef?.current;
    if (mainElement && mounted) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, [mainRef, mounted]);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        theme="homepage"
      />
      
      {/* Navigation Bar - Sticky Header */}
      <div className="sticky top-0 z-50 w-full bg-black/80 transition-all duration-300">
        <div className={`px-4 sm:px-6 lg:px-12 transition-all duration-300 ${
          mounted && isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className={`flex items-center gap-2 sm:gap-3 transition-transform duration-300 origin-left ${
              mounted && isScrolled ? 'scale-[0.85]' : 'scale-100'
            }`}>
              <button 
                onClick={() => window.location.href = '/'}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              >
                <Image 
                  src="/logo.png" 
                  alt="Tilt Logo" 
                  width={64} 
                  height={64}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </button>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className={`text-center text-white hidden md:block transition-transform duration-300 origin-center ${
                mounted && isScrolled ? 'scale-[0.85]' : 'scale-100'
              }`}>intelligence + desktop and browser automation &middot; run locally</div>
            </div>
            
            <div className={`flex items-center gap-2 transition-transform duration-300 origin-right ${
              mounted && isScrolled ? 'scale-[0.7]' : 'scale-100'
            }`}>
              <a 
                href="/info/pricing"
                className="text-white text-xs font-medium hover:text-zinc-300 transition-colors duration-200 mr-8"
              >
                PRICING
              </a>
              {selectedPath && (
                <button 
                  onClick={onReset}
                  className="inline-flex px-3 py-1.5 bg-transparent border border-white/30 hover:border-white/40 text-white text-xs font-medium rounded-md transition-all duration-200 hover:bg-white/10"
                >
                  ← BACK TO START
                </button>
              )}
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex px-3 py-1.5 bg-transparent border border-white/30 hover:border-white/40 text-white text-xs font-medium rounded-md transition-all duration-200 hover:bg-white/10"
              >
                BOOK DEMO
              </button>
              <a 
                href="https://github.com/WhyTilt/tilt-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-transparent text-white text-xs rounded-md transition-all duration-200 hover:bg-white/10"
                style={{ fontFamily: 'var(--font-contrail-one), sans-serif' }}
              >
                <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" className="text-yellow-400" fill="currentColor">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                </svg>
                <span className="hidden sm:inline">Give us a star</span><span className="sm:hidden">Star us</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};