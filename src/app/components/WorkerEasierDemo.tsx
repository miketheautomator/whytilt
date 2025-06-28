'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerEasierDemoProps {
  className?: string;
}

export const WorkerEasierDemo: FC<WorkerEasierDemoProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Watch Tilt handle the work you hate.
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
              <p className="text-gray-400 text-lg">Automation demo - same work, less effort</p>
              <p className="text-sm text-gray-500 mt-2">(Video Coming Soon)</p>
            </div>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">Real desktop. Real clicks. Real relief.</span> 
          Watch the boring stuff get done while you focus on better things.
        </p>
      </div>
    </ScreenSection>
  );
};