'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagerCostTasksProps {
  className?: string;
}

export const ManagerCostTasks: FC<ManagerCostTasksProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
          What Tilt handles now
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            'Website and Web application testing',
            'Analytics and tag management and testing', 
            'Website usability testing',
            'Research and Data Entry'
          ].map((task, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-semibold text-xl">{task}</h3>
            </div>
          ))}
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 mt-12 max-w-4xl mx-auto">
          Anything that can be described in English and done on Mac, Windows, or Linux, or in a browser can be turned into an automation.
        </p>
      </div>
    </ScreenSection>
  );
};