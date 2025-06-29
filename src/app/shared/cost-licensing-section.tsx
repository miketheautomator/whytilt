'use client';

import { FC } from 'react';

interface CostLicensingSectionProps {
  className?: string;
}

export const CostLicensingSection: FC<CostLicensingSectionProps> = ({ className = '' }) => {
  return (
    <section className={`h-dvh snap-start bg-gradient-to-br from-zinc-800 via-blue-950/20 to-zinc-800 flex items-center justify-center ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-white text-center">
          Simple, Transparent Pricing
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-zinc-700/50 backdrop-blur-sm border border-zinc-600/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Pay Only for Model Usage</h3>
            <div className="space-y-4">
              <p className="text-zinc-300 leading-relaxed">
                The only cost is for our vision-action model inference. Currently powered by Anthropic - you use your own API key and handle billing directly through them.
              </p>
              <div className="bg-zinc-600/30 rounded-lg p-4">
                <div className="text-zinc-300 mb-2"><strong>Small tasks:</strong> A few pennies</div>
                <div className="text-zinc-300"><strong>Large test batches:</strong> A few dollars</div>
              </div>
              <div className="bg-zinc-600/20 border border-zinc-500/30 rounded-lg p-4">
                <p className="text-zinc-200 font-semibold">
                  🚀 Coming Soon: Our own model - faster and cheaper than Anthropic!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-700/50 backdrop-blur-sm border border-zinc-600/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Open Source + Fair Licensing</h3>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                  <span className="text-zinc-300"><strong>Consumers & Small Business:</strong> Free (just model costs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                  <span className="text-zinc-300"><strong>First Year:</strong> No seat license fees for anyone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
                  <span className="text-zinc-300"><strong>Companies $250K+ revenue:</strong> Per-seat licenses (negotiated)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                  <span className="text-zinc-300"><strong>Open Source:</strong> Full source code access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-zinc-700/30 backdrop-blur-sm border border-zinc-600/30 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-zinc-300 text-lg">
              <strong>No hidden fees. No vendor lock-in. No complex pricing tiers.</strong><br/>
              Just pay for what you use, and get the full power of an open source automation platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};