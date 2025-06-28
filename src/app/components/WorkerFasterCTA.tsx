'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';
import { BookDemoButton } from './BookDemoButton';

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
          
          <div className="flex flex-col items-center gap-4">
            <BookDemoButton 
              onClick={() => setIsDemoModalOpen(true)}
              theme="emerald"
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