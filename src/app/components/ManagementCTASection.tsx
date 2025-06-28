'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';

interface ManagementCTASectionProps {
  className?: string;
}

export const ManagementCTASection: FC<ManagementCTASectionProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 ${className}`}>
        <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            Augment your people or reduce your headcount. Either way—start today.
          </h2>
          
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="mx-auto px-12 py-6 bg-white text-blue-900 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105 mb-6"
          >
            Book a Demo
          </button>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We&apos;ll install Tilt, run one of your tasks, and prove ROI in a week.
          </p>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-purple-900 pointer-events-none"></div>
      </ScreenSection>
    </>
  );
};