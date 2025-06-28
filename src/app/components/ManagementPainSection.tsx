'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagementPainSectionProps {
  className?: string;
}

export const ManagementPainSection: FC<ManagementPainSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            You&apos;re not short on talent. You&apos;re short on time.
          </h2>
          
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
            Your best people spend hours every week testing sites, checking tags, filling out reports, clicking through browser flows. That&apos;s not strategy—that&apos;s busywork. Tilt takes it off their plate.
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-gray-800 pointer-events-none"></div>
    </ScreenSection>
  );
};