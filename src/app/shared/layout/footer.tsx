import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../../test-layout/section';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className = '' }) => {
  return (
    <Section>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-8">
          {/* Logo and company info */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/android-chrome-192x192.png" 
                alt="Tilt Logo" 
                width={128} 
                height={128}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
              Tilt uses AI agents to complete real computer tasks across your tools - just like a person would. Stop clicking, start creating.
            </p>
          </div>
          
          {/* Link sections */}
          <div className="pt-4 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Company section */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/info/pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <a href="https://github.com/WhyTilt/tilt-app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* How Tilt Can Help section */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-4">How Tilt Can Help</h3>
              <div className="space-y-3">
                <Link href="/info/automated/website/testing/testing-websites-without-playwright-selenium-headless-expensive-brittle-tests" className="block text-gray-400 hover:text-white transition-colors">
                  Website Functional Testing
                </Link>
              </div>
            </div>
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
    </Section>
  );
};
