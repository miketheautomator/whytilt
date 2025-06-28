'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagementSolutionSectionProps {
  className?: string;
}

export const ManagementSolutionSection: FC<ManagementSolutionSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            One agent = 10x output for your best people.
          </h2>
          
          <div className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto space-y-6">
            <p>
              Tilt agents log in, click through real tasks, check values, verify tags, compare screenshots, send reports.
              They&apos;re not &quot;headless bots.&quot; They&apos;re digital coworkers.
            </p>
            <p className="text-lg sm:text-xl">
              <strong className="text-white">Want to scale your team without hiring?</strong> Done.<br/>
              <strong className="text-white">Want to reduce costs while keeping your top talent?</strong> Tilt makes it possible.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-slate-800 pointer-events-none"></div>
    </ScreenSection>
  );
};