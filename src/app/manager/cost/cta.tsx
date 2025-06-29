'use client';

import { FC, useState } from 'react';
import { ScreenSection } from '../../shared/screen-section';
import { DemoModal } from '../../shared/demo-modal';
import { BookDemoButton } from '../../shared/book-demo-button';

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
          
          <div className="flex flex-col items-center gap-12">
            <BookDemoButton 
              onClick={() => setIsDemoModalOpen(true)}
              theme="slate"
            />
            <div className="text-white/80 text-lg max-w-5xl mx-auto px-16 space-y-6 leading-relaxed">
              <p>Free for small businesses under $250K annual revenue. Full source code included.</p>
              <p>Enterprise pricing negotiated per organization. A founder will personally help you get started.</p>
            </div>
          </div>
        </div>
      </ScreenSection>
    </>
  );
};