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
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-white text-center">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-300 mb-2 sm:mb-3 md:mb-4">{item.title}</h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};