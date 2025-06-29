import { FC } from 'react';

interface LicensingCardsProps {
  title: string;
  subtitle?: string;
}

export const LicensingCards: FC<LicensingCardsProps> = ({ title }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
      <h2 className="text-4xl sm:text-6xl font-bold mb-20 leading-tight text-white">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-zinc-900/30 border border-zinc-600/30 rounded-2xl p-10">
          <div className="inline-block px-4 py-2 bg-zinc-500/20 text-zinc-200 text-sm font-semibold rounded-full mb-6">
            ALWAYS FREE
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
          <div className="text-lg text-zinc-300 mb-6">
            Under $250K annual revenue
          </div>
          <div className="text-zinc-400 text-left space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
              <span>Zero licensing fees</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
              <span>Full feature access</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
              <span>Only pay AI model costs</span>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900/30 border border-zinc-600/30 rounded-2xl p-10">
          <div className="inline-block px-4 py-2 bg-zinc-500/20 text-zinc-200 text-sm font-semibold rounded-full mb-6">
            1 YEAR FREE
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
          <div className="text-lg text-zinc-300 mb-6">
            Over $250K annual revenue
          </div>
          <div className="text-zinc-400 text-left space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
              <span>Free for first 12 months</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
              <span>Then negotiated per-seat licensing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
              <span>Plus AI model costs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};