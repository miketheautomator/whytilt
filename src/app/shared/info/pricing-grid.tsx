import { FC } from 'react';

interface PricingGridProps {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
    description: string;
  }>;
}

export const PricingGrid: FC<PricingGridProps> = ({ title, items }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
      <h2 className="text-2xl sm:text-3xl text-zinc-400 mb-16 text-center">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="text-center p-12">
            <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
            <p className="text-zinc-400 mb-8">{item.subtitle}</p>
            <div className="text-zinc-300">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};