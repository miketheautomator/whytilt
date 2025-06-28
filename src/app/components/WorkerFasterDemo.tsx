'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScreenshotCarousel } from './ScreenshotCarousel';

interface WorkerFasterDemoProps {
  className?: string;
}

export const WorkerFasterDemo: FC<WorkerFasterDemoProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Screenshots Carousel */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          <ScreenshotCarousel />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real speed.</span> 
          Watch tasks get completed in minutes, not hours.
        </p>
      </div>
    </ScreenSection>
  );
};