'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagerCostDemoProps {
  className?: string;
}

export const ManagerCostDemo: FC<ManagerCostDemoProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Watch Tilt reduce costs without cutting performance.
        </h2>
        
        {/* Video Placeholder */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="relative aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-400 text-lg">Cost reduction demo - same output, less headcount</p>
              <p className="text-sm text-gray-500 mt-2">(Video Coming Soon)</p>
            </div>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real savings.</span> 
          See how to maintain quality while reducing operational costs.
        </p>
      </div>
    </ScreenSection>
  );
};