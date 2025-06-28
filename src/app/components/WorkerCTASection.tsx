'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';

interface WorkerCTASectionProps {
  className?: string;
}

export const WorkerCTASection: FC<WorkerCTASectionProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 ${className}`}>
        <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            Want Tilt at your job? We&apos;ll help bring it in.
          </h2>
          
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="mx-auto px-12 py-6 bg-white text-teal-900 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105 mb-6"
          >
            Request Tilt at Work
          </button>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            You don&apos;t need permission to automate. We&apos;ll handle the rest.
          </p>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-green-900 pointer-events-none"></div>
      </ScreenSection>
    </>
  );
};