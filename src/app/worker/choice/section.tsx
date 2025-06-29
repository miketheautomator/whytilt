'use client';

import { FC } from 'react';
import { ScreenSection } from '../../shared/screen-section';

interface WorkerChoiceSectionProps {
  onChoice: (choice: 'faster' | 'easier') => void;
  onReset?: () => void;
  onSwitchPath?: () => void;
  selectedChoice?: 'faster' | 'easier' | null;
  className?: string;
}

export const WorkerChoiceSection: FC<WorkerChoiceSectionProps> = ({ onChoice, onSwitchPath, selectedChoice, className = '' }) => {
  return (
    <ScreenSection className={`bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-800 ${className}`}>
      <div className="relative z-30 h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
          What do you want more of?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center max-w-4xl mx-auto">
          <button 
            onClick={() => onChoice('faster')}
            className={`px-8 py-6 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105 ${
              selectedChoice === 'faster' 
                ? 'bg-white/20 text-white border-2 border-white/40' 
                : 'bg-white text-teal-900'
            }`}
          >
            I want to get more done, faster
          </button>
          <button 
            onClick={() => onChoice('easier')}
            className={`px-8 py-6 font-bold rounded-lg text-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105 ${
              selectedChoice === 'easier' 
                ? 'bg-white/20 text-white border-2 border-white/40' 
                : 'bg-white text-teal-900'
            }`}
          >
            I want to get the same done with less effort
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