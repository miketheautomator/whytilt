import { ReactNode } from 'react';

interface SectionTextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function SectionText({ children, size = 'md' }: SectionTextProps) {
  const sizeClasses = {
    sm: "text-sm sm:text-base",
    md: "text-sm sm:text-base md:text-lg",
    lg: "text-base sm:text-lg md:text-xl lg:text-2xl"
  };
  
  return <p className={`${sizeClasses[size]} text-gray-200 leading-relaxed`}>{children}</p>;
}