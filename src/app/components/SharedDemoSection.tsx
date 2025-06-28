'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScreenshotCarousel } from './ScreenshotCarousel';

interface SharedDemoSectionProps {
  className?: string;
  trackType: 'management' | 'worker';
}

export const SharedDemoSection: FC<SharedDemoSectionProps> = ({ className = '', trackType }) => {
  const isManagement = trackType === 'management';
  
  return (
    <ScreenSection className={`bg-gradient-to-br ${isManagement ? 'from-blue-900 via-indigo-900 to-purple-900' : 'from-teal-900 via-emerald-900 to-green-900'} ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Screenshots Carousel */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          <ScreenshotCarousel />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real output.</span> 
          {isManagement 
            ? " Just like your QA, ops, or growth person would do."
            : " See Tilt complete a task in under 2 minutes."
          }
        </p>
      </div>
    </ScreenSection>
  );
};