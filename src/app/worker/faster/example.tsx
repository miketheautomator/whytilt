'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerFasterExampleProps {
  className?: string;
}

export const WorkerFasterExample: FC<WorkerFasterExampleProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
          Just type instructions like:
        </h2>
        
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-left">
            <p className="text-xl text-gray-300 italic">
              &quot;Go to the homepage, click through the signup flow, and make sure the thank-you page shows, check the adobeDataLayer for a purchaseComplete event and return its data to the final report.&quot;
            </p>
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-300">
          Tilt runs it. Logs it. Sends the report.
        </p>
      </div>
    </ScreenSection>
  );
};