'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagerCostSituationProps {
  className?: string;
}

export const ManagerCostSituation: FC<ManagerCostSituationProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Every minute your people spend clicking buttons is a minute stolen from innovation.
        </h2>
        
        <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
          You&apos;re paying brilliant minds to do mindless work. That&apos;s not just inefficient&mdash;it&apos;s insulting to their potential.
        </p>
      </div>
    </ScreenSection>
  );
};