'use client';

import { FC, useState, useEffect, useRef } from 'react';
import { ScreenSection } from './screen-section';

interface HeroSectionProps {
  onPathSelect: (path: 'management' | 'worker') => void;
  onReset: () => void;
  selectedPath: 'management' | 'worker' | null;
  className?: string;
  mainRef?: React.RefObject<HTMLElement | null>;
}

export const HeroSection: FC<HeroSectionProps> = ({ onPathSelect, onReset, selectedPath, className = '', mainRef }) => {
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const [pulseButtons, setPulseButtons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTopBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = mainRef?.current;
      if (mainElement) {
        const heroSectionHeight = window.innerHeight * 0.8;
        const scrollTop = mainElement.scrollTop;
        
        // Track scroll state for tagline visibility
        setIsScrolled(scrollTop > heroSectionHeight * 0.3);
        
        // If user tries to scroll past hero without selecting a path
        if (scrollTop > heroSectionHeight * 0.4 && !selectedPath) {
          // Prevent further scrolling
          mainElement.scrollTop = heroSectionHeight * 0.4;
          
          // Show prompt and pulse buttons
          setShowScrollPrompt(true);
          setPulseButtons(true);
          
          // Remove pulse after animation
          setTimeout(() => {
            setPulseButtons(false);
          }, 1000);
        }
        
        // Handle scroll-to-top button visibility
        const scrollThreshold = window.innerHeight * 0.5;
        if (scrollToTopBtnRef.current) {
          if (scrollTop > scrollThreshold) {
            scrollToTopBtnRef.current.classList.add('show');
          } else {
            scrollToTopBtnRef.current.classList.remove('show');
          }
        }
      }
    };

    const mainElement = mainRef?.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, [selectedPath, mainRef]);

  return (
    <ScreenSection className={`hero-bg ${className}`}>
      {/* Mobile Tagline - Absolutely positioned under header, no background */}
      <div className={`absolute top-16 left-0 right-0 z-40 text-center text-white/90 text-sm py-2 px-4 md:hidden transition-all duration-300 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        intelligence + desktop and browser automation · run locally
      </div>
      {/* Background Image with Blur and Low Opacity - Hidden on mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 hidden md:block"></div>
        <div className="background-glow"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-30 h-full flex flex-col max-w-7xl mx-auto pt-20 sm:pt-24 pb-20 sm:pb-32">
        <div className="px-4 sm:px-6 lg:px-12 w-full max-w-7xl flex-1 flex flex-col justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-8 sm:mb-12 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-white text-xs sm:text-sm font-medium">Early Access • Limited Spots</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 sm:mb-8 leading-[1.1] tracking-tight text-white max-w-6xl">
            Real intelligence. Real desktop. Real work.
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 mb-8 sm:mb-12 max-w-5xl">
            Tilt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.
          </p>
          
        </div>

        {/* Bottom Content - Positioned at bottom */}
        <div className="px-4 sm:px-6 lg:px-12 w-full">
          {/* Path Selection Buttons - Only show when no path is selected */}
          {!selectedPath && (
            <div className="relative">
              {/* Prompt */}
              <p className="text-lg sm:text-xl text-white font-semibold mb-4">
                Let&apos;s customize your experience
              </p>
              
              {/* Scroll prompt message - appears above buttons */}
              {showScrollPrompt && (
                <div className="text-left mb-4">
                  <p className="text-yellow-400 font-semibold text-lg animate-pulse">
                    Click one to continue your journey
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
                <button 
                  onClick={() => {
                    setShowScrollPrompt(false);
                    setPulseButtons(false);
                    onPathSelect('management');
                  }}
                  className={`px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-lg ${
                    pulseButtons ? 'animate-pulse scale-105 ring-4 ring-blue-400 ring-opacity-50' : ''
                  }`}
                >
                  I manage people
                </button>
                <button 
                  onClick={() => {
                    setShowScrollPrompt(false);
                    setPulseButtons(false);
                    onPathSelect('worker');
                  }}
                  className={`px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 text-lg ${
                    pulseButtons ? 'animate-pulse scale-105 ring-4 ring-teal-400 ring-opacity-50' : ''
                  }`}
                >
                  I do the work myself
                </button>
              </div>
            </div>
          )}
          
          {/* Path indicator when a path is selected */}
          {selectedPath && (
            <div className="flex items-center gap-3">
              <div className={`px-6 py-3 rounded-lg border-2 ${
                selectedPath === 'management' 
                  ? 'border-blue-500 bg-blue-500/20 text-blue-200' 
                  : 'border-teal-500 bg-teal-500/20 text-teal-200'
              }`}>
                <span className="font-semibold">
                  {selectedPath === 'management' ? '👔 Management Track' : '🛠️ Worker Track'}
                </span>
              </div>
              <button 
                onClick={onReset}
                className="px-4 py-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                Switch Path
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-80 w-full bg-gradient-to-b from-transparent to-[#090A0C] pointer-events-none"></div>
    </ScreenSection>
  );
};