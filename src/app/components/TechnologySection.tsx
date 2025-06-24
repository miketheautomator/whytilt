import { FC } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface TechnologySectionProps {
  className?: string;
}

export const TechnologySection: FC<TechnologySectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-zinc-950 ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full">
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
            <span className="text-zinc-300 text-sm font-medium">The Technology</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            The Future of Work
            <span className="block text-[color:var(--accent)] mt-2">
              Doesn&apos;t Look Human.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            But it feels like magic.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">10</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4">Replace Teams</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              One agent can do the work of ten people. Test entire websites, process data, research stocks while you sleep.
            </p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">24/7</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4">Never Stops</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              Schedule research tasks and return to insights. Have it book your vacation while you go out with friends.
            </p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">∞</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4">Infinite Scale</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
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