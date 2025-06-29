import { FC, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
  gradient?: 'blue' | 'purple' | 'indigo' | 'custom';
  customGradient?: string;
}

export const Section: FC<SectionProps> = ({ 
  children, 
  className = '',
  gradient = 'blue',
  customGradient
}) => {
  const gradientClasses = {
    blue: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800',
    purple: 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
    indigo: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900',
    custom: customGradient || 'bg-zinc-900'
  };

  return (
    <section 
      className={`w-full h-screen flex flex-col justify-center items-center relative overflow-hidden snap-start snap-always ${gradientClasses[gradient]} ${className}`}
    >
      {children}
    </section>
  );
};