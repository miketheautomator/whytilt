'use client';
import { useState, useEffect, useRef } from 'react';
import { Header } from '@/shared/header';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

export default function PitchDeckPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIPhone, setIsIPhone] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Detect iPhone
    const detectIPhone = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipod/.test(userAgent);
      const hasHomeIndicator = window.innerHeight > 750;
      return isIOS && hasHomeIndicator;
    };

    setIsIPhone(detectIPhone());

    // Check if already authenticated in session
    const authenticated = sessionStorage.getItem('pitch-deck-auth');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAuthenticated) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(prev + 1, 8)); // 9 slides total (0, 1, 2, 3, 4, 5, 6, 7, 8)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/pitch-deck/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        sessionStorage.setItem('pitch-deck-auth', 'true');
        setIsAuthenticated(true);
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };


  if (!isAuthenticated) {
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

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-purple-500/30 shadow-2xl max-w-md w-full p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Pitch Deck Access</h1>
              <p className="text-purple-300">Enter password to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-600/50 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm">
                  <Section.Text>{error}</Section.Text>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200"
              >
                {isLoading ? 'Authenticating...' : 'Access Pitch Deck'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

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

        {currentSlide === 0 && (
          /* The Problem */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="lg">❌ The Problem</Section.Heading>
              <Section.Text size="lg">QA test automation is fundamentally broken and expensive</Section.Text>
            </div>

            <Section.Card className="mb-6">
              <div className="text-yellow-400 font-bold mb-4"><Section.Text>At a typical SaaS company:</Section.Text></div>
              <Section.List variant="bullet">
                <li>Engineers maintain hundreds of DOM-based test scripts in headless systems</li>
                <li>A minor UI tweak — like a class name change — can break dozens of tests overnight</li>
                <li>QA teams spend up to <span className="text-yellow-400 font-bold">40%+ of their time</span> fixing brittle scripts</li>
                <li>If only there was a way to just use plan english and fully autonomous intelligent testing</li>
              </Section.List>
            </Section.Card>

            <Section.Card className="mb-6">
              <div className="text-yellow-400 font-bold mb-4"><Section.Text>💸 This costs:</Section.Text></div>
              <Section.List variant="bullet">
                <li><span className="text-yellow-400 font-bold">$65k-$120k/year per QA engineer</span> — much of it wasted on maintenance</li>
                <li>Enterprises spend <span className="text-yellow-400 font-bold">$20B+/year globally</span> on test automation tools and labor</li>
                <li>Many companies still rely heavily on manual testing <span className="text-yellow-400 font-bold">due to test complexity</span> and exploratory needs.</li>
                <li>And only <span className="text-yellow-400 font-bold">11% of companies</span> reach fully automated testing — most give up trying</li>
              </Section.List>
            </Section.Card>
          </Section>
        )}

        {currentSlide === 1 && (
          /* The Market */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="lg">📊 The Market</Section.Heading>
              <Section.Text size="lg">Companies spend billions trying to automate software workflows — and it&apos;s not working.</Section.Text>
            </div>

            <Section.Grid cols="2" responsive={true} gap="lg">
              <Section.Card>
                <div className="font-bold text-yellow-400 mb-4"><Section.Text>Market Size</Section.Text></div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl font-bold mr-4">$41.7B</span>
                    <Section.Text size="sm">Software testing & QA spend (2025)</Section.Text>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl font-bold mr-4">$28.3B</span>
                    <Section.Text size="sm">Robotic Process Automation (RPA) market (2025)</Section.Text>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 text-2xl font-bold mr-4">40,000+</span>
                    <Section.Text size="sm">orgs with internal QA & ops teams struggling to scale automation</Section.Text>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-yellow-400 font-bold mb-3"><Section.Text>🎯 Tilt&apos;s Wedge</Section.Text></div>
                  <Section.List variant="none">
                    <li><span className="text-yellow-400 font-semibold">Target:</span> SaaS companies with $250K+ in revenue</li>
                    <li><span className="text-yellow-400 font-semibold">Buyer:</span> Internal QA and ops teams</li>
                    <li><span className="text-yellow-400 font-semibold">Use Case:</span> High-friction UI workflows too brittle for DOM-based automation</li>
                  </Section.List>
                </div>
              </Section.Card>

              <Section.Card>
                <div className="font-bold text-yellow-400 mb-4"><Section.Text>Market Layers</Section.Text></div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-semibold">TAM</span>
                    <Section.Text size="sm">~$70B+ (QA + RPA combined)</Section.Text>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-yellow-400 font-semibold">SAM</span>
                    <div className="text-right"><Section.Text size="sm">~$5–10B (QA + internal ops in mid-market SaaS and enterprise)</Section.Text></div>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-yellow-400 font-semibold">SOM</span>
                    <div className="text-right"><Section.Text size="sm">~5,000 companies with CI/CD pipelines and automation pain</Section.Text></div>
                  </div>
                </div>

                <div>
                  <div className="text-yellow-400 font-bold mb-3"><Section.Text>⚡ Why Now?</Section.Text></div>
                  <Section.List variant="bullet">
                    <li>AI vision + reasoning is now fast, accurate, and production-ready</li>
                    <li>Engineering fatigue from maintaining flaky tests and bots</li>
                    <li>Teams are shifting from scripts to agents — Tilt is how they get there</li>
                  </Section.List>
                </div>
              </Section.Card>
            </Section.Grid>
          </Section>
        )}

        {currentSlide === 2 && (
          /* The Solution */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="lg">✅ The Solution</Section.Heading>
              <Section.Text size="lg">Tilt is an intelligent vision-action agent that automates software workflows like a real user—visually, autonomously, and with common sense.</Section.Text>
            </div>

            <Section.Grid cols="2" responsive={true} gap="lg">
              <Section.Card>
                <div className="text-yellow-400 font-bold mb-4"><Section.Text>How it works:</Section.Text></div>
                <Section.List variant="bullet">
                  <li><span className="text-yellow-400 font-semibold">Sees the screen like a human</span>—using a vision model</li>
                  <li><span className="text-yellow-400 font-semibold">Understands plain English</span>—via a language model</li>
                  <li><span className="text-yellow-400 font-semibold">Acts using keyboard and mouse</span> across apps, browsers, and OS environments</li>
                  <li><span className="text-yellow-400 font-semibold">Flexible:</span> run one task or an entire queue, on demand or on a schedule</li>
                </Section.List>
              </Section.Card>

              <Section.Card>
                <div className="text-yellow-400 font-bold mb-4"><Section.Text>Built for:</Section.Text></div>
                <Section.List variant="none">
                  <li><span className="text-yellow-400 font-semibold">QA teams:</span> End-to-end, visual tests that survive UI changes</li>
                  <li><span className="text-yellow-400 font-semibold">Ops teams:</span> Cross-app automation without brittle RPA</li>
                  <li><span className="text-yellow-400 font-semibold">Developers:</span> Release validation without writing a line of test code</li>
                  <li><span className="text-yellow-400 font-semibold">Anyone:</span> Automate UI work without APIs, scripts, or integrations</li>
                </Section.List>
              </Section.Card>
            </Section.Grid>


          </Section>
        )}

        {currentSlide === 3 && (
          /* Business Model */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="lg">🔥 Business Model</Section.Heading>
              <Section.Text size="lg">Usage-first, license-second. High-margin, high-retention.</Section.Text>
            </div>

            <Section.Grid cols="2" responsive={true} gap="md">
              <Section.Card>
                <div className="text-yellow-400 font-bold "><Section.Text>🪝 Year 1: Trojan Horse Entry</Section.Text></div>
                <Section.List variant="bullet">
                  <li><span className="text-yellow-400 font-semibold">No per-seat fees</span> — teams install freely</li>
                  <li>Monetize <span className="text-yellow-400 font-semibold">task execution</span> — pennies, to dollars</li>
                  <li><span className="text-yellow-400 font-semibold">50 active seats</span> Inference costs: $750–$65k/month</li>
                  <li><span className="text-yellow-400 font-semibold">We keep as much at 70%</span> of these inference costs</li>
                </Section.List>

                <div className="bg-gray-900/50 rounded-lg p-3 mt-3">
                  <Section.Text>Revenue (Monthly)</Section.Text>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>50 seats:</span>
                      <span className="text-yellow-400 font-semibold">$750 - $65k</span>
                    </div>
                    <div className="flex justify-between">
                      <span>500 seats:</span>
                      <span className="text-yellow-400 font-semibold">$7.5K - $65M</span>
                    </div>
                  </div>
                </div>
              </Section.Card>

              <Section.Card>
                <div className="text-yellow-400 font-bold "><Section.Text>🧠 Year 2: Seat-Based Licensing</Section.Text></div>
                <Section.List variant="bullet">
                  <li><span className="text-yellow-400 font-semibold">Tilt self-reports</span> deployments across teams</li>
                  <li>Installs convert to <span className="text-yellow-400 font-semibold">per-seat licenses</span></li>
                  <li><span className="text-yellow-400 font-semibold">Seat price is negotiated</span> per organization per year</li>
                </Section.List>

                <div className="bg-gray-900/50 rounded-lg p-3 mt-3">
                  <Section.Text>License Revenue (Annual)</Section.Text>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>50 seats:</span>
                      <span className="text-yellow-400 font-semibold">$10K + usage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>500 seats:</span>
                      <span className="text-yellow-400 font-semibold">$100K + usage</span>
                    </div>
                  </div>
                </div>
              </Section.Card>
            </Section.Grid>

            <div className="text-center mt-4">
              <div className="font-semibold text-yellow-400"><Section.Text>
                📈 By Year 2, Tilt becomes <span className="text-yellow-400 font-semibold">deeply embedded</span> in our customers&apos; workflows and automation pipelines, <span className="text-yellow-400 font-semibold">creating high switching costs</span> and making it a mission-critical part of their operations.
              </Section.Text></div>
            </div>
          </Section>
        )}

        {currentSlide === 4 && (
          /* Go-to-Market */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="lg">🚀 Go-to-Market</Section.Heading>
            </div>

            <Section.Grid cols="2" responsive={true} gap="md">
              <Section.Card>
                <div className="text-yellow-400 font-bold "><Section.Text>👥 Inside Champions</Section.Text></div>
                <div className="mb-4"><Section.Text size="sm">
                  Tilt was built after interviewing internal QA engineers at large companies — the very people now piloting our early builds.
                </Section.Text></div>

                <div className="text-yellow-400 font-bold "><Section.Text>🚪 Entry: Team-Level Pilots</Section.Text></div>
                <Section.List variant="bullet">
                  <li>Tilt installs quickly via Docker</li>
                  <li>Compatible with Mac, Windows, and Linux</li>
                  <li>No security review blockers, enabling fast onboarding</li>
                </Section.List>
              </Section.Card>

              <Section.Card>
                <div className="text-yellow-400 font-bold "><Section.Text>📈 Expansion Through Usage</Section.Text></div>
                <Section.List variant="bullet">
                  <li>Teams integrate Tilt into daily automation workflows</li>
                  <li>Use cases include UI testing, validating Google Analytics events, and managing visual test queues</li>
                  <li>Adoption spreads organically from <span className="text-yellow-400 font-semibold">1 engineer to 10+</span> within teams</li>
                </Section.List>
              </Section.Card>
            </Section.Grid>

            <div className="mt-6">
              <p className="italic text-lg">
                &quot;Google Analytics tag and event testing for 7 brands takes a couple engineers all day to run by hand. Their automated test suites break every time another team changes the design even a little.&quot;
              </p>
              <p className="text-yellow-400 font-semibold mt-2">— Inside champions at multiple large companies</p>
            </div>
          </Section>
        )}

        {currentSlide === 5 && (
          /* The Moat */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="lg">🛡 The Moat</Section.Heading>
              <Section.Text size="lg">Tilt&apos;s defensibility comes from three compounding advantages:</Section.Text>
            </div>

            <Section.Grid cols="3" responsive={true} gap="md">
              <Section.Card>
                <div className="text-white font-bold "><Section.Text>Architecture Advantage</Section.Text></div>
                <Section.List variant="none">
                  <li>Tilt is built to <span className="text-yellow-400 font-semibold">act like a person, not code</span>.</li>
                  <li><span className="text-yellow-400 font-semibold">Cross-platform, self-healing vision agents</span> emulate users—not brittle scripts.</li>
                  <li>Competitors would need to rebuild <span className="text-yellow-400 font-semibold">orchestration, recovery, and cross-OS control</span> from scratch.</li>
                  <li><span className="text-yellow-400 font-semibold">Client is open source</span> — auditable and extendable, but inference is locked to our model.</li>
                </Section.List>
              </Section.Card>

              <Section.Card>
                <div className="text-white font-bold "><Section.Text>Intelligence Flywheel</Section.Text></div>
                <Section.List variant="none">
                  <li>Every task generates data: <span className="text-yellow-400 font-semibold">how humans describe work, what succeeds visually, and how agents recover from failure</span>.</li>
                  <li>Tilt continuously learns from real-world execution, building a <span className="text-yellow-400 font-semibold">unique, human-labeled task graph</span> that accelerates automation quality and speed.</li>
                </Section.List>
              </Section.Card>

              <Section.Card>
                <div className="text-white font-bold "><Section.Text>Embedded Distribution</Section.Text></div>
                <Section.List variant="none">
                  <li>Tilt installs <span className="text-yellow-400 font-semibold">frictionlessly inside teams</span>.</li>
                  <li>By the time licensing starts, it&apos;s already <span className="text-yellow-400 font-semibold">embedded in CI, QA, and ops workflows</span>.</li>
                  <li>Removing Tilt means <span className="text-yellow-400 font-semibold">disrupting daily operations</span>—making it sticky and hard to displace.</li>
                  <li><span className="text-yellow-400 font-semibold">Open source transparency builds trust</span>; model lock ensures we own the core revenue stream.</li>
                </Section.List>
              </Section.Card>
            </Section.Grid>

            <div className="text-center mt-4">
              <div className="font-semibold"><Section.Text>
                We combine <span className="text-yellow-400 font-bold">open adoption</span> with <span className="text-yellow-400 font-bold">enforced monetization</span> — a dual strategy that builds community while preserving defensibility.
              </Section.Text></div>
            </div>
          </Section>
        )}

        {currentSlide === 6 && (
          /* The Vision */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="lg">🌅 The Vision</Section.Heading>
              <Section.Text size="lg">Tilt is building the AI agent layer for desktop and enterprise.</Section.Text>
            </div>

            <Section.Grid cols="3" responsive={true} gap="md">
              <Section.Card className="border-t-4 border-yellow-400">
                <div className="text-center">
                  <Section.Text>
                    <span className="text-yellow-400 font-bold text-lg">1. SaaS Footprint</span><br />
                    <span className="text-sm">(Now)</span>
                  </Section.Text>
                  <Section.Text size="sm">Desktop-first, Docker-deployable agents</Section.Text>
                  <Section.List variant="none">
                    <li>→ Fast installs, low cost</li>
                    <li>→ No cloud hosting = <span className="text-yellow-400 font-semibold">profitable day one</span></li>
                  </Section.List>
                </div>
              </Section.Card>

              <Section.Card className="border-t-4 border-yellow-400">
                <div className="text-center">
                  <Section.Text>
                    <span className="text-yellow-400 font-bold text-lg">2. Transactional Platform</span><br />
                    <span className="text-sm">(Next)</span>
                  </Section.Text>
                  <Section.Text size="sm">We host the model. Every task = revenue.</Section.Text>
                  <Section.List variant="none">
                    <li>→ Usage-based pricing</li>
                    <li>→ First-party inference = <span className="text-yellow-400 font-semibold">high-margin revenue</span></li>
                  </Section.List>
                </div>
              </Section.Card>

              <Section.Card className="border-t-4 border-yellow-400">
                <div className="text-center">
                  <Section.Text>
                    <span className="text-yellow-400 font-bold text-lg">3. Agent Marketplace</span><br />
                    <span className="text-sm">(Future)</span>
                  </Section.Text>
                  <Section.Text size="sm">Agents gain superpowers via plugins</Section.Text>
                  <Section.List variant="none" >
                    <li>→ Think Zapier for vision agents</li>
                    <li>→ We take <span className="text-yellow-400 font-semibold">30% of ecosystem</span></li>
                  </Section.List>
                </div>
              </Section.Card>
            </Section.Grid>
          </Section>
        )}

        {currentSlide === 7 && (
          /* The Team */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-12">
              <Section.Heading size="lg">The Team</Section.Heading>
              <Section.Text size="lg">
                Two founders with complementary strengths
              </Section.Text>
              <Section.Text size="lg">
                Mike and Ryan have worked together on many projects and on several teams for the last 10 years and enjoy working together.
              </Section.Text>
            </div>

            <Section.Grid cols="2" responsive={true} gap="lg">
              <div className="text-center">
                <div className="w-24 h-24  mx-auto mb-6 flex items-center justify-center">
                  <img src="mike-headshot.jpeg" alt="Mike ONeal, CEO/CTO" className='rounded-full' />
                </div>
                <Section.Text size="lg">Mike ONeal</Section.Text>
                <Section.Text>CEO/CTO</Section.Text>
                <Section.Text size="sm">
                  Veteran systems architect with 25+ years building and testing software and deep learning experience
                </Section.Text>
              </div>


              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img src="ryan.webp" alt="Ryan Bent, COO/CFO" className='rounded-full' />
                </div>
                <Section.Text size="lg">Ryan Bent</Section.Text>
                <Section.Text>COO/CFO</Section.Text>
                <Section.Text size="sm">
                  Enterprise team leader with deep operational experience and a love of Product.
                </Section.Text>
              </div>
            </Section.Grid>

            <div className="text-center mt-12">

              <Section.Text size="md" >
                Real enterprise pain + Unmatched technical execution + Insanely great customer care
              </Section.Text>
            </div>
          </Section>
        )}

        {currentSlide === 8 && (
          /* The Ask */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="lg">💸 The Ask</Section.Heading>
              <Section.Text size="lg">
                We are raising $25-50K for the next stage for ?%
              </Section.Text>
              <Section.Text size="md" >
                We will let the market decide our value at this pre-money stage.
              </Section.Text>
            </div>

            <Section.Grid cols="2" responsive={true} gap="lg">
              <Section.Card>
                <div className="space-y-6">
                  <Section.Text>✅ <span className="font-bold">Already Completed</span></Section.Text>
                  <Section.List>
                    <li>Built the product (cross-platform vision-action agent)</li>
                    <li>Built the website and pitch deck</li>
                    <li>Have inside champions at 3 enterprise orgs</li>
                  </Section.List>

                  <Section.Text>🔜 <span className="font-bold">Next 90 Days</span></Section.Text>
                  <Section.List>
                    <li>Launch 3 pilots (enterprise, SMB, individual users)</li>
                    <li>Build hosted inference pipeline</li>
                    <li>Begin revenue collection via task execution</li>
                    <li>Iterate during 6-month beta across customer segments</li>
                  </Section.List>
                </div>
              </Section.Card>

              <Section.Card className="bg-gray-900/20 border-dashed border-2 border-gray-600">
                <div className="text-center space-y-4">
                  <Section.Text>🔒 <span className="font-bold">CONFIDENTIAL</span></Section.Text>
                  <Section.Text size="sm">
                    Cap table, valuations, and ownership details available upon request to qualified investors.
                  </Section.Text>
                  <div className="bg-gray-800/50 rounded-lg p-6 space-y-2">
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>██████████████</div>
                      <div>██████████</div>
                      <div>███████████████</div>
                      <div>██████████████████</div>
                    </div>
                  </div>
                </div>
              </Section.Card>
            </Section.Grid>
          </Section>
        )}

        {/* Navigation Controls */}
        {isAuthenticated && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-black/50 backdrop-blur-md rounded-full border border-white/20 px-6 py-3 flex items-center space-x-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
                disabled={currentSlide === 0}
                className="text-white hover:text-yellow-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => setCurrentSlide(slideIndex)}
                    className={`w-3 h-3 rounded-full transition-colors ${currentSlide === slideIndex ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentSlide(prev => Math.min(prev + 1, 8))}
                disabled={currentSlide === 8}
                className="text-white hover:text-yellow-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Counter */}
              <div className="text-white text-sm ml-4">
                {currentSlide + 1} / 9
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}