'use client';

import { FC, useState } from 'react';
import Select, { StylesConfig, SingleValue } from 'react-select';
import { trackEvent } from './analytics/GoogleAnalytics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type Option = {
  value: string;
  label: string;
};

const orgSizeOptions: Option[] = [
  { value: 'small', label: '1-50 employees' },
  { value: 'medium', label: '51-250 employees' },
  { value: 'large', label: '251+ employees' },
];

const sourceOptions: Option[] = [
  { value: 'search', label: 'Search Engine' },
  { value: 'social', label: 'Social Media' },
  { value: 'referral', label: 'Referral' },
  { value: 'other', label: 'Other' },
];

const customSelectStyles: StylesConfig<Option> = {
  control: (base) => ({
    ...base,
    backgroundColor: '#0b1220',
    borderColor: '#1a2537',
    '&:hover': {
      borderColor: '#f97316'
    }
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#f97316' : state.isFocused ? '#1a2537' : '#0b1220',
    '&:active': {
      backgroundColor: '#f97316'
    }
  }),
  input: (base) => ({
    ...base,
    color: '#ffffff'
  }),
  singleValue: (base) => ({
    ...base,
    color: '#ffffff'
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#0b1220',
    border: '1px solid #1a2537'
  })
};

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    orgSize: null as Option | null,
    caseStudy: false,
    source: null as Option | null,
    otherSource: ''
  });

  if (!isOpen) return null;

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    if (!formData.email.trim() || !isValidEmail(formData.email)) return false;
    if (!formData.orgSize) return false;
    if (!formData.source) return false;
    if (formData.source && !formData.otherSource.trim()) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    console.log('Form submission attempt:', formData);
    console.log('Form valid:', isFormValid());
    
    if (!isFormValid()) {
      setError('Please fill in all required fields');
      return;
    }
    
    setLoading(true);

    try {
      console.log('Sending request to /api/contact');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          orgSize: formData.orgSize?.value,
          caseStudy: formData.caseStudy,
          source: formData.source?.value,
          otherSource: formData.otherSource
        }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', errorData);
        throw new Error(`Failed to submit: ${response.status}`);
      }

      trackEvent('form_submit', 'contact', 'demo_request_success');
      onClose();
      onSuccess();
    } catch (error) {
      console.error('Error:', error);
      trackEvent('form_submit', 'contact', 'demo_request_error');
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0b1220] rounded-2xl p-6 max-w-md w-full border border-[#1a2537] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">Request a personalized demo</h2>
        
        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-3 mb-4">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              required
              className="w-full bg-[#0b1220] border border-[#1a2537] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Organization Size
            </label>
            <Select<Option>
              options={orgSizeOptions}
              value={formData.orgSize}
              onChange={(newValue: SingleValue<Option>) => setFormData({ ...formData, orgSize: newValue })}
              styles={customSelectStyles}
              className="text-white"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.caseStudy}
                onChange={(e) => setFormData({ ...formData, caseStudy: e.target.checked })}
                className="rounded border-gray-600 text-orange-400 focus:ring-orange-400 bg-[#0b1220]"
              />
              <span className="text-sm text-gray-300">Open to being in our case study</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              How did you hear about us?
            </label>
            <Select<Option>
              options={sourceOptions}
              value={formData.source}
              onChange={(newValue: SingleValue<Option>) => setFormData({ ...formData, source: newValue })}
              styles={customSelectStyles}
              className="text-white"
            />
          </div>

          {formData.source && (
            <div>
              <input
                type="text"
                value={formData.otherSource}
                onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
                placeholder={
                  formData.source.value === 'search' ? 'Which search engine? (e.g., Google, Bing)' :
                  formData.source.value === 'social' ? 'Which platform? (e.g., LinkedIn, Twitter)' :
                  formData.source.value === 'referral' ? 'Who referred you?' :
                  'Please specify'
                }
                className="w-full bg-[#0b1220] border border-[#1a2537] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !isFormValid()}
            className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg px-6 py-3 font-medium hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Get back to me'}
          </button>
        </form>
      </div>
    </div>
  );
};
