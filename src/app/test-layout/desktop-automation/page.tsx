'use client';
import { useRef } from 'react';
import { Header } from '@/app/shared/layout/header';
import { Footer } from '@/app/shared/layout/footer';
import Aurora from '../../../Backgrounds/Aurora/Aurora';
import { Section } from '../section';

export default function DesktopAutomationPage() {
  const mainRef = useRef<HTMLElement>(null);
  
  return (
    <>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora colorStops={["#DC2626", "#EA580C", "#0F172A"]} />
      </div>
      <main 
        ref={mainRef}
        className="relative h-dvh overflow-y-scroll snap-mandatory snap-y scroll-smooth z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <Header onReset={() => {}} selectedPath={null} mainRef={mainRef} />
        
        <section className="flex flex-col items-center justify-center h-dvh snap-start text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900/50 to-zinc-800/30">
          <Section.Heading>Desktop Application Automation</Section.Heading>
          <Section.Subheading>Control any desktop application with intelligent mouse and keyboard actions</Section.Subheading>
          
          <Section.Grid cols="2" gap="lg">
            <Section.Card padding="lg">
              <Section.Heading card>Any Application</Section.Heading>
              <Section.Text>Automate legacy software, proprietary tools, and modern applications that lack APIs or integrations.</Section.Text>
            </Section.Card>
            
            <Section.Card padding="lg">
              <Section.Heading card>Vision-Based Control</Section.Heading>
              <Section.Text>Identifies buttons, menus, and fields visually - works even when applications update their interface.</Section.Text>
            </Section.Card>
            
            <Section.Card padding="lg">
              <Section.Heading card>Cross-Platform Support</Section.Heading>
              <Section.Text>Works on Windows, macOS, and Linux desktop environments with native application control.</Section.Text>
            </Section.Card>
            
            <Section.Card padding="lg">
              <Section.Heading card>Complex Workflows</Section.Heading>
              <Section.Text>Handle multi-application workflows, file operations, and system-level tasks with intelligent decision making.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </section>

        <Footer />
      </main>
    </>
  );
}