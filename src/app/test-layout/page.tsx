"use client"
import { useEffect, useRef } from "react";
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

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <Section>
        <HeroContent />
      </Section>

      {/* Demo */}
      <Section>
        <DemoContent />
      </Section>

      {/* What can it do */}
      <Section>
        <CapabilitiesContent />
      </Section>

      {/* How can it save me time and money */}
      <Section>
        <SavingsContent />
      </Section>

      {/* Pricing */}
      <Section>
        <PricingContent />
      </Section>

      {/* Licensing */}
      <Section>
        <LicensingContent />
      </Section>

      {/* Request a white glove onboarding */}
      <Section>
        <OnboardingContent />
      </Section>

      <Footer />
    </div>
  );
}
