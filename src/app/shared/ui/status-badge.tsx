import { FC } from 'react';

interface StatusBadgeProps {
  text: string;
  variant?: 'default' | 'early-access';
}

export const StatusBadge: FC<StatusBadgeProps> = ({ 
  text, 
  variant = 'default' // eslint-disable-line @typescript-eslint/no-unused-vars 
}) => {
  return (
    <div className="inline-flex items-center gap-2 mb-8 sm:mb-12 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <span className="text-white text-xs sm:text-sm font-medium">{text}</span>
    </div>
  );
};