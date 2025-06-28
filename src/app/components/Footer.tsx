import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-slate-900 to-slate-800 h-screen ${className}`}>
      <div className="relative h-full flex items-center justify-center">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center space-y-8">
            {/* Logo and company info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/android-chrome-192x192.png" 
                  alt="Tilt Logo" 
                  width={64} 
                  height={64}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                Tilt uses AI agents to complete real computer tasks across your tools—just like a person would. Stop clicking, start creating.
              </p>
            </div>
            
            {/* Simple footer info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Tilt. All rights reserved.
              </p>
              
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <span className="text-red-500">❤️</span> in SF, USA
              </p>
              
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full">
                  <span className="text-blue-300 text-xs font-semibold tracking-wide">BETA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </ScreenSection>
  );
};
