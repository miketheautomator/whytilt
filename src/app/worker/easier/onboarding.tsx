'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerEasierOnboardingProps {
  className?: string;
}

export const WorkerEasierOnboarding: FC<WorkerEasierOnboardingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-cyan-900 via-teal-900 to-slate-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 md:mb-12 leading-tight text-white">
          White-glove service. Guaranteed success.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Personal Setup Session</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We jump on a call, our team installs Tilt on your machine with your API key, and we identify which of your daily annoyances to automate first.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Guided First Automations</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We demonstrate the first automation while explaining the simple interface. Then you build the next one with our guidance. All recorded for your reference.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Unlimited Support</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We&apos;re your direct contact for questions, problems, or new automation ideas. Email, screen sharing, whatever you need until Tilt becomes indispensable.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};