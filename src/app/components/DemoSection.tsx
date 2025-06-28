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
            Watch a Tilt agent do the job.
          </h2>
          
          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="relative aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">Screencast of an agent running a task</p>
                <p className="text-sm text-gray-500 mt-2">(Placeholder - Video Coming Soon)</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
            <span className="text-white font-semibold">Real desktop. Real clicks. Real output.</span> Just like your QA, ops, or growth person would do.
          </p>
        </div>
      </ScreenSection>
    </>
  );
};