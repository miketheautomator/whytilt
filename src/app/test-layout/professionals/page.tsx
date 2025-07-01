'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Section } from '../section';
import { Hero } from '../hero-landing';
import { LifestyleContent } from '../lifestyle';
import { UseCasesContent } from '../use-cases';
import { SavingsProfessionals } from '../savings-professionals';
import { PricingProfessionals } from '../pricing-professionals';
import { DemoRequestContent } from '../demo-request';
import PixelBackground from '../../../Backgrounds/PixelBackground/PixelBackground';
import Aurora from '../../../Backgrounds/Aurora/Aurora';

export default function ProfessionalsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    const detectIPhone = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipod/.test(userAgent);
      const hasHomeIndicator = window.innerHeight > 750;
      return isIOS && hasHomeIndicator;
    };

    setIsIPhone(detectIPhone());

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="h-screen w-screen relative">
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
          colorStops={["#DC2626", "#EA580C", "#0F172A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <PixelBackground
          gap={8}
          speed={60}
          colors="#DC2626,#EA580C,#0F172A"
          autoStart={true}
        />
      </div>

      <div
        ref={containerRef}
        className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white relative z-10"
      >
        <Header containerRef={containerRef} />

        <Section isIPhone={isIPhone} isHero={true}>
          <Hero 
            primaryText="Automate the"
            secondaryText="boring stuff."
            description="Focus on creative work that only you can do. Let Tilt handle the repetitive tasks that drain your energy and slow you down."
            audience="professionals"
          />
        </Section>

        <Section isIPhone={isIPhone}>
          <LifestyleContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <UseCasesContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <SavingsProfessionals />
        </Section>

        <Section isIPhone={isIPhone}>
          <PricingProfessionals />
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestContent />
        </Section>

        <Footer />
      </div>
    </div>
  );
}