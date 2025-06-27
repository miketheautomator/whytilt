import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface TechnologySectionProps {
  className?: string;
}

export const TechnologySection: FC<TechnologySectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`zinc-section-bg ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="hidden sm:inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">The Technology</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            The Future of Work
            <span className="block gradient-text mt-1 sm:mt-2">
              Doesn&apos;t Look Human.
            </span>
          </h2>
          
          <p className="hidden sm:block text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-semibold">
            But it feels like magic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
          <div className="modern-card p-3 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <span className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">10</span>
            </div>
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-3">Replace Teams</h3>
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
              One agent can do the work of ten people. Test entire websites, process data, research stocks while you sleep.
            </p>
          </div>
          
          <div className="modern-card p-3 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <span className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">24/7</span>
            </div>
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-3">Never Stops</h3>
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
              Schedule research tasks and return to insights. Have it book your vacation while you go out with friends.
            </p>
          </div>
          
          <div className="modern-card p-3 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <span className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">∞</span>
            </div>
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-3">Infinite Scale</h3>
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
              Spin up ten agents overnight. Use our marketplace tools, build your own, or hire us to customize everything.
            </p>
          </div>
        </div>
        
      </div>
      
    </ScreenSection>
  );
};