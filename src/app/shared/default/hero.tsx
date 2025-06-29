import { FC, PropsWithChildren } from 'react';

interface HeroProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  statusBadge?: React.ReactNode;
  className?: string;
}

export const Hero: FC<HeroProps> = ({ 
  title, 
  subtitle, 
  statusBadge,
  children,
  className = ''
}) => {
  return (
    <div className={`px-4 sm:px-6 lg:px-12 w-full max-w-7xl flex-1 flex flex-col justify-center ${className}`}>
      {statusBadge}
      
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 sm:mb-8 leading-[1.1] tracking-tight text-white max-w-6xl">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 mb-8 sm:mb-12 max-w-5xl">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
};