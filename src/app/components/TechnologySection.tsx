import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface TechnologySectionProps {
  className?: string;
}

export const TechnologySection: FC<TechnologySectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`zinc-section-bg ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">The Technology</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            The Future of Work
            <span className="block gradient-text mt-2">
              Doesn&apos;t Look Human.
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-semibold">
            But it feels like magic.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="modern-card p-6 sm:p-8 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl">10</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4">Replace Teams</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              One agent can do the work of ten people. Test entire websites, process data, research stocks while you sleep.
            </p>
          </div>
          
          <div className="modern-card p-6 sm:p-8 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl">24/7</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4">Never Stops</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Schedule research tasks and return to insights. Have it book your vacation while you go out with friends.
            </p>
          </div>
          
          <div className="modern-card p-6 sm:p-8 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl">∞</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4">Infinite Scale</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Spin up ten agents overnight. Use our marketplace tools, build your own, or hire us to customize everything.
            </p>
          </div>
        </div>
        
      </div>
      
      <ScrollArrow onClick={() => {
        const nextSection = document.querySelector('[data-section="tools"]');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </ScreenSection>
  );
};