'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { DemoModal } from './DemoModal';
import { BookDemoButton } from './BookDemoButton';

interface Manager10xCTAProps {
  className?: string;
}

export const Manager10xCTA: FC<Manager10xCTAProps> = ({ className = '' }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
      />
      
      <ScreenSection className={`bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 ${className}`}>
        <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
            Want to amplify your best people? Book a demo.
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            <BookDemoButton 
              onClick={() => setIsDemoModalOpen(true)}
              theme="purple"
            />
            <div className="text-white/80 text-lg max-w-md">
              <p className="mb-2">Free for small businesses under $250K revenue. Full source code included.</p>
              <p>Enterprise pricing negotiated per organization. A founder will personally help you get started.</p>
            </div>
          </div>
        </div>
      </ScreenSection>
    </>
  );
};