import { FC, PropsWithChildren } from 'react';

interface HeroProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Hero: FC<HeroProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center ${className}`}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
        {title}
      </h1>
      
      {subtitle && (
        <h2 className="text-xl sm:text-2xl text-zinc-400 mb-8 text-center">
          {subtitle}
        </h2>
      )}
      
      {children}
    </div>
  );
};