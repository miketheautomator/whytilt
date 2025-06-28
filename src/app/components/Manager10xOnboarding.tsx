'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface Manager10xOnboardingProps {
  className?: string;
}

export const Manager10xOnboarding: FC<Manager10xOnboardingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-white">
          We don&apos;t just sell software. We make you successful.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Personal Setup Session</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I personally install Tilt on your team&apos;s machines and set it up with your API key. While I&apos;m doing the 1-command setup, we identify 1-3 repetitive tasks your team does daily.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Hands-On Training</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I run the first automation while explaining the interface. Then your team member does the next one under my supervision. All recorded for later reference.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Unlimited Support Until You&apos;re Addicted</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Email support, live screen sharing, whatever it takes until Tilt is bound into all your workflows. I&apos;m your support contact until you can&apos;t live without it.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};