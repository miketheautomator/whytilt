'use client';

import { useState, FC, useEffect, useRef } from 'react';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [automationGoals, setAutomationGoals] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isSubmitted) {
      // Use a small delay to ensure the modal is fully rendered
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, automationGoals }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      setFirstName('');
      setEmail('');
      setAutomationGoals('');
      
      // Trigger confetti on success
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError('');
    setFirstName('');
    setEmail('');
    setAutomationGoals('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="fixed inset-0 flex w-screen items-center justify-center p-0 sm:p-4">
        <DialogPanel className="w-full h-full sm:h-auto sm:max-w-md bg-zinc-900 border-0 sm:border border-zinc-700 rounded-none sm:rounded-xl p-6 shadow-xl overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Schedule demo confirmation</h3>
              <p className="text-zinc-400 mb-6">
                Thanks for your interest! We&apos;ll contact you soon to schedule your personalized demo.
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-[color:var(--accent)] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[color:var(--accent)]/90 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-white mb-2">Schedule a Demo</h3>
              <p className="text-zinc-400 mb-6">
                Get a personalized demonstration of our automation technology.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300 mb-2">
                    First Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="automationGoals" className="block text-sm font-medium text-zinc-300 mb-2">
                    What do you want to automate? *
                  </label>
                  <textarea
                    id="automationGoals"
                    value={automationGoals}
                    onChange={(e) => setAutomationGoals(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)] resize-vertical"
                    placeholder="Describe the tasks or processes you'd like to automate..."
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 bg-zinc-800 text-zinc-300 font-semibold py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[color:var(--accent)] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[color:var(--accent)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  </button>
                </div>
              </form>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};