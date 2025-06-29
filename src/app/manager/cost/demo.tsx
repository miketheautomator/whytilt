'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';
import { ScreenshotCarousel } from '../../shared/screenshot-carousel';

interface ManagerCostDemoProps {
  className?: string;
}

export const ManagerCostDemo: FC<ManagerCostDemoProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Screenshots Carousel */}
        <div className="w-full max-w-none mx-auto mb-8 sm:mb-12">
          <ScreenshotCarousel />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real savings.</span> 
          See how to maintain quality while reducing operational costs.
        </p>
      </div>
    </ScreenSection>
  );
};