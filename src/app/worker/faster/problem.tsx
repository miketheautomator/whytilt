'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerFasterProblemProps {
  className?: string;
}

export const WorkerFasterProblem: FC<WorkerFasterProblemProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          You spend hours every week clicking through flows, validating tags, grabbing screenshots.
        </h2>
      </div>
    </ScreenSection>
  );
};