'use client';

import { FC, useState } from 'react';
import { ScreenSection } from './ScreenSection';
import { ScrollArrow } from './ScrollArrow';

interface EmailCaptureSectionProps {
  className?: string;
}

export const EmailCaptureSection: FC<EmailCaptureSectionProps> = ({ className = '' }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [automationGoals, setAutomationGoals] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !automationGoals.trim()) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, automationGoals }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setFirstName('');
        setEmail('');
        setAutomationGoals('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScreenSection className={`bg-black ${className}`}>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-4xl text-center py-8 sm:py-12 lg:py-16">
        {!isSubmitted ? (
          <>
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full">
                <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
                <span className="text-zinc-300 text-sm font-medium">🚨 Early Access • Limited Client Slots Available</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Get on the Early Access List
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Join the insiders who&apos;ll never go back to doing things the hard way. 
                <span className="block mt-2 text-white font-semibold">
                  You&apos;re not just trying new software — you&apos;re shaping the future of work.
                </span>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full">
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work email"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    What do you want to automate? *
                  </label>
                  <textarea
                    value={automationGoals}
                    onChange={(e) => setAutomationGoals(e.target.value)}
                    placeholder="e.g., data entry, report generation, customer onboarding..."
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent text-sm sm:text-base resize-vertical"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[color:var(--accent)] text-white font-semibold rounded-lg hover:bg-[color:var(--accent)]/90 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] disabled:opacity-50 transition-all duration-200 text-sm sm:text-base"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </form>
            
            <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">You&apos;re on the list!</h2>
            <p className="text-zinc-400">
              We&apos;ll reach out soon with next steps. The future is closer than you think.
            </p>
          </div>
        )}
      </div>
      
      {!isSubmitted && (
        <ScrollArrow onClick={() => {
          const nextSection = document.querySelector('[data-section="contact"]');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }} />
      )}
    </ScreenSection>
  );
};