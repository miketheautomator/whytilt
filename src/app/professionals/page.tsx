'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/shared/header';
import { FooterProfessionals } from './footer-professionals';
import { Section } from '@/shared/section';
import { Hero } from './hero-landing';
import { PricingProfessionals } from './pricing-professionals';
import { DemoRequestProfessionals } from './demo-request-professionals';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

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
            linear-gradient(135deg, #0F1419 0%, #1E293B 100%),
            radial-gradient(ellipse at 80% 20%, rgba(8, 145, 178, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(22, 78, 99, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)
          `
        }}
      />
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora
          colorStops={["#0891B2", "#06B6D4", "#164E63"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <PixelBackground
          gap={8}
          speed={60}
          colors="#0891B2,#06B6D4,#164E63"
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
          <PricingProfessionals />
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestProfessionals />
        </Section>

        <FooterProfessionals />
      </div>
    </div>
  );
}