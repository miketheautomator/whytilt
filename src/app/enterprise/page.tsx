'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/app/shared/header';
import { FooterEnterprise } from './footer-enterprise';
import { Section } from '@/app/shared/section';
import { Hero } from './hero-landing';
import { LifestyleEnterprise } from './lifestyle-enterprise';
import { UseCasesEnterprise } from './use-cases-enterprise';
import { SavingsContent } from '@/app/shared/savings';
import { PricingEnterprise } from './pricing-enterprise';
import { LicensingContent } from '@/app/shared/licensing';
import { OnboardingContent } from '@/app/shared/onboarding';
import { DemoRequestEnterprise } from './demo-request-enterprise';
import PixelBackground from '@/app/shared/components/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/app/shared/components/Backgrounds/Aurora/Aurora';

export default function EnterprisePage() {
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

      <div
        ref={containerRef}
        className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white relative z-10"
      >
        <Header containerRef={containerRef} />

        <Section isIPhone={isIPhone} isHero={true}>
          <Hero 
            primaryText="50x production."
            secondaryText="Zero new hires."
            description="Scale your enterprise operations without scaling your workforce. Tilt automates complex workflows with the reliability and security your organization demands."
            audience="enterprise"
          />
        </Section>

        <Section isIPhone={isIPhone}>
          <LifestyleEnterprise />
        </Section>

        <Section isIPhone={isIPhone}>
          <UseCasesEnterprise />
        </Section>

        <Section isIPhone={isIPhone}>
          <SavingsContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <LicensingContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <PricingEnterprise />
        </Section>

        <Section isIPhone={isIPhone}>
          <OnboardingContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestEnterprise />
        </Section>

        <FooterEnterprise />
      </div>
    </div>
  );
}