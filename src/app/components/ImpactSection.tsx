import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface ImpactSectionProps {
  className?: string;
}

export const ImpactSection: FC<ImpactSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`purple-section-bg ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 max-w-6xl text-center py-8 sm:py-12 lg:py-16">
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">The Impact</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-8 sm:mb-12 text-white tracking-tight leading-[1.1]">
          <span className="gradient-text">Augment</span> your human workforce
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12 max-w-5xl">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold gradient-text mb-4 sm:mb-6">10→1</div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-snug tracking-tight">
              The labor of 10 people becomes the work of 1
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold gradient-text mb-4 sm:mb-6">24/7</div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-snug tracking-tight">
              Research stocks, plan vacations, gather data while you sleep
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold gradient-text mb-4 sm:mb-6">∞</div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-snug tracking-tight">
              Scale with virtual agents running multiple tasks simultaneously
            </p>
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-snug tracking-tight max-w-4xl">
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