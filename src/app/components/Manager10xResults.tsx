'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface Manager10xResultsProps {
  className?: string;
}

export const Manager10xResults: FC<Manager10xResultsProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Teams have reduced release testing from 3 days to 1 hour.
        </h2>
      </div>
    </ScreenSection>
  );
};