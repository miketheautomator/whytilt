'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagementOutcomeSectionProps {
  className?: string;
}

export const ManagementOutcomeSection: FC<ManagementOutcomeSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-teal-900 to-blue-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
            Start with your team&apos;s most painful work:
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Functional tests in real browsers</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-2">GTM and analytics tag validation</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Cross-page visual checks</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Weekly release QA</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Manual browser flows and checklists</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Reporting, screenshots, logging</h3>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 text-center">
              If it&apos;s repeatable and done in a browser, Tilt can run it.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-transparent to-blue-800 pointer-events-none"></div>
    </ScreenSection>
  );
};