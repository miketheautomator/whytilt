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
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 md:mb-12 leading-tight text-white">
          White-glove service. Guaranteed success.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Personal Setup Session</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Our team personally installs Tilt on your team&apos;s machines and sets it up with your API key. While we&apos;re doing the 1-command setup, we identify 1-3 repetitive tasks your team does daily.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Hands-On Training</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We run the first automation while explaining the interface. Then your team member does the next one under our supervision. All recorded for later reference.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">White Glove Service</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Email support, live screen sharing, whatever it takes until Tilt is bound into all your workflows. We&apos;re your support contact until you can&apos;t live without it.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};