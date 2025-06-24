import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface AIFirstSectionProps {
  className?: string;
}

export const AIFirstSection: FC<AIFirstSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-black ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8 sm:py-12 lg:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full">
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
            <span className="text-zinc-300 text-sm font-medium">ML Engineering Team</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            20 Years Automation
            <span className="block text-[color:var(--accent)] mt-2">
              10 Years Machine Learning
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            Custom models and pipelines, 25% cheaper than Anthropic.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-[color:var(--accent)] rounded-full">
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
            <span className="text-[color:var(--accent)] text-sm font-medium">Limited Early Access</span>
          </div>
        </div>
      </div>
      
      <ScrollArrow onClick={() => {
        const nextSection = document.querySelector('[data-section="email"]');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </ScreenSection>
  );
};