'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagerCostSolutionProps {
  className?: string;
}

export const ManagerCostSolution: FC<ManagerCostSolutionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Cut payroll without cutting people.
        </h2>
        
        <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
          Every Tilt agent costs less than minimum wage and never takes sick days. Your competition is still hiring humans to do robot work.
        </p>
      </div>
    </ScreenSection>
  );
};