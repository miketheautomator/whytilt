'use client';

import { FC, useState } from 'react';
import { ScreenSection } from '../../shared/screen-section';
import { DemoModal } from '../../shared/demo-modal';
import { BookDemoButton } from '../../shared/book-demo-button';

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
          
          <div className="flex flex-col items-center gap-12">
            <BookDemoButton 
              onClick={() => setIsDemoModalOpen(true)}
              theme="emerald"
            />
            <div className="text-white/80 text-lg max-w-5xl mx-auto px-16 space-y-6 leading-relaxed">
              <p>A founder will personally help you get going and we don&apos;t charge you a penny to start using Tilt!</p>
              <p>Your only cost is paying for the Anthropic model - as little as 20 cents a task.*</p>
            </div>
          </div>
          
          {/* Footnote */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/60 text-sm px-4">* We are launching our own model in a few months to bring the per task cost down even further!</p>
          </div>
        </div>
      </ScreenSection>
    </>
  );
};