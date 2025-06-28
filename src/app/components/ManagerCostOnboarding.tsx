'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagerCostOnboardingProps {
  className?: string;
}

export const ManagerCostOnboarding: FC<ManagerCostOnboardingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          Zero risk. Maximum ROI. Guaranteed adoption.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">One Year Fixed Price</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              No seat counting. No usage limits. One price for your first year to see how Tilt fits into your organizational workflows before locking in seat licenses.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Grassroots Adoption Strategy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I onboard your key person, they become our inside advocate. They gather real stats and results, then sell YOUR leadership on expanding. No top-down mandate needed.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">White-Glove Everything</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Personal installation, training, and support until Tilt is deeply embedded in your operations. We make your early adopters into fanatics who can&apos;t imagine working without it.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};