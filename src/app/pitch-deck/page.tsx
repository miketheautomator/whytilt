'use client';
import { useState, useEffect, useRef } from 'react';
import { Header } from '@/app/shared/header';
import { Footer } from '@/app/shared/footer';
import { Section } from '@/app/shared/section';
import PixelBackground from '@/app/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/app/shared/react-bits/Backgrounds/Aurora/Aurora';

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
                <Section.Text className="text-red-400 text-sm ">{error}</Section.Text>
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
              <Section.Heading size="xl">❌ The Problem</Section.Heading>
              <Section.Text size="lg">QA test automation is fundamentally broken — it tests code, not what real users see.</Section.Text>
            </div>
            
            <Section.Card className="mb-6">
              <Section.Text className="text-yellow-400 font-bold mb-4">At a typical SaaS company:</Section.Text>
              <Section.List variant="bullet">
                <li>Engineers maintain hundreds of DOM-based test scripts in Selenium, Playwright, or Cypress</li>
                <li>A minor UI tweak — like a class name change — can break dozens of tests overnight</li>
                <li>QA teams spend <span className="text-yellow-400 font-bold">40%+ of their time</span> fixing brittle scripts instead of finding real bugs</li>
                <li>Bugs still slip through, causing delayed releases, outages, and lost revenue</li>
              </Section.List>
            </Section.Card>
            
            <Section.Card className="mb-6">
              <Section.Text className="text-yellow-400 font-bold mb-4">💸 This costs:</Section.Text>
              <Section.List variant="bullet">
                <li><span className="text-yellow-400 font-bold">$135K–$175K/year per QA engineer</span> — much of it wasted on maintenance</li>
                <li>Enterprises spend <span className="text-yellow-400 font-bold">$20B+/year globally</span> on test automation tools and labor that still can&apos;t emulate users</li>
                <li>And only <span className="text-yellow-400 font-bold">11% of companies</span> reach fully automated testing — most give up trying</li>
              </Section.List>
            </Section.Card>
            
            <div className="text-center">
              <Section.Text size="lg" className="font-bold">
                We&apos;re simulating humans through code — when we could <span className="text-yellow-400">Tilt</span> all of this on its head
                and automate like real customers: visually, intelligently.
              </Section.Text>
            </div>
          </Section>
        )}

        {currentSlide === 1 && (
          /* The Market */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="xl">📊 The Market</Section.Heading>
              <Section.Text size="lg">Companies spend billions trying to automate software workflows — and it&apos;s not working.</Section.Text>
            </div>
            
            <Section.Grid cols="2" responsive={true} gap="lg">
              <Section.Card>
                <Section.Text className="font-bold text-yellow-400 mb-4">Market Size</Section.Text>
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
                    <span className="text-yellow-400 text-2xl font-bold mr-4">100,000+</span>
                    <Section.Text size="sm">orgs with internal QA & ops teams struggling to scale automation</Section.Text>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Section.Text className="text-yellow-400 font-bold mb-3">🎯 Tilt&apos;s Wedge</Section.Text>
                  <Section.List variant="none">
                    <li><span className="text-yellow-400 font-semibold">Target:</span> SaaS companies with $250K+ in revenue</li>
                    <li><span className="text-yellow-400 font-semibold">Buyer:</span> Internal QA and ops teams</li>
                    <li><span className="text-yellow-400 font-semibold">Use Case:</span> High-friction UI workflows too brittle for DOM-based automation</li>
                  </Section.List>
                </div>
              </Section.Card>
              
              <Section.Card>
                <Section.Text className="font-bold text-yellow-400 mb-4">Market Layers</Section.Text>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-semibold">TAM</span>
                    <Section.Text size="sm">~$70B+ (QA + RPA combined)</Section.Text>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-yellow-400 font-semibold">SAM</span>
                    <Section.Text size="sm" className="text-right">~$5–10B (QA + internal ops in mid-market SaaS and enterprise)</Section.Text>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-yellow-400 font-semibold">SOM</span>
                    <Section.Text size="sm" className="text-right">~5,000 companies with CI/CD pipelines and automation pain</Section.Text>
                  </div>
                </div>
                
                <div>
                  <Section.Text className="text-yellow-400 font-bold mb-3">⚡ Why Now?</Section.Text>
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
              <Section.Heading size="xl">✅ The Solution</Section.Heading>
              <Section.Text size="lg">Tilt is an intelligent vision-action agent that automates software workflows like a real user—visually, autonomously, and with common sense.</Section.Text>
            </div>
            
            <Section.Card className="mb-6">
              <div className="text-center">
                <Section.Text className="text-yellow-400 font-bold mb-3">
                  No DOM selectors. No code. No brittle scripts.
                </Section.Text>
                <Section.Text>Just plain language:</Section.Text>
                <div className="bg-gray-900/50 rounded-lg p-4 mt-3 italic text-yellow-400">
                  &quot;Test the checkout flow and confirm the price is $19.99&quot;<br/>
                  &quot;Log in and download today&apos;s report from each account&quot;
                </div>
              </div>
            </Section.Card>
            
            <Section.Grid cols="2" responsive={true} gap="lg">
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold mb-4">How it works:</Section.Text>
                <Section.List variant="bullet">
                  <li><span className="text-yellow-400 font-semibold">Sees the screen like a human</span>—using a vision model</li>
                  <li><span className="text-yellow-400 font-semibold">Understands plain English</span>—via a language model</li>
                  <li><span className="text-yellow-400 font-semibold">Acts using keyboard and mouse</span> across apps, browsers, and OS environments</li>
                  <li><span className="text-yellow-400 font-semibold">Flexible:</span> run one task or an entire queue, on demand or on a schedule</li>
                </Section.List>
              </Section.Card>
              
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold mb-4">Built for:</Section.Text>
                <Section.List variant="none">
                  <li><span className="text-yellow-400 font-semibold">QA teams:</span> End-to-end, visual tests that survive UI changes</li>
                  <li><span className="text-yellow-400 font-semibold">Ops teams:</span> Cross-app automation without brittle RPA</li>
                  <li><span className="text-yellow-400 font-semibold">Developers:</span> Release validation without writing a line of test code</li>
                  <li><span className="text-yellow-400 font-semibold">Anyone:</span> Automate UI work without APIs, scripts, or integrations</li>
                </Section.List>
              </Section.Card>
            </Section.Grid>
            
            <div className="text-center mt-6">
              <Section.Text size="lg" className="font-bold">
                <span className="text-yellow-400">Tilt</span> doesn&apos;t automate code. It automates people work.
              </Section.Text>
            </div>
          </Section>
        )}

        {currentSlide === 3 && (
          /* Business Model */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="xl">🔥 Business Model</Section.Heading>
              <Section.Text size="lg">Usage-first, license-second. High-margin, high-retention.</Section.Text>
            </div>
            
            <Section.Grid cols="2" responsive={true} gap="md">
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold ">🪝 Year 1: Trojan Horse Entry</Section.Text>
                <Section.List variant="bullet">
                  <li><span className="text-yellow-400 font-semibold">No per-seat fees</span> — teams install freely</li>
                  <li>Monetize <span className="text-yellow-400 font-semibold">task execution</span> — $0.05–$1.00 per run</li>
                  <li><span className="text-yellow-400 font-semibold">50 active installs</span> = $750–$150K/month</li>
                </Section.List>
                
                <div className="bg-gray-900/50 rounded-lg p-3 mt-3">
                  <Section.Text className="">Revenue (Monthly)</Section.Text>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>50 copies:</span>
                      <span className="text-yellow-400 font-semibold">$750 - $150K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>500 copies:</span>
                      <span className="text-yellow-400 font-semibold">$7.5K - $1.5M</span>
                    </div>
                  </div>
                </div>
              </Section.Card>
              
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold ">🧠 Year 2: Seat-Based Licensing</Section.Text>
                <Section.List variant="bullet">
                  <li><span className="text-yellow-400 font-semibold">Tilt self-reports</span> deployments across teams</li>
                  <li>Installs convert to <span className="text-yellow-400 font-semibold">per-seat licenses</span> ($1,000+/year)</li>
                  <li><span className="text-yellow-400 font-semibold">50 seats</span> = $50K+ annual revenue + usage</li>
                </Section.List>
                
                <div className="bg-gray-900/50 rounded-lg p-3 mt-3">
                  <Section.Text className="">License Revenue (Annual)</Section.Text>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>50 seats:</span>
                      <span className="text-yellow-400 font-semibold">$50K + usage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>500 seats:</span>
                      <span className="text-yellow-400 font-semibold">$500K + usage</span>
                    </div>
                  </div>
                </div>
              </Section.Card>
            </Section.Grid>
            
            <div className="text-center mt-4">
              <Section.Text className="font-semibold text-yellow-400">
                📈 High Usage = High Stickiness — By Year 2, Tilt is embedded in CI pipelines and daily workflows.
              </Section.Text>
            </div>
          </Section>
        )}

        {currentSlide === 4 && (
          /* Go-to-Market */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="xl">🚀 Go-to-Market</Section.Heading>
              <Section.Text size="lg">Land, Expand, Lock In</Section.Text>
            </div>
            
            <Section.Grid cols="2" responsive={true} gap="md">
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold ">👥 Inside Champions</Section.Text>
                <Section.Text size="sm" className="mb-4">
                  We built Tilt after interviewing internal QA engineers at large companies — the exact people now piloting our early builds.
                </Section.Text>
                
                <Section.Text className="text-yellow-400 font-bold ">🚪 Entry: Team-Level Pilots</Section.Text>
                <Section.List variant="bullet">
                  <li>Tilt is installed via <span className="text-yellow-400 font-semibold">Docker</span> — works on Mac, Windows, Linux</li>
                  <li><span className="text-yellow-400 font-semibold">No setup time</span>, no security review blockers</li>
                  <li>Just deploy and run</li>
                </Section.List>
              </Section.Card>
              
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold ">📈 Expansion Through Usage</Section.Text>
                <Section.List variant="bullet">
                  <li>Teams integrate Tilt into daily automation workflows</li>
                  <li>Testing UIs, validating events (Google Analytics), visual test queues</li>
                  <li><span className="text-yellow-400 font-semibold">Spreads from 1 engineer to 10+</span> organically</li>
                </Section.List>
                
                <Section.Text className="text-yellow-400 font-bold ">🔄 Lock-In via Embedded Workflow</Section.Text>
                <Section.List variant="bullet">
                  <li>By Year 2, <span className="text-yellow-400 font-semibold">Tilt is entrenched</span></li>
                  <li>Teams depend on it, removing it <span className="text-yellow-400 font-semibold">breaks processes</span></li>
                  <li>Licensing becomes a practical necessity, not a sales push</li>
                </Section.List>
              </Section.Card>
            </Section.Grid>
            
            <div className="mt-6">
              <Section.Card>
                <Section.Text className="text-yellow-400 font-bold ">The Pain Point We Solve</Section.Text>
                <Section.Text size="sm" className="italic">
                  &quot;Google Analytics tag and event testing for 8 brands takes 10 engineers all day to run by hand. 
                  Our automated test suite breaks every time another team changes the design even a little.&quot;
                </Section.Text>
                <Section.Text size="sm" className="text-yellow-400 font-semibold mt-2">— Our inside champions at 3 large companies</Section.Text>
              </Section.Card>
            </div>
          </Section>
        )}

        {currentSlide === 5 && (
          /* The Moat */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="xl">🛡 The Moat</Section.Heading>
              <Section.Text size="lg">Tilt&apos;s defensibility comes from three compounding advantages:</Section.Text>
            </div>
            
            <Section.Grid cols="3" responsive={true} gap="md">
              <Section.Card>
                <Section.Text className="text-white font-bold ">Architecture Advantage</Section.Text>
                <Section.List variant="none">
                  <li>Tilt is built to <span className="text-yellow-400 font-semibold">act like a person, not code</span>.</li>
                  <li><span className="text-yellow-400 font-semibold">Cross-platform, self-healing vision agents</span> emulate users—not brittle scripts.</li>
                  <li>Competitors would need to rebuild <span className="text-yellow-400 font-semibold">orchestration, recovery, and cross-OS control</span> from scratch.</li>
                  <li><span className="text-yellow-400 font-semibold">Client is open source</span> — auditable and extendable, but inference is locked to our model.</li>
                </Section.List>
              </Section.Card>
              
              <Section.Card>
                <Section.Text className="text-white font-bold ">Intelligence Flywheel</Section.Text>
                <Section.List variant="none">
                  <li>Every task generates data: <span className="text-yellow-400 font-semibold">how humans describe work, what succeeds visually, and how agents recover from failure</span>.</li>
                  <li>Tilt continuously learns from real-world execution, building a <span className="text-yellow-400 font-semibold">unique, human-labeled task graph</span> that accelerates automation quality and speed.</li>
                </Section.List>
              </Section.Card>
              
              <Section.Card>
                <Section.Text className="text-white font-bold ">Embedded Distribution</Section.Text>
                <Section.List variant="none">
                  <li>Tilt installs <span className="text-yellow-400 font-semibold">frictionlessly inside teams</span>.</li>
                  <li>By the time licensing starts, it&apos;s already <span className="text-yellow-400 font-semibold">embedded in CI, QA, and ops workflows</span>.</li>
                  <li>Removing Tilt means <span className="text-yellow-400 font-semibold">disrupting daily operations</span>—making it sticky and hard to displace.</li>
                  <li><span className="text-yellow-400 font-semibold">Open source transparency builds trust</span>; model lock ensures we own the core revenue stream.</li>
                </Section.List>
              </Section.Card>
            </Section.Grid>
            
            <div className="text-center mt-4">
              <Section.Text className="font-semibold">
                We combine <span className="text-yellow-400 font-bold">open adoption</span> with <span className="text-yellow-400 font-bold">enforced monetization</span> — a dual strategy that builds community while preserving defensibility.
              </Section.Text>
            </div>
          </Section>
        )}

        {currentSlide === 6 && (
          /* The Vision */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-6">
              <Section.Heading size="xl">🌅 The Vision</Section.Heading>
              <Section.Text size="lg">Tilt is building the AI agent layer for the desktop and the enterprise.</Section.Text>
              <Section.Text className="mt-4">
                Automation today is fragile, fragmented, and only works for developers.<br/>
                Tilt makes it <span className="text-yellow-400 font-semibold">visual, reliable, and accessible to anyone</span> — like a human assistant that never sleeps.
              </Section.Text>
            </div>
            
            <div className="mb-6">
              <div className="text-center mb-6">
                <Section.Text className="text-white font-bold ">🪜 Our 3-Phase Path to Dominance</Section.Text>
              </div>
              
              <div className="space-y-4">
                <Section.Card className="border-l-4 border-yellow-400">
                  <Section.Text className="text-yellow-400 font-bold ">1. SaaS Footprint (Now)</Section.Text>
                  <Section.Text size="sm">Desktop-first, Docker-deployable agents</Section.Text>
                  <Section.List variant="none" className="mt-2">
                    <li>→ Fast installs, low cost, easy adoption</li>
                    <li>→ No cloud hosting required = <span className="text-yellow-400 font-semibold">profitable from day one</span></li>
                  </Section.List>
                </Section.Card>
                
                <Section.Card className="border-l-4 border-yellow-400">
                  <Section.Text className="text-yellow-400 font-bold ">2. Transactional Platform (Next)</Section.Text>
                  <Section.Text size="sm">We host the model. Every task run = revenue.</Section.Text>
                  <Section.List variant="none" className="mt-2">
                    <li>→ Usage-based pricing aligns with customer value</li>
                    <li>→ First-party inference = <span className="text-yellow-400 font-semibold">high-margin, recurring revenue</span></li>
                  </Section.List>
                </Section.Card>
                
                <Section.Card className="border-l-4 border-yellow-400">
                  <Section.Text className="text-yellow-400 font-bold ">3. Agent Tool Marketplace (Future)</Section.Text>
                  <Section.Text size="sm">Agents gain superpowers via plugins and tools</Section.Text>
                  <Section.List variant="none" className="mt-2">
                    <li>→ Think Zapier for vision agents: extract data, access systems, customize workflows</li>
                    <li>→ We monetize the ecosystem — <span className="text-yellow-400 font-semibold">30% of every tool sold</span></li>
                  </Section.List>
                </Section.Card>
              </div>
            </div>
            
            <div className="text-center">
              <Section.Text className="font-bold">
                We don&apos;t just automate software. We automate <span className="text-yellow-400 font-semibold">how people use software</span> — visually, intelligently, across everything.
              </Section.Text>
            </div>
          </Section>
        )}

        {currentSlide === 7 && (
          /* The Team */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-4">
              <Section.Heading size="xl">🧠 The Team</Section.Heading>
              <Section.Text>
                Tilt is led by two founders with complementary strengths:<br/>
                one from the enterprise trenches, one from the bleeding edge of technology.
              </Section.Text>
            </div>
            
            <Section.Grid cols="2" responsive={true} gap="md" className="mb-4">
              <Section.Card>
                <div className="text-center mb-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">R</span>
                  </div>
                  <Section.Text className="">👤 Ryan [Last Name]</Section.Text>
                  <Section.Text size="sm">Enterprise team leader, deep operational experience, degree in Brain Science</Section.Text>
                  <Section.Text className="text-yellow-400 font-semibold ">Enterprise strategy, customer development, GTM</Section.Text>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <Section.Text className="text-white font-bold ">Greatest Achievement:</Section.Text>
                    <Section.Text className="italic bg-gray-900/40 rounded-lg p-2">
                      [Ryan fills this in — ideally something that demonstrates leadership, large-scale responsibility, or cross-functional execution]
                    </Section.Text>
                  </div>
                  
                  <div>
                    <Section.Text className="text-white font-bold ">Why Ryan is the perfect partner for Mike:</Section.Text>
                    <Section.Text className="italic bg-gray-900/40 rounded-lg p-2">
                      [Ryan&apos;s POV: why the partnership works and what Mike uniquely brings to the table]
                    </Section.Text>
                  </div>
                </div>
              </Section.Card>
              
              <Section.Card>
                <div className="text-center mb-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">M</span>
                  </div>
                  <Section.Text className="">👤 Mike [Last Name]</Section.Text>
                  <Section.Text size="sm">Veteran systems architect, autodidact, 25+ years solving hard tech problems</Section.Text>
                  <Section.Text className="text-yellow-400 font-semibold ">Product vision, architecture, model orchestration</Section.Text>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <Section.Text className="text-white font-bold ">Greatest Achievement:</Section.Text>
                    <Section.Text className="italic bg-gray-900/40 rounded-lg p-2">
                      [Mike fills this in — ideally something showing creativity, scale, or key technical breakthroughs]
                    </Section.Text>
                  </div>
                  
                  <div>
                    <Section.Text className="text-white font-bold ">Why Mike is the perfect partner for Ryan:</Section.Text>
                    <Section.Text className="italic bg-gray-900/40 rounded-lg p-2">
                      [Mike&apos;s POV: why the partnership works and what Ryan enables]
                    </Section.Text>
                  </div>
                </div>
              </Section.Card>
            </Section.Grid>
            
            <div className="text-center">
              <Section.Card>
                <Section.Text className="text-white font-bold ">🤝 Why This Team Will Win</Section.Text>
                <Section.Text size="sm">Together, we combine...</Section.Text>
                
                <Section.Grid cols="4" responsive={true} gap="sm" className="mt-3 mb-3">
                  <Section.Text className="text-yellow-400 font-bold text-center">Real pain, from inside the enterprise</Section.Text>
                  <Section.Text className="text-yellow-400 font-bold text-center">Unmatched technical firepower</Section.Text>
                  <Section.Text className="text-yellow-400 font-bold text-center">Trust from pilot customers</Section.Text>
                  <Section.Text className="text-yellow-400 font-bold text-center">A shared obsession with making intelligent automation usable by anyone</Section.Text>
                </Section.Grid>
                
                <div className="bg-gray-900/40 rounded-lg p-3">
                  <Section.Text size="sm" className="italic">
                    [Your shared answer to: Why these two people are the ones to build and dominate this market?]
                  </Section.Text>
                </div>
              </Section.Card>
            </div>
          </Section>
        )}

        {currentSlide === 8 && (
          /* The Ask */
          <Section isIPhone={isIPhone} isHero={true}>
            <div className="text-center mb-8">
              <Section.Heading size="xl">💸 The Ask</Section.Heading>
              <Section.Text size="lg" className="text-yellow-400 font-bold">
                We&apos;re raising $25K for 3%<br/>
                to fund our next critical milestone:
              </Section.Text>
            </div>
            
            <Section.Grid cols="2" responsive={true} gap="lg">
              <Section.Card>
                <div className="space-y-6">
                  <Section.Text className="text-green-400 font-bold ">✅ Already Completed</Section.Text>
                  <Section.List>
                    <li>Built the product (cross-platform vision-action agent)</li>
                    <li>Built the website and pitch deck</li>
                    <li>Have inside champions at 3 enterprise orgs</li>
                  </Section.List>
                  
                  <Section.Text className="text-yellow-400 font-bold ">🔜 Next 90 Days</Section.Text>
                  <Section.List>
                    <li>Launch 3 pilots (enterprise, SMB, individual users)</li>
                    <li>Build hosted inference pipeline</li>
                    <li>Begin revenue collection via task execution</li>
                    <li>Iterate during 6-month beta across customer segments</li>
                  </Section.List>
                </div>
              </Section.Card>
              
              <Section.Card>
                <div className="space-y-6">
                  <Section.Text className="text-blue-400 font-bold ">🚧 Cap Table Now</Section.Text>
                  <div className="bg-gray-900/40 rounded-lg p-4 space-y-2">
                    <Section.Text size="sm"><span className="text-yellow-400 font-semibold">Valuation:</span> $75K</Section.Text>
                    <Section.Text size="sm"><span className="text-yellow-400 font-semibold">Founders:</span> 50 / 50 split</Section.Text>
                  </div>
                  
                  <Section.Text className="text-green-400 font-bold ">📈 Post-Raise</Section.Text>
                  <div className="bg-gray-900/40 rounded-lg p-4 space-y-2">
                    <Section.Text size="sm"><span className="text-yellow-400 font-semibold">Valuation:</span> $100K</Section.Text>
                    <Section.Text size="sm"><span className="text-yellow-400 font-semibold">Ownership:</span> 48.5% / 48.5% / 3% (investor)</Section.Text>
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
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === slideIndex ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
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