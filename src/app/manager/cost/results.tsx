'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface ManagerCostResultsProps {
  className?: string;
}

export const ManagerCostResults: FC<ManagerCostResultsProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          40% cost reduction. Zero quality loss.
        </h2>
        
        <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
          Your CFO will love the savings. Your team will love focusing on work that actually matters. Your customers won&apos;t notice the difference.
        </p>
      </div>
    </ScreenSection>
  );
};