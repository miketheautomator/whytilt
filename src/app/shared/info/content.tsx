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
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-white text-center">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};