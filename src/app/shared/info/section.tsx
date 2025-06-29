import { FC, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
  background?: 'primary' | 'secondary' | 'tertiary';
  baseColor?: 'blue' | 'green' | 'purple' | 'orange' | 'cyan' | 'red' | 'yellow';
}

export const Section: FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'primary',
  baseColor = 'blue'
}) => {
  const getBgClass = () => {
    if (baseColor === 'blue') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-zinc-900 via-blue-950/30 to-zinc-900';
        case 'secondary':
          return 'bg-gradient-to-br from-zinc-800 via-blue-950/20 to-zinc-800';
        case 'tertiary':
          return 'bg-gradient-to-br from-zinc-700 via-blue-950/25 to-zinc-700';
      }
    } else if (baseColor === 'green') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-zinc-900 via-green-950/30 to-zinc-900';
        case 'secondary':
          return 'bg-gradient-to-br from-zinc-800 via-green-950/20 to-zinc-800';
        case 'tertiary':
          return 'bg-gradient-to-br from-zinc-700 via-green-950/25 to-zinc-700';
      }
    } else if (baseColor === 'purple') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-zinc-900 via-purple-950/30 to-zinc-900';
        case 'secondary':
          return 'bg-gradient-to-br from-zinc-800 via-purple-950/20 to-zinc-800';
        case 'tertiary':
          return 'bg-gradient-to-br from-zinc-700 via-purple-950/25 to-zinc-700';
      }
    } else if (baseColor === 'orange') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-zinc-900 via-orange-950/30 to-zinc-900';
        case 'secondary':
          return 'bg-gradient-to-br from-zinc-800 via-orange-950/20 to-zinc-800';
        case 'tertiary':
          return 'bg-gradient-to-br from-zinc-700 via-orange-950/25 to-zinc-700';
      }
    }
    
    // Default fallback
    return 'bg-gradient-to-br from-zinc-900 via-blue-950/30 to-zinc-900';
  };

  return (
    <section 
      className={`h-dvh snap-start flex items-center justify-center ${getBgClass()} ${className}`}
    >
      {children}
    </section>
  );
};