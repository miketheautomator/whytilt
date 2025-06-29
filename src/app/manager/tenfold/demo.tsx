'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';
import { ScreenshotCarousel } from '../../shared/screenshot-carousel';

interface Manager10xDemoProps {
  className?: string;
}

export const Manager10xDemo: FC<Manager10xDemoProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Screenshots Carousel */}
        <div className="w-full max-w-none mx-auto mb-8 sm:mb-12">
          <ScreenshotCarousel />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real results.</span> 
          Watch your team get 10x more done while focusing on what matters.
        </p>
      </div>
    </ScreenSection>
  );
};