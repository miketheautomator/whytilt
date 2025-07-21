'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/shared/header';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { DemoRequestContent } from '@/shared/demo-request';
import { DemoButton } from '@/shared/demo-button';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

export default function UsabilityTestingPage() {
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
            radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(91, 33, 182, 0.06) 0%, transparent 70%)
          `
        }}
      />
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora
          colorStops={["#8B5CF6", "#7C3AED", "#5B21B6"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <PixelBackground
          gap={8}
          speed={60}
          colors="#8B5CF6,#7C3AED,#5B21B6"
          autoStart={true}
        />
      </div>

      <div
        ref={containerRef}
        className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white relative z-10"
      >
        <Header containerRef={containerRef} />

        <Section isIPhone={isIPhone} isHero={true}>
          <div className="text-left">
            <div className="mt-8 sm:mt-12">
              <Section.Heading hero>
                Website Usability<br />
                Testing Made Simple
              </Section.Heading>
            </div>
            
            <Section.Subheading>
              Test user flows, navigation, and experience with intelligent digital workers that interact with your website like real users do.
            </Section.Subheading>
            
            <div className="mt-8 sm:mt-12">
              <Section.ButtonGroup>
                <DemoButton theme="usability-testing">
                  See It In Action
                </DemoButton>
                <Section.Button href="/contact" variant="secondary">
                  Get Started
                </Section.Button>
              </Section.ButtonGroup>
            </div>
          </div>
        </Section>

        <Section isIPhone={isIPhone}>
          <Section.Heading>Real User Behavior Testing</Section.Heading>
          <Section.Grid cols="2">
            <Section.Card>
              <Section.Heading card>User Journey Testing</Section.Heading>
              <Section.Text>Test complete user flows from landing page to conversion, identifying friction points and usability issues.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Navigation Testing</Section.Heading>
              <Section.Text>Verify menu functionality, link behavior, and site navigation across different devices and browsers.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Form Usability</Section.Heading>
              <Section.Text>Test form completion flows, validation messages, and user experience across signup and contact forms.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Mobile Responsiveness</Section.Heading>
              <Section.Text>Validate mobile user experience, touch interactions, and responsive design across different screen sizes.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestContent theme="usability-testing" />
        </Section>

        <Footer theme="usability-testing" />
      </div>
    </div>
  );
}