import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  hero?: boolean;
  card?: boolean;
}

export function SectionHeading({ children, hero = false, card = false }: SectionHeadingProps) {
  let textSize;
  if (hero) {
    textSize = "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl";
  } else if (card) {
    textSize = "text-lg sm:text-xl md:text-2xl";
  } else {
    textSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";
  }
  
  return <h1 className={`${textSize} font-bold text-white mb-4`}>{children}</h1>;
}