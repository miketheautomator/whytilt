'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/shared/header';
import { FooterSmallBusiness } from './footer-small-business';
import { Section } from '@/shared/section';
import { Hero } from './hero-landing';
import { SavingsContent } from '@/shared/savings';
import { PricingSmallBusiness } from './pricing-small-business';
import { OnboardingContent } from '@/shared/onboarding';
import { DemoRequestSmallBusiness } from './demo-request-small-business';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

export default function SmallBusinessPage() {
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
            radial-gradient(ellipse at 80% 20%, rgba(5, 150, 105, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(5, 150, 105, 0.06) 0%, transparent 70%)
          `
        }}
      />
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora
          colorStops={["#059669", "#10B981", "#0F172A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <PixelBackground
          gap={8}
          speed={60}
          colors="#059669,#10B981,#0F172A"
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
            primaryText="Scale without"
            secondaryText="the headache."
            description="Grow your business without growing your team. Tilt handles the repetitive work so you can focus on what matters most - your customers and your vision."
            audience="small-business"
          />
        </Section>

        <Section isIPhone={isIPhone}>
          <SavingsContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <PricingSmallBusiness />
        </Section>

        <Section isIPhone={isIPhone}>
          <OnboardingContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestSmallBusiness />
        </Section>

        <FooterSmallBusiness />
      </div>
    </div>
  );
}