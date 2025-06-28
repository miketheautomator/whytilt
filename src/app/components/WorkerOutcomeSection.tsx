'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerOutcomeSectionProps {
  className?: string;
}

export const WorkerOutcomeSection: FC<WorkerOutcomeSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            Choose Your Style
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Want to go faster and do more?
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Tilt clears your backlog so you can move 5x faster and get noticed.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 backdrop-blur-sm border border-teal-400/20 rounded-lg p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Want to finish on time without burning out?
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Tilt handles the grunt work so you can breathe - and still crush your numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-teal-800 pointer-events-none"></div>
    </ScreenSection>
  );
};