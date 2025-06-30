"use client"
import { useEffect, useRef, useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Section } from "./section";
import { HeroContent } from "./hero";
import { DemoContent } from "./demo";
import { CapabilitiesContent } from "./capabilities";
import { SavingsContent } from "./savings";
import { PricingContent } from "./pricing";
import { LicensingContent } from "./licensing";
import { OnboardingContent } from "./onboarding";
import { DemoRequestContent } from "./demo-request";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    // Detect iPhone
    const detectIPhone = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipod/.test(userAgent);
      const hasHomeIndicator = window.innerHeight > 750; // Rough check for newer iPhones
      return isIOS && hasHomeIndicator;
    };

    setIsIPhone(detectIPhone());

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white"
    >
      <Header containerRef={containerRef} />

      {/* Hero */}
      <Section isIPhone={isIPhone}>
        <HeroContent />
      </Section>

      {/* Demo */}
      <Section isIPhone={isIPhone}>
        <DemoContent />
      </Section>

      {/* What can it do */}
      <Section isIPhone={isIPhone}>
        <CapabilitiesContent />
      </Section>

      {/* How can it save me time and money */}
      <Section isIPhone={isIPhone}>
        <SavingsContent />
      </Section>

      {/* Pricing */}
      <Section isIPhone={isIPhone}>
        <PricingContent />
      </Section>

      {/* Licensing */}
      <Section isIPhone={isIPhone}>
        <LicensingContent />
      </Section>

      {/* Request a white glove onboarding */}
      <Section isIPhone={isIPhone}>
        <OnboardingContent />
      </Section>

      {/* Demo Request */}
      <Section isIPhone={isIPhone}>
        <DemoRequestContent />
      </Section>

      <Footer />
    </div>
  );
}
