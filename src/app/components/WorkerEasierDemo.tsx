'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScreenshotCarousel } from './ScreenshotCarousel';

interface WorkerEasierDemoProps {
  className?: string;
}

export const WorkerEasierDemo: FC<WorkerEasierDemoProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Screenshots Carousel */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          <ScreenshotCarousel />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real relief.</span>{' '}
          Watch the boring stuff get done while you focus on better things.
        </p>
      </div>
    </ScreenSection>
  );
};