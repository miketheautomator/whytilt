import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface ImpactSectionProps {
  className?: string;
}

export const ImpactSection: FC<ImpactSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-zinc-950 ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 max-w-6xl text-center py-8 sm:py-12 lg:py-16">
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full">
          <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
          <span className="text-zinc-300 text-sm font-medium">The Impact</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-tight">
          Augment your human workforce
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 max-w-4xl">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--accent)] mb-3 sm:mb-4">10→1</div>
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
              The labor of 10 people becomes the work of 1
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--accent)] mb-3 sm:mb-4">24/7</div>
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
              Research stocks, plan vacations, gather data while you sleep
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--accent)] mb-3 sm:mb-4">∞</div>
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
              Scale with virtual agents running multiple tasks simultaneously
            </p>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
          Automate entire workflows from end to end
        </p>
      </div>
      
      <ScrollArrow onClick={() => {
        const nextSection = document.querySelector('[data-section="technology"]');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </ScreenSection>
  );
};