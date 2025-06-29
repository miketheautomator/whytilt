import { FC } from 'react';

interface ComparisonProps {
  title: string;
  items: Array<{
    title: string;
    subtitle?: string;
    points: string[];
    variant?: 'negative' | 'positive';
  }>;
}

export const Comparison: FC<ComparisonProps> = ({ title, items }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-white text-center">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`border rounded-lg p-8 ${
              item.variant === 'negative' 
                ? 'bg-zinc-800/30 border-zinc-600/30' 
                : 'bg-zinc-700/30 border-zinc-500/30'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
            {item.subtitle && (
              <p className="text-zinc-400 mb-6">{item.subtitle}</p>
            )}
            <div className="space-y-4">
              {item.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    item.variant === 'negative' ? 'bg-zinc-500' : 'bg-zinc-300'
                  }`}></div>
                  <span className="text-zinc-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};