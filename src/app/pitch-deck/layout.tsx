import { ReactNode } from 'react';

interface PitchDeckLayoutProps {
  children: ReactNode;
}

export default function PitchDeckLayout({ children }: PitchDeckLayoutProps) {
  return <>{children}</>;
}