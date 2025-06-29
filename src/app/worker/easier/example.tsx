'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerEasierExampleProps {
  className?: string;
}

export const WorkerEasierExample: FC<WorkerEasierExampleProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
          Your next task:
        </h2>
        
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-left">
            <p className="text-xl text-gray-300 italic">
              &quot;Go to the homepage, click through the signup flow, and make sure the thank-you page shows the xdm._experience tag in the network inspector&quot;
            </p>
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-300">
          Tilt does it. You chill.
        </p>
      </div>
    </ScreenSection>
  );
};