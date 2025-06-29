'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerEasierFeelingProps {
  className?: string;
}

export const WorkerEasierFeeling: FC<WorkerEasierFeelingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          You&apos;re not behind. You&apos;re not burned out. You&apos;re still on top of your work.
        </h2>
      </div>
    </ScreenSection>
  );
};