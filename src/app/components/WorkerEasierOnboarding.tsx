'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerEasierOnboardingProps {
  className?: string;
}

export const WorkerEasierOnboarding: FC<WorkerEasierOnboardingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-cyan-900 via-teal-900 to-slate-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          I make sure you actually succeed with this.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Personal Setup Session</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We jump on a call, I install Tilt on your machine with your API key, and we identify which of your daily annoyances to automate first.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Guided First Automations</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I demonstrate the first automation while explaining the simple interface. Then you build the next one with my guidance. All recorded for your reference.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Unlimited Support</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m your direct contact for questions, problems, or new automation ideas. Email, screen sharing, whatever you need until Tilt becomes indispensable.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};