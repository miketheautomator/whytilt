import { FC } from 'react';
import { ScreenSection } from './ScreenSection';

interface WhatItCanDoSectionProps {
  className?: string;
}

export const WhatItCanDoSection: FC<WhatItCanDoSectionProps> = ({ className = '' }) => {
  return (
    <ScreenSection className={`bg-zinc-950 ${className}`}>
      <svg
        className="absolute -bottom-48 left-[-40%] h-320 w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-7xl pointer-events-none z-0"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="what-gradient" cx="100%">
            <stop offset="0%" stopColor="#233d6d33" />
            <stop offset="53.95%" stopColor="#0b234033" />
            <stop offset="100%" stopColor="#0a0b0f00" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#what-gradient)" />
      </svg>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 max-w-6xl py-16">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="inline-block w-8 h-8 bg-gradient-to-tr from-orange-400 to-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-2xl flex items-center justify-center w-full h-full">A</span>
          </span>
          <span className="text-2xl font-bold text-white tracking-tight flex items-end">
            Automagic&nbsp;<span className="text-base font-semibold text-white mb-0.5">IT</span>
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Real scenarios. Real impact.
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mb-12 leading-relaxed mx-auto">
            Our computer vision model doesn&apos;t just click buttons. It understands context,
            handles edge cases, and adapts to changes like a human would.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-white mb-4">Replace Your Data Entry Team</h3>
            <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
              &quot;We had 10 people doing manual data entry from PDFs into our CRM. 
              Now one agent does it all overnight, with 99.8% accuracy.&quot;
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">$180K/year saved</span>
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">24/7 processing</span>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Research While You Sleep</h3>
            <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
              &quot;Set it to research market trends, competitor pricing, and industry reports. 
              Wake up to a complete analysis in your inbox.&quot;
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">8+ hours saved daily</span>
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">Always up-to-date</span>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <div className="text-3xl mb-4">🧪</div>
            <h3 className="text-2xl font-bold text-white mb-4">End QA Nightmares</h3>
            <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
              &quot;It tests our entire checkout flow across 12 different scenarios. 
              Catches bugs our human testers missed.&quot;
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">Zero test maintenance</span>
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">Self-healing tests</span>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <div className="text-3xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Personal Life Automation</h3>
            <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
              &quot;While I&apos;m in meetings, it researches and books the perfect vacation, 
              compares prices, and even handles the bookings.&quot;
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">Time = priceless</span>
              <span className="bg-zinc-800 text-white px-3 py-1 rounded-full">Never miss deals</span>
            </div>
          </div>
        </div>
      </div>
    </ScreenSection>
  );
};
