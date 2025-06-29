'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface Manager10xSituationProps {
  className?: string;
}

export const Manager10xSituation: FC<Manager10xSituationProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          You have great people. But they&apos;re stuck doing browser-based grunt work.
        </h2>
        
        <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
          Checking tags, testing sites, clicking through flows&mdash;that&apos;s not where their talent should go.
        </p>
      </div>
    </ScreenSection>
  );
};