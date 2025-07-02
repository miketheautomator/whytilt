import { FC, PropsWithChildren } from 'react';

interface ContentProps extends PropsWithChildren {
  title?: string;
  maxWidth?: 'narrow' | 'medium' | 'wide' | 'full';
  className?: string;
}

export const Content: FC<ContentProps> = ({ 
  title, 
  children, 
  maxWidth = 'wide',
  className = '' 
}) => {
  const maxWidthClasses = {
    narrow: 'max-w-3xl',
    medium: 'max-w-4xl', 
    wide: 'max-w-6xl',
    full: 'max-w-7xl'
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-12 ${className}`}>
      {title && (
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12 text-white text-center">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};