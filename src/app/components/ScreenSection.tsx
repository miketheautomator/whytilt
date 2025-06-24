import { FC, PropsWithChildren } from 'react';

interface ScreenSectionProps extends PropsWithChildren {
  className?: string;
}

export const ScreenSection: FC<ScreenSectionProps> = ({ children, className = '' }) => {
  return (
    <section 
      className={`w-full h-screen flex flex-col justify-center items-center relative overflow-hidden snap-start snap-always ${className}`}
    >
      {children}
    </section>
  );
};
