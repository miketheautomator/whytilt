import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface ToolsSectionProps {
  className?: string;
}

export const ToolsSection: FC<ToolsSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-zinc-950 ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full">
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
            <span className="text-zinc-300 text-sm font-medium">Custom Tools</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Give Your Agents
            <span className="block text-[color:var(--accent)] mt-2">
              Superpowers.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Custom tools that let agents modify your software, access your data, and automate your unique workflows.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4">Analytics Access</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              Give agents direct access to your Google Analytics, Mixpanel, or custom dashboards to make data-driven decisions.
            </p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4">Custom Software</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              Build tools that let agents modify your CRM, update your database, or interact with your proprietary systems.
            </p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4">Tool Marketplace</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              Share and buy tools from other users. Download pre-built integrations or monetize your custom automations.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-[color:var(--accent)] rounded-full">
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
            <span className="text-[color:var(--accent)] text-sm font-medium">Coming with Beta Launch</span>
          </div>
        </div>
      </div>
      
      <ScrollArrow onClick={() => {
        const nextSection = document.querySelector('[data-section="ai-first"]');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </ScreenSection>
  );
};