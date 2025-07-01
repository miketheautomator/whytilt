'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Section } from '../section';
import { Hero } from '../hero-landing';
import { OnboardingContent } from '../onboarding';
import { DemoRequestContent } from '../demo-request';
import PixelBackground from '../../../Backgrounds/PixelBackground/PixelBackground';
import Aurora from '../../../Backgrounds/Aurora/Aurora';

export default function WebsiteTestingPage() {
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
            primaryText="Testing Websites Without"
            secondaryText="Brittle DOM Tests"
            description="Stop wasting time fighting with DOM selectors that break every deployment. Tilt tests your website the way real customers use it - with vision AI that actually sees your site."
            audience="enterprise"
          />
        </Section>

        <Section isIPhone={isIPhone}>
          <Section.Heading>The Problem with Current Testing Tools</Section.Heading>
          <Section.Grid cols="2">
            <Section.Card>
              <Section.Heading card>Headless Testing is Fake Testing</Section.Heading>
              <Section.Text>Your customers don&apos;t use headless browsers. They use real Chrome, Safari, and Firefox with real rendering, real JavaScript, and real user interactions.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>DOM Selectors Break Everything</Section.Heading>
              <Section.Text>Every time you change a class name, move a button, or update your design, your tests break. DOM-based testing is obsolete.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Esoteric Code Requirements</Section.Heading>
              <Section.Text>Playwright and Selenium require expensive, ever-changing, complicated code suites. Your tests become another codebase to maintain.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>No Intelligence or Adaptation</Section.Heading>
              <Section.Text>Traditional tools can&apos;t handle popups, changed text, moved buttons, network errors, or site redesigns. One small change breaks everything.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <Section.Heading>Tilt: Vision-Based Website Testing That Actually Works</Section.Heading>
          <Section.Subheading>Tilt can actually SEE your website and navigate it using a real browser on a real desktop using a mouse and keyboard - just like a real customer would.</Section.Subheading>
          <Section.Grid cols="3">
            <Section.Card>
              <Section.Heading card>Vision AI That Actually Sees</Section.Heading>
              <Section.Text>Our powerful vision model sees your website like a human does - identifying buttons, forms, and content visually, not through fragile DOM selectors.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Plain English Instructions</Section.Heading>
              <Section.Text>Write tests in plain English. No code, no selectors, no technical syntax. Just describe what you want tested like you&apos;re talking to a person.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Intelligent & Adaptive</Section.Heading>
              <Section.Text>Tilt overcomes popups, changed text, moved buttons, network errors, and even whole site redesigns. It&apos;s an intelligent agent, not a brittle script.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <Section.Heading>Real Browser Testing in Plain English</Section.Heading>
          <Section.Grid cols="2">
            <Section.Box>
              <Section.Heading size="lg">Instead of This Brittle Code:</Section.Heading>
              <Section.Text>await page.locator(&apos;[data-testid=&quot;login-button&quot;]&apos;).click();</Section.Text>
              <Section.Text>await page.fill(&apos;#username-input-field-id&apos;, &apos;user@test.com&apos;);</Section.Text>
              <Section.Text>Breaks when any CSS class or ID changes</Section.Text>
            </Section.Box>
            <Section.Box>
              <Section.Heading size="lg">Just Write This:</Section.Heading>
              <Section.Text>&quot;Go to the login page, enter &apos;user@test.com&apos; as the username and &apos;password123&apos; as the password, click login, and verify the welcome message appears.&quot;</Section.Text>
            </Section.Box>
          </Section.Grid>
          <Section.Text>Tilt handles the rest - finding elements visually, dealing with loading states, and adapting to changes automatically.</Section.Text>
        </Section>

        <Section isIPhone={isIPhone}>
          <Section.Heading>How Tilt Tests Your Website</Section.Heading>
          <Section.Grid cols="3">
            <Section.Card>
              <Section.Heading card>Real Desktop, Real Browser</Section.Heading>
              <Section.Text>Tilt runs on actual Chrome, Safari, or Firefox browsers on real desktops (Mac, Windows, Linux). No headless simulations.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Vision-Based Navigation</Section.Heading>
              <Section.Text>Our AI actually sees your website and identifies buttons, forms, and content visually. No more broken tests when you change a CSS class.</Section.Text>
            </Section.Card>
            <Section.Card>
              <Section.Heading card>Autonomous Task Runner</Section.Heading>
              <Section.Text>Set up test queues that run autonomously. Tilt can re-run your tests on schedule, after deployments, or from your CI/CD pipeline.</Section.Text>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <OnboardingContent />
        </Section>

        <Section isIPhone={isIPhone}>
          <DemoRequestContent />
        </Section>

        <Footer />
      </div>
    </div>
  );
}