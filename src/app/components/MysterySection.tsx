import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface MysterySectionProps {
  className?: string;
}

export const MysterySection: FC<MysterySectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-black ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 max-w-6xl text-center py-8 sm:py-12 lg:py-16">
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full">
          <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
          <span className="text-zinc-300 text-sm font-medium">What Is It, Really?</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-tight">
          This Is Not an App.
          <span className="block text-[color:var(--accent)] mt-2">
            It&apos;s an Employee.
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 mb-6 sm:mb-8 leading-relaxed max-w-3xl lg:max-w-4xl">
          Inside every AutomagicIT Agent is a custom-trained 7B vision model that sees your desktop and knows how to get things done.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sm:p-8 hover:border-zinc-700 transition-colors text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">Works like a person</h3>
            <p className="text-zinc-400 text-sm sm:text-base">Sees the screen, clicks buttons, types in forms</p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sm:p-8 hover:border-zinc-700 transition-colors text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">Runs anywhere</h3>
            <p className="text-zinc-400 text-sm sm:text-base">Dockerized virtual desktop — deploy on Mac, Windows, Linux, or private cloud</p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sm:p-8 hover:border-zinc-700 transition-colors text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">Secure</h3>
            <p className="text-zinc-400 text-sm sm:text-base">Host on your infrastructure or locally for total data privacy</p>
          </div>
        </div>
      </div>
      
      <ScrollArrow onClick={() => {
        const nextSection = document.querySelector('[data-section="impact"]');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </ScreenSection>
  );
};