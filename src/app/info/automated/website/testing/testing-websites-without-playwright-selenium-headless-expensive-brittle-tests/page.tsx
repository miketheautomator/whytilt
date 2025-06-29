import { Hero } from '@/app/shared/info/hero';
import { ProblemGrid } from '@/app/shared/info/problem-grid';
import { Section } from '@/app/shared/info/section';
import { Content } from '@/app/shared/info/content';

export default function WebsiteTestingWithoutBrittleToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" baseColor="indigo">
        <Hero 
          title="Testing Websites Without Playwright, Selenium & Expensive Brittle DOM Tests"
          subtitle="Stop wasting time fighting with DOM selectors that break every deployment. Tilt tests your website the way real customers use it - with vision AI that actually sees your site."
        />
      </Section>

      {/* Problem Section */}
      <Section background="secondary" baseColor="indigo">
        <ProblemGrid 
          title="The Problem with Current Testing Tools"
          items={[
            {
              title: "Headless Testing is Fake Testing",
              description: "Your customers don't use headless browsers. They use real Chrome, Safari, and Firefox with real rendering, real JavaScript, and real user interactions. Testing a simulation isn't testing your real website."
            },
            {
              title: "DOM Selectors Break Everything", 
              description: "Every time you change a class name, move a button, or update your design, your tests break. DOM-based testing comes from an obsolete time before we had vision models that can actually see."
            },
            {
              title: "Esoteric Code Requirements",
              description: "Playwright and Selenium require expensive, ever-changing, complicated code suites. Your tests become another codebase to maintain, debug, and constantly update."
            },
            {
              title: "No Intelligence or Adaptation",
              description: "Traditional tools can't handle popups, changed text, moved buttons, network errors, or site redesigns. One small change breaks everything."
            }
          ]}
        />
      </Section>

      {/* Solution Section */}
      <Section background="tertiary" baseColor="indigo">
        <Content title="Tilt: Vision-Based Website Testing That Actually Works" className="text-center">
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed">
            Tilt can actually SEE your website and navigate it using a real browser on a real desktop using a mouse and keyboard - just like a real customer would.
          </p>
          
          <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-zinc-500 rounded-full items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Vision AI That Actually Sees</h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
                Our powerful vision model sees your website like a human does - identifying buttons, forms, and content visually, not through fragile DOM selectors.
              </p>
            </div>
            
            <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-zinc-400 rounded-full items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Plain English Instructions</h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
                Write tests in plain English. No code, no selectors, no technical syntax. Just describe what you want tested like you&apos;re talking to a person.
              </p>
            </div>
            
            <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-zinc-300 rounded-full items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Intelligent & Adaptive</h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
                Tilt overcomes popups, changed text, moved buttons, network errors, and even whole site redesigns. It&apos;s an intelligent agent, not a brittle script.
              </p>
            </div>
          </div>
        </Content>
      </Section>

      {/* Example Section */}
      <Section background="secondary" baseColor="indigo">
        <Content title="Real Browser Testing in Plain English">
          <div className="bg-zinc-700/50 backdrop-blur-sm border border-zinc-600/50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Instead of This Brittle Code:</h3>
            <div className="bg-zinc-900 rounded-lg p-6 font-mono text-sm text-zinc-400 mb-6">
              <code>
{`await page.locator('[data-testid="login-button"]').click();
await page.fill('#username-input-field-id', 'user@test.com');
await page.waitForSelector('.success-message-container');
// Breaks when any CSS class or ID changes`}
              </code>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Just Write This:</h3>
            <div className="bg-zinc-600 rounded-lg p-6 text-lg text-zinc-100 italic">
              &quot;Go to the login page, enter &apos;user@test.com&apos; as the username and &apos;password123&apos; as the password, click login, and verify the welcome message appears.&quot;
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-zinc-300 mb-8">
              Tilt handles the rest - finding elements visually, dealing with loading states, and adapting to changes automatically.
            </p>
          </div>
        </Content>
      </Section>

      {/* Features Section */}
      <Section background="tertiary" baseColor="indigo">
        <Content title="How Tilt Tests Your Website">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">Real Desktop, Real Browser</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Tilt runs on actual Chrome, Safari, or Firefox browsers on real desktops (Mac, Windows, Linux). No headless simulations - just real browsers like your customers use.
                </p>
              </div>
              <div className="md:w-1/2 bg-zinc-600/50 rounded-lg p-6">
                <div className="bg-zinc-500/20 border border-zinc-500/30 rounded p-4 text-zinc-200 font-mono text-sm">
                  Real Chrome Browser → Real Rendering → Real User Experience
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">Vision-Based Navigation</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Our AI actually sees your website and identifies buttons, forms, and content visually. No more broken tests when you change a CSS class or move an element.
                </p>
              </div>
              <div className="md:w-1/2 bg-zinc-600/50 rounded-lg p-6">
                <div className="bg-zinc-400/20 border border-zinc-400/30 rounded p-4 text-zinc-200 font-mono text-sm">
                  Vision Model → Sees Button → Clicks Like Human
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Task Runner</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Set up test queues that run autonomously. Tilt can re-run your tests on schedule, after deployments, or trigger them from your CI/CD pipeline.
                </p>
              </div>
              <div className="md:w-1/2 bg-zinc-600/50 rounded-lg p-6">
                <div className="bg-zinc-300/20 border border-zinc-300/30 rounded p-4 text-zinc-200 font-mono text-sm">
                  Queue Tests → Run Automatically → Get Reports
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Section>



      {/* CTA Section */}
      <Section background="primary" baseColor="indigo">
        <Content>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
              Ready to Stop Fighting Brittle Tests?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Free for small businesses under $250K annual revenue. Full source code included.
            </p>
            <p className="text-lg text-zinc-400 mb-12">
              Enterprise pricing negotiated per organization. A founder will personally help you get started.
            </p>
            <button className="inline-flex px-8 py-4 bg-white text-black text-lg font-semibold rounded-md hover:bg-zinc-200 transition-colors duration-200">
              Book a Demo
            </button>
          </div>
        </Content>
      </Section>

    </>
  );
}