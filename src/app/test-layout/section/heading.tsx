import React, { ReactNode } from 'react';
import SplitText from '../../../TextAnimations/SplitText/SplitText';

interface SectionHeadingProps {
  children: ReactNode;
  hero?: boolean;
  card?: boolean;
  noAnimation?: boolean;
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

export function SectionHeading({ children, hero = false, card = false, noAnimation = false, size }: SectionHeadingProps) {
  let textSize;
  
  if (size) {
    switch (size) {
      case 'xl':
        textSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";
        break;
      case 'lg':
        textSize = "text-xl sm:text-2xl md:text-3xl lg:text-4xl";
        break;
      case 'md':
        textSize = "text-lg sm:text-xl md:text-2xl lg:text-3xl";
        break;
      case 'sm':
        textSize = "text-base sm:text-lg md:text-xl lg:text-2xl";
        break;
    }
  } else if (hero) {
    textSize = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl";
  } else if (card) {
    textSize = "text-lg sm:text-xl md:text-2xl";
  } else {
    textSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";
  }
  
  // Extract text content if it's a simple string inside JSX
  const textContent = typeof children === 'string' ? children : 
    (React.isValidElement(children) ? null : String(children));

  // Temporarily disable SplitText to fix scroll issues
  return <h1 className={`${textSize} font-bold text-white mb-4 leading-snug`}>{children}</h1>;
}