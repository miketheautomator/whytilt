'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerPainSectionProps {
  className?: string;
}

export const WorkerPainSection: FC<WorkerPainSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            You weren&apos;t hired to click buttons all day.
          </h2>
          
          <div className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto space-y-4">
            <p><strong className="text-white">But you are.</strong></p>
            <p>
              You click through forms, screenshot flows, check analytics tags, QA test features, and repeat the same 20 browser steps daily. Tilt takes that off your plate—without needing code, scripts, or IT.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-gray-800 pointer-events-none"></div>
    </ScreenSection>
  );
};