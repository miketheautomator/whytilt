'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerFasterUpgradeProps {
  className?: string;
}

export const WorkerFasterUpgrade: FC<WorkerFasterUpgradeProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Tilt handles that for you. You move faster. Your output explodes.
        </h2>
      </div>
    </ScreenSection>
  );
};