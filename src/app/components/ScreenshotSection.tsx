'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScreenshotCarousel } from './ScreenshotCarousel';

interface ScreenshotSectionProps {
  className?: string;
}

export const ScreenshotSection: FC<ScreenshotSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-950 to-slate-900 ${className}`}>
      <div className="relative h-full flex items-center justify-center">
        {/* Background glow effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              See It In <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Watch our AI agents interact with real applications and automate complex workflows
            </p>
          </div>
          
          <ScreenshotCarousel />
        </div>
      </div>
    </ScreenSection>
  );
};