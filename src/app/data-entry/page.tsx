'use client';
import { useRef } from 'react';
import { Header } from '@/app/shared/header';
import { Footer } from '@/app/shared/footer';
import Aurora from '@/app/shared/react-bits/Backgrounds/Aurora/Aurora';
import PixelBackground from '@/app/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import { Section } from '@/app/shared/section';
import { DemoButton } from '@/app/shared/demo-button';

export default function DataEntryPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  
  return (
    <>
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%),
            radial-gradient(ellipse at 80% 20%, rgba(37, 99, 235, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(5, 150, 105, 0.06) 0%, transparent 70%)
          `
        }}
      />
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora
          colorStops={["#5227FF", "#1E40AF", "#0F172A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <PixelBackground
          gap={8}
          speed={60}
          colors="#5227FF,#3B82F6,#1E3A8A"
          autoStart={true}
        />
      </div>

      {/* Scrolling Content Container */}
      <div
        ref={mainRef}
        className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white relative z-10"
      >
        <Header containerRef={mainRef} />
        
        <Section>
          <div className="text-left">
            <div className="mt-8 sm:mt-12">
              <Section.Heading hero>
                Automate Data Entry<br />
                Across Any System
              </Section.Heading>
            </div>
            
            <Section.Subheading>
              Fill forms, extract data, and validate information with intelligent digital workers that see and interact with any application like a human does.
            </Section.Subheading>
            
            <div className="mt-8 sm:mt-12">
              <Section.ButtonGroup>
                <DemoButton theme="data-entry">
                  See It In Action
                </DemoButton>
                <Section.Button href="/contact" variant="secondary">
                  Get Started
                </Section.Button>
              </Section.ButtonGroup>
            </div>
          </div>
        </Section>

        <Section>
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
        </Section>

        <Footer theme="blue" />
      </div>
    </>
  );
}