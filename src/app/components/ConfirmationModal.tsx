'use client';

import { FC, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger confetti when modal opens
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0b1220] rounded-2xl p-8 max-w-md w-full border border-[#1a2537] relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Thanks for requesting a personalized demo!</h2>
          <p className="text-gray-300 mb-4">
            We will contact you at the email provided to set up the appointment.
          </p>
          <p className="text-gray-300">
            Thank you,<br />
            <span className="text-orange-400 font-medium">Mark Tellez</span>
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg px-6 py-3 font-medium hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};