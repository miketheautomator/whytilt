'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/shared/header';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { OnboardingContent } from '@/shared/onboarding';
import { DemoRequestContent } from '@/shared/demo-request';
import { DemoButton } from '@/shared/demo-button';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

export default function AnalyticsTestingPage() {
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
            radial-gradient(ellipse at 80% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(5, 150, 105, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(6, 78, 59, 0.06) 0%, transparent 70%)
          `
        }}
      />
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Aurora
          colorStops={["#10B981", "#059669", "#064E3B"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <PixelBackground
          gap={8}
          speed={60}
          colors="#10B981,#059669,#064E3B"
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
                Google Analytics<br />
                Event & Tag Testing
              </Section.Heading>
            </div>
            
            <Section.Subheading>
              Verify tracking events, conversion pixels, and analytics implementation with automated testing that validates data accuracy.
            </Section.Subheading>
            
            <div className="mt-8 sm:mt-12">
              <Section.ButtonGroup>
                <DemoButton theme="analytics-testing">
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
          <Section.Heading>Comprehensive Analytics Validation</Section.Heading>
          <Section.Grid cols="2">
            <Section.Card>
              <Section.Heading card>Event Tracking Testing</Section.Heading>
              <Section.Text>Validate button clicks, form submissions, page views, and custom events are properly firing and sending data.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Conversion Pixel Verification</Section.Heading>
              <Section.Text>Test Facebook Pixel, Google Ads conversions, and other tracking pixels to ensure accurate attribution data.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Tag Manager Testing</Section.Heading>
              <Section.Text>Verify Google Tag Manager implementation, trigger conditions, and data layer variables across user flows.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>E-commerce Tracking</Section.Heading>
              <Section.Text>Test purchase events, product impressions, cart additions, and revenue tracking for accurate reporting.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <OnboardingContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestContent theme="analytics-testing" />
        </Section>

        <Footer theme="analytics-testing" />
      </div>
    </div>
  );
}