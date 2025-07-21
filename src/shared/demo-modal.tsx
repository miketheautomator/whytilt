'use client';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import facts from './facts.json';
import { usePostHog } from 'posthog-js/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: keyof typeof facts.themes;
}

export function DemoModal({ isOpen, onClose, theme }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    revenue: '',
    employees: '',
    automation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const posthog = usePostHog();

  const themeData = facts.themes[theme];
  const primaryColor = themeData.primary;

  const revenueOptions = [
    'Under $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M - $10M',
    'Over $10M'
  ];

  const employeeOptions = [
    '1-5 employees',
    '6-10 employees',
    '11-25 employees',
    '26-50 employees',
    '51-100 employees',
    '101-250 employees',
    '250+ employees'
  ];

  const getThemeClasses = () => {
    switch (primaryColor) {
      case 'blue':
        return {
          button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
          border: 'border-blue-500',
          gradient: 'from-blue-900/50 via-blue-800/30 to-blue-900/50'
        };
      case 'purple':
        return {
          button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
          border: 'border-purple-500',
          gradient: 'from-purple-900/50 via-purple-800/30 to-purple-900/50'
        };
      case 'green':
        return {
          button: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
          border: 'border-green-500',
          gradient: 'from-green-900/50 via-green-800/30 to-green-900/50'
        };
      default:
        return {
          button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
          border: 'border-blue-500',
          gradient: 'from-blue-900/50 via-blue-800/30 to-blue-900/50'
        };
    }
  };

  const themeClasses = getThemeClasses();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.revenue || !formData.employees || !formData.automation) {
      return;
    }

    if (!isValidEmail(formData.email)) {
      return;
    }

    // Track form submission
    posthog?.capture('demo_form_submitted', {
      theme: theme,
      revenue: formData.revenue,
      employees: formData.employees,
      automation: formData.automation
    });

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          revenue: formData.revenue,
          employees: formData.employees,
          automation: formData.automation,
          theme: theme
        }),
      });

      if (response.ok) {
        // Throw confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        
        setIsSuccess(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', revenue: '', employees: '', automation: '' });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${themeClasses.gradient} backdrop-blur-sm`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-zinc-900/95 backdrop-blur-md rounded-2xl border ${themeClasses.border} shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden`}>
        {!isSuccess ? (
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Left Column - Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Request Demo</h2>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white text-2xl md:hidden"
                >
                  ×
                </button>
              </div>

              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                placeholder="Your Name *"
              />

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                placeholder="Email Address *"
              />

              <select
                required
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
              >
                <option value="">Annual Revenue *</option>
                {revenueOptions.map((option) => (
                  <option key={option} value={option} className="bg-zinc-800">
                    {option}
                  </option>
                ))}
              </select>

              <select
                required
                value={formData.employees}
                onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
              >
                <option value="">Employee Count *</option>
                {employeeOptions.map((option) => (
                  <option key={option} value={option} className="bg-zinc-800">
                    {option}
                  </option>
                ))}
              </select>

              <textarea
                required
                value={formData.automation}
                onChange={(e) => setFormData({ ...formData, automation: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                placeholder="What would you automate away if you could? *"
                rows={3}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 ${themeClasses.button} text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50`}
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
              </button>
            </form>

            {/* Right Column - Content */}
            <div className="hidden md:flex flex-col justify-center p-8 bg-zinc-800/30 relative">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Live demo tailored to your use case</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Discussion of your current workflow challenges</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Custom implementation roadmap</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">ROI analysis and pricing discussion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Revenue */}
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-white mb-2">
                  Annual Revenue *
                </label>
                <select
                  id="revenue"
                  required
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                >
                  <option value="">Select revenue range</option>
                  {revenueOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Employee Count */}
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-white mb-2">
                  Employee Count *
                </label>
                <select
                  id="employees"
                  required
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                >
                  <option value="">Select employee count</option>
                  {employeeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Automation Question */}
              <div>
                <label htmlFor="automation" className="block text-sm font-medium text-white mb-2">
                  What would you automate away if you could? *
                </label>
                <textarea
                  id="automation"
                  required
                  rows={6}
                  value={formData.automation}
                  onChange={(e) => setFormData({ ...formData, automation: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                  placeholder="Describe the repetitive tasks, manual processes, or workflows you'd love to automate..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !isValidEmail(formData.email) || !formData.revenue || !formData.employees || !formData.automation}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${themeClasses.button}`}
              >
                {isSubmitting ? 'Sending...' : 'Request Demo'}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-white mb-4">Demo Requested!</h2>
              <p className="text-gray-300 text-lg">
                Thanks for your interest! A founder will contact you within 24 hours to schedule your personalized demo.
              </p>
            </div>
            <button
              onClick={handleClose}
              className={`py-3 px-8 rounded-lg font-semibold text-white transition-all duration-200 ${themeClasses.button}`}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}