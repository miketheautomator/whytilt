import { ReactNode } from 'react';

interface SectionGridProps {
  children: ReactNode;
  cols?: '1' | '2' | '3' | '4';
  gap?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
}

export function SectionGrid({ children, cols = '2', gap = 'md', responsive = true }: SectionGridProps) {
  const baseGridClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2', 
    '3': 'grid-cols-3',
    '4': 'grid-cols-4'
  };
  
  const responsiveGridClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };
  
  const gapClasses = {
    sm: 'gap-2 sm:gap-4',
    md: 'gap-3 sm:gap-6',
    lg: 'gap-4 sm:gap-8'
  };
  
  const gridClasses = responsive ? responsiveGridClasses[cols] : baseGridClasses[cols];
  
  return (
    <div className={`grid ${gridClasses} ${gapClasses[gap]} mt-8 sm:mt-12 w-full max-w-full overflow-hidden`}>
      {children}
    </div>
  );
}