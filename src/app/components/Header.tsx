'use client';

import { FC, useState, useEffect } from 'react';
import { DemoModal } from './DemoModal';

interface HeaderProps {
  onReset: () => void;
  selectedPath: 'management' | 'worker' | null;
  mainRef?: React.RefObject<HTMLElement | null>;
}

export const Header: FC<HeaderProps> = ({ onReset, selectedPath, mainRef }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, [mainRef]);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      {/* Navigation Bar - Sticky Header */}
      <div className="sticky top-0 z-50 w-full bg-black/80 transition-all duration-300">
        <div className={`px-4 sm:px-6 lg:px-12 transition-all duration-300 ${
          isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className={`flex items-center gap-2 sm:gap-3 transition-transform duration-300 origin-left ${
              isScrolled ? 'scale-[0.7]' : 'scale-100'
            }`}>
              <img 
                src="/android-chrome-192x192.png" 
                alt="Tilt Logo" 
                width={64} 
                height={64}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="text-center text-white">intelligence + desktop and browser automation &middot; run locally</div>
            </div>
            
            <div className={`flex items-center gap-2 transition-transform duration-300 origin-right ${
              isScrolled ? 'scale-[0.7]' : 'scale-100'
            }`}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};