'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            Ready to See It in Action?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl">
            Book a personalized demo and see how AutomagicIT can transform your workflows.
          </p>
          
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="px-8 sm:px-12 py-4 sm:py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg sm:text-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Book Your Demo
          </button>
        </div>
      </ScreenSection>
    </>
  );
};