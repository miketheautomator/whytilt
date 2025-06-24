import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`h-auto min-h-[200px] bg-[#0a0b0f] py-8 ${className}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between text-gray-400">
        <p>© {new Date().getFullYear()} Automagic IT. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Beta</span>
        </div>
      </div>
    </ScreenSection>
  );
};
