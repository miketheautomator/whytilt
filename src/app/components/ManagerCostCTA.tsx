'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';

interface ManagerCostCTAProps {
  className?: string;
}

export const ManagerCostCTA: FC<ManagerCostCTAProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 ${className}`}>
        <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
            Show your board the future of lean operations.
          </h2>
          
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="mx-auto px-12 py-6 bg-white text-gray-900 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105"
          >
            Book a Demo
          </button>
        </div>
      </ScreenSection>
    </>
  );
};