import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { ContactModal } from './ContactModal';
import { ConfirmationModal } from './ConfirmationModal';
import { trackEvent } from './analytics/GoogleAnalytics';

interface ContactSectionProps {
  className?: string;
}

export const ContactSection: FC<ContactSectionProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  
  return (
    <ScreenSection className={`zinc-section-bg ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-6xl py-8 sm:py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-lg">
            <span className="text-white font-semibold text-2xl flex items-center justify-center w-full h-full">A</span>
          </span>
          <span className="text-2xl font-semibold text-white tracking-tight flex items-end">
            Automagic&nbsp;<span className="text-base font-semibold text-white mb-0.5">IT</span>
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] text-white mb-6 sm:mb-8 lg:mb-10">
            Book a <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-6 sm:mb-8 lg:mb-12 mx-auto leading-relaxed">
            Let us show you what your first Agent can do.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto justify-center">
          <button
            onClick={() => {
              trackEvent('click', 'contact', 'schedule_demo_button');
              setIsModalOpen(true);
            }}
            className="bg-[color:var(--accent)] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[color:var(--accent-hover)] transition-colors text-base sm:text-lg whitespace-nowrap shadow-lg"
          >
            Schedule My Demo
          </button>
        </div>
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => setIsConfirmationOpen(true)}
        />
        <ConfirmationModal 
          isOpen={isConfirmationOpen} 
          onClose={() => setIsConfirmationOpen(false)} 
        />
      </div>
    </ScreenSection>
  );
};
