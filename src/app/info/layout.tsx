'use client';

import { useRef } from 'react';
import { Header } from '../shared/layout/header';
import { Footer } from '../shared/layout/footer';

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <main 
      ref={mainRef}
      className="relative h-dvh overflow-y-scroll snap-mandatory snap-y scroll-smooth"
      style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
        WebkitOverflowScrolling: 'touch',
        scrollSnapType: 'y mandatory'
      }}
    >
      <Header onReset={() => {}} selectedPath={null} mainRef={mainRef} />
      {children}
      <Footer className="h-dvh snap-start" />
    </main>
  );
}