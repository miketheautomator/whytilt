import { ReactNode } from 'react';

interface SectionSubheadingProps {
  children: ReactNode;
}

export function SectionSubheading({ children }: SectionSubheadingProps) {
  return <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">{children}</p>;
}