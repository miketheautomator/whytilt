'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';

interface WorkerFasterCTAProps {
  className?: string;
}

export const WorkerFasterCTA: FC<WorkerFasterCTAProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 ${className}`}>
        <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
            Ready to move faster? Let&apos;s set it up on your machine.
          </h2>
          
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="mx-auto px-12 py-6 bg-white text-emerald-900 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105"
          >
            Book a Demo
          </button>
        </div>
      </ScreenSection>
    </>
  );
};