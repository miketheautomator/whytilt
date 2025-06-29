import { FC } from 'react';

interface ProblemGridProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export const ProblemGrid: FC<ProblemGridProps> = ({ title, items }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-white text-center">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-zinc-300 mb-4">{item.title}</h3>
            <p className="text-zinc-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};