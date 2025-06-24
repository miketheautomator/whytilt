'use client';

import { FC } from 'react';

interface ScrollArrowProps {
  onClick: () => void;
  className?: string;
}

export const ScrollArrow: FC<ScrollArrowProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer group ${className}`}
      aria-label="Scroll to next section"
    >
      <svg 
        className="w-3 h-3 text-white animate-bounce group-hover:animate-pulse translate-y-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2.5} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
    </button>
  );
};