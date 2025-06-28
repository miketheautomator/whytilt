'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WorkerFasterOnboardingProps {
  className?: string;
}

export const WorkerFasterOnboarding: FC<WorkerFasterOnboardingProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 md:mb-12 leading-tight text-white">
          You&apos;re not just getting software. You&apos;re getting a partner.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Personal Installation</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              One command setup with your Anthropic key. While we&apos;re setting it up, we talk through your most annoying daily tasks and pick the perfect first automation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Hands-On Training</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We run your first automation explaining every step. Then you create the second one while we guide you. Everything&apos;s recorded so you can review later.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Dedicated Support Until You&apos;re Hooked</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Email us, screen share with us, ask us anything. We&apos;re your personal support contact until Tilt becomes essential to how you work.
            </p>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};