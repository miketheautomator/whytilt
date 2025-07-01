"use client"
import { useEffect, useRef, useState } from "react";
import { Header } from "@/app/shared/header";
import { Footer } from "@/app/shared/footer";
import { Section } from "@/app/shared/section";
import { HeroContent } from "@/app/shared/hero";
import { AudienceSelection } from "@/app/shared/audience-selection";
import { DemoContent } from "@/app/shared/demo";
import { CapabilitiesContent } from "@/app/shared/capabilities";
import { PricingContent } from "@/app/shared/pricing";
import { OnboardingContent } from "@/app/shared/onboarding";
import { DemoRequestContent } from "@/app/shared/demo-request";
import PixelBackground from "@/app/shared/react-bits/Backgrounds/PixelBackground/PixelBackground";
import Aurora from "@/app/shared/react-bits/Backgrounds/Aurora/Aurora";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIPhone, setIsIPhone] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'management' | 'worker' | null>(null);

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

  const handleRoleSelection = (role: 'management' | 'worker') => {
    setSelectedRole(role);
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleReset = () => {
    setSelectedRole(null);
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Static Background Layers - Outside scroll container */}
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
        ref={containerRef}
        className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white relative z-10"
      >
        <Header containerRef={containerRef} />

      {/* Hero */}
      <Section isIPhone={isIPhone} isHero={true}>
        <HeroContent onRoleSelection={handleRoleSelection} selectedRole={selectedRole} onReset={handleReset} />
      </Section>

      {/* Audience Selection */}
      <Section isIPhone={isIPhone}>
        <AudienceSelection />
      </Section>

      {/* Demo - ALL AUDIENCES */}
      <Section isIPhone={isIPhone}>
        <DemoContent />
      </Section>

      {/* What can it do - ALL AUDIENCES */}
      <Section isIPhone={isIPhone}>
        <CapabilitiesContent />
      </Section>

      {/* Pricing - ALL AUDIENCES */}
      <Section isIPhone={isIPhone}>
        <PricingContent />
      </Section>

      {/* White Glove Onboarding */}
      <Section isIPhone={isIPhone}>
        <OnboardingContent />
      </Section>

      {/* Demo Request */}
      <Section isIPhone={isIPhone}>
        <DemoRequestContent />
      </Section>

        <Footer />
      </div>
    </div>
  );
}