'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface Manager10xPayoffProps {
  className?: string;
}

export const Manager10xPayoff: FC<Manager10xPayoffProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Tilt is their new AI teammate. It does the boring stuff so your top people can fly.
        </h2>
      </div>
    </ScreenSection>
  );
};