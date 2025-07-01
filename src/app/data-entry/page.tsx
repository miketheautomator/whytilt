'use client';
import { useRef } from 'react';
import { Header } from '@/app/shared/layout/header';
import { Footer } from '@/app/shared/layout/footer';
import Aurora from '@/app/shared/components/Backgrounds/Aurora/Aurora';
import { Section } from '@/app/shared/section';

export default function DataEntryPage() {
  const mainRef = useRef<HTMLElement>(null);
  
  return (
    <>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora colorStops={["#059669", "#0D9488", "#0F172A"]} />
      </div>
      <main 
        ref={mainRef}
        className="relative h-dvh overflow-y-scroll snap-mandatory snap-y scroll-smooth z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <Header onReset={() => {}} selectedPath={null} mainRef={mainRef} />
        
        <section className="flex flex-col items-center justify-center h-dvh snap-start text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900/50 to-zinc-800/30">
          <Section.Heading>Intelligent Data Entry</Section.Heading>
          <Section.Subheading>Fill forms, extract data, and validate information across any system</Section.Subheading>
          
          <Section.Grid cols="2" gap="lg">
            <Section.Card padding="lg">
              <Section.Heading card>Cross-System Data Transfer</Section.Heading>
              <Section.Text>Move data between CRMs, ERPs, databases, and web applications without manual copy-paste work.</Section.Text>
            </Section.Card>
            
            <Section.Card padding="lg">
              <Section.Heading card>Smart Form Filling</Section.Heading>
              <Section.Text>Automatically populate forms with data from spreadsheets, databases, or other sources with intelligent field mapping.</Section.Text>
            </Section.Card>
            
            <Section.Card padding="lg">
              <Section.Heading card>Data Validation</Section.Heading>
              <Section.Text>Verify data accuracy, check for duplicates, and ensure compliance with business rules across systems.</Section.Text>
            </Section.Card>
            
            <Section.Card padding="lg">
              <Section.Heading card>Handles Complex Workflows</Section.Heading>
              <Section.Text>Navigate multi-step processes, handle conditional logic, and manage exceptions automatically.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </section>

        <Footer />
      </main>
    </>
  );
}