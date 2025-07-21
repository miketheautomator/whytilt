import { ReactNode } from 'react';

interface SectionTextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function SectionText({ children, size = 'md' }: SectionTextProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-lg sm:text-xl md:text-2xl",
    lg: "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
  };
  
  return <p className={`${sizeClasses[size]} text-gray-200 leading-relaxed`}>{children}</p>;
}