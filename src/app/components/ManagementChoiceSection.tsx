'use client';

import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface ManagementChoiceSectionProps {
  onChoice: (choice: 'productivity' | 'cost') => void;
  onReset?: () => void;
  onSwitchPath?: () => void;
  selectedChoice?: 'productivity' | 'cost' | null;
  className?: string;
}

export const ManagementChoiceSection: FC<ManagementChoiceSectionProps> = ({ onChoice, onSwitchPath, selectedChoice, className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
          What are you trying to achieve?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center max-w-4xl mx-auto">
          <button 
            onClick={() => onChoice('productivity')}
            className={`px-8 py-6 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105 ${
              selectedChoice === 'productivity' 
                ? 'bg-white/20 text-white border-2 border-white/40' 
                : 'bg-white text-blue-900'
            }`}
          >
            I want to 10x my team&apos;s productivity
          </button>
          <button 
            onClick={() => onChoice('cost')}
            className={`px-8 py-6 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105 ${
              selectedChoice === 'cost' 
                ? 'bg-white/20 text-white border-2 border-white/40' 
                : 'bg-white text-blue-900'
            }`}
          >
            I want to reduce cost without losing output
          </button>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          {selectedChoice && onSwitchPath && (
            <button 
              onClick={onSwitchPath}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg transition-all duration-200 hover:scale-105"
            >
              Switch Path
            </button>
          )}
        </div>
      </div>
    </ScreenSection>
  );
};