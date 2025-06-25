import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface AIFirstSectionProps {
  className?: string;
}

export const AIFirstSection: FC<AIFirstSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`zinc-section-bg ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8 sm:py-12 lg:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">ML Engineering Team</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            <span className="gradient-text">20 Years</span> Automation
            <span className="block gradient-text mt-2">
              <span className="gradient-text">10 Years</span> Machine Learning
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Custom models and pipelines, 25% cheaper than Anthropic.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">Limited Early Access</span>
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