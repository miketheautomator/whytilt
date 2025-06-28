'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerSolutionSectionProps {
  className?: string;
}

export const WorkerSolutionSection: FC<WorkerSolutionSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            Describe the task in plain English. Tilt runs it for you.
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-left">
                <p className="text-lg text-gray-300 italic">
                  &quot;Go to the site, find a sale item between $200–$500, and check out using this info.&quot;
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-left">
                <p className="text-lg text-gray-300 italic">
                  &quot;Click through the signup flow and make sure the thank-you page has the GA tag.&quot;
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-left">
                <p className="text-lg text-gray-300 italic">
                  &quot;Take screenshots of 10 product pages and send them to Slack.&quot;
                </p>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 text-center">
              Tilt runs the browser like you would - clicks, scrolls, checks, logs, done.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-slate-800 pointer-events-none"></div>
    </ScreenSection>
  );
};