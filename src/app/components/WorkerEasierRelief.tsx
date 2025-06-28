'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerEasierReliefProps {
  className?: string;
}

export const WorkerEasierRelief: FC<WorkerEasierReliefProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-cyan-900 via-slate-900 to-teal-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Tilt takes the routine browser work off your hands. You still get the credit - but you don&apos;t waste the time.
        </h2>
      </div>
    </ScreenSection>
  );
};