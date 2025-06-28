'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';
import { BookDemoButton } from './BookDemoButton';

interface WorkerEasierCTAProps {
  className?: string;
}

export const WorkerEasierCTA: FC<WorkerEasierCTAProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-cyan-900 via-teal-900 to-slate-900 ${className}`}>
        <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
            Want to automate the parts you hate? Book a demo.
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            <BookDemoButton 
              onClick={() => setIsDemoModalOpen(true)}
              theme="teal"
            />
            <div className="text-white/80 text-lg max-w-md">
              <p>A founder will personally help you get going and set up Tilt on your machine!</p>
            </div>
          </div>
        </div>
      </ScreenSection>
    </>
  );
};