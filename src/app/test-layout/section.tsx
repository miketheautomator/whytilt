import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

interface SectionHeadingProps {
  children: ReactNode;
}

interface SectionSubheadingProps {
  children: ReactNode;
}

function SectionHeading({ children }: SectionHeadingProps) {
  return <h1 className="text-6xl font-bold text-white mb-4">{children}</h1>;
}

function SectionSubheading({ children }: SectionSubheadingProps) {
  return <p className="text-xl text-gray-300">{children}</p>;
}

export function Section({ children }: SectionProps) {
  return (
    <section 
      className="snap-start h-screen w-full flex items-center justify-center relative overflow-hidden" 
      style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%)'}}
    >
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(37, 99, 235, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(5, 150, 105, 0.06) 0%, transparent 70%)
          `,
          mixBlendMode: 'lighten'
        }}
      />
      <div className="relative z-10 max-w-7xl w-full text-center p-8">
        {children}
      </div>
    </section>
  );
}

Section.Heading = SectionHeading;
Section.Subheading = SectionSubheading;