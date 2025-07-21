'use client';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/shared/header';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { Hero } from './hero-landing';
import { DownloadButton } from './download-button';
import { AirbnbSlideshow } from './airbnb-slideshow';
import { DemoRequestContent } from '@/shared/demo-request';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

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
            primaryText="Tilt tests websites the way"
            secondaryText="your users do. With a real browser."
            description=""
            audience="enterprise"
            containerRef={containerRef}
          />
        </Section>

        <Section isIPhone={isIPhone} id="download">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-snug font-bold max-w-6xl text-center mb-8">Download Tilt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-base font-medium text-white mb-3">Get Started Today</h3>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Docker Desktop is required. Linux, Windows or Mac Silicon is required.
                </p>
              </div>
              <div>
                <DownloadButton />
              </div>
            </div>
            <AirbnbSlideshow />
          </div>
        </Section>

        <Section isIPhone={isIPhone}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-snug font-bold max-w-6xl text-center mb-8">The Problem with Current Testing Tools</h2>
          <Section.Grid cols="2">
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">Headless Testing is Fake Testing</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Your customers don't use headless browsers. They use real Chrome, Safari, and Firefox with real rendering, real JavaScript, and real user interactions.</p>
            </Section.Card>
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">DOM Selectors Break Everything</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Every time you change a class name, move a button, or update your design, your tests break. DOM-based testing is obsolete.</p>
            </Section.Card>
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">Esoteric Code Requirements</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Playwright and Selenium require expensive, ever-changing, complicated code suites. Your tests become another codebase to maintain.</p>
            </Section.Card>
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">No Intelligence or Adaptation</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Traditional tools can't handle popups, changed text, moved buttons, network errors, or site redesigns. One small change breaks everything.</p>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-snug font-bold max-w-6xl text-center mb-4">Tilt: Vision-Based Website Testing That Actually Works</h2>
          <p className="text-xl text-zinc-300 text-center mb-8 max-w-4xl mx-auto">Tilt can actually SEE your website and navigate it using a real browser on a real desktop using a mouse and keyboard - just like a real customer would.</p>
          <Section.Grid cols="3">
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">Vision AI That Actually Sees</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Our powerful vision model sees your website like a human does - identifying buttons, forms, and content visually, not through fragile DOM selectors.</p>
            </Section.Card>
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">Plain English Instructions</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Write tests in plain English. No code, no selectors, no technical syntax. Just describe what you want tested like you're talking to a person.</p>
            </Section.Card>
            <Section.Card>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent & Adaptive</h3>
              <p className="text-xl text-zinc-300 leading-relaxed">Tilt overcomes popups, changed text, moved buttons, network errors, and even whole site redesigns. It's an intelligent agent, not a brittle script.</p>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Section isIPhone={isIPhone}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-snug font-bold max-w-6xl">Real Browser Testing in Plain English</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 p-6 border border-white/10 rounded-lg">
              <div className="space-y-3 text-xl text-zinc-300" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace' }}>
                <p>await page.locator('[data-testid="login-button"]').click();</p>
                <p>await page.fill('#username-input-field-id', 'user@test.com');</p>
                <p>Breaks when any CSS class or ID changes</p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/5 p-6 border border-white/10 rounded-lg">
              <p className="text-xl text-zinc-300 leading-relaxed" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Go to the login page, enter 'user@test.com' as the username and 'password123' as the password, click login, and verify the welcome message appears.</p>
            </div>
          </div>
          <p className="text-base text-zinc-300 text-center mt-8 max-w-4xl mx-auto">Tilt handles the rest - finding elements visually, dealing with loading states, and adapting to changes automatically.</p>
        </Section>

        <Section isIPhone={isIPhone}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-snug font-bold max-w-6xl">Simple, Transparent Pricing</h2>
            <p className="text-base text-zinc-300">Our pricing is easy - start free, then pay as you scale</p>
          </div>
          <Section.Grid cols="2">
            <Section.Card>
              <div className="text-base font-semibold text-white mb-4">For Everyone</div>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-blue-400">
                  Initial month: <span className="text-blue-400">$0/mo</span>
                </div>
                <div className="text-xl font-semibold">
                  After: <span className="text-white">$25/mo</span>
                </div>
                <div className="text-base text-zinc-300">
                  + Pay for model usage. Most tests are less than a penny
                </div>
                <div className="text-base text-zinc-400 mt-4">
                  This is for everybody, but we do have enterprise seat pricing as well.
                </div>
                <div className="mt-6">
                  <DownloadButton />
                </div>
              </div>
            </Section.Card>
            <Section.Card>
              <div className="text-base font-semibold text-white mb-4">Enterprise</div>
              <div className="space-y-4">
                <div className="text-xl font-semibold text-blue-400">
                  Custom Seat Pricing
                </div>
                <div className="text-base text-zinc-300">
                  Tailored pricing for teams and organizations
                </div>
                <div className="space-y-3">
                  <div className="text-base text-zinc-400">✓ Volume discounts available</div>
                  <div className="text-base text-zinc-400">✓ On-premises deployment</div>
                  <div className="text-base text-zinc-400">✓ Priority support</div>
                  <div className="text-base text-zinc-400">✓ Custom integrations</div>
                </div>
                <a href="https://github.com/WhyTilt/tilt-app/archive/refs/tags/0.0.64.zip" className="inline-block bg-gradient-to-b from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-3 rounded-full transition-all text-base">
                  Download
                </a>
              </div>
            </Section.Card>
          </Section.Grid>
        </Section>

        <Footer />
      </div>
    </div>
  );
}