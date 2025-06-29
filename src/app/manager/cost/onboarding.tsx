'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface ManagerCostOnboardingProps {
  className?: string;
}

export const ManagerCostOnboarding: FC<ManagerCostOnboardingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 md:mb-12 leading-tight text-white">
          Zero risk. Maximum ROI. Guaranteed adoption.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Small Business Source License</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Free for organizations under $250K annual revenue. Get the full source code with no restrictions. Enterprise pricing is negotiated per organization.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Start Small, Scale Smart</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Begin with one team member to validate the workflow improvements. Expand at your own pace based on proven results and team readiness.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Complete Implementation Support</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Personal installation, training, and ongoing support until Tilt becomes a natural part of your team&apos;s workflow. We ensure successful adoption at every step.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};