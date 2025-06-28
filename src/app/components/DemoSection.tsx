'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';
import { ScreenshotCarousel } from './ScreenshotCarousel';

interface DemoSectionProps {
  className?: string;
}

export const DemoSection: FC<DemoSectionProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-[#0a0b0f] to-[#071a2c] ${className}`}>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 max-w-6xl text-center py-8">
          {/* Screenshots Carousel */}
          <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
            <ScreenshotCarousel />
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
            <span className="text-white font-semibold">Real desktop. Real clicks. Real output.</span> Just like your QA, ops, or growth person would do.
          </p>
        </div>
      </ScreenSection>
    </>
  );
};