import { ScreenSection } from '@/app/shared/screen-section';
import { LicensingCards } from '@/app/shared/info/licensing-cards';
import { Comparison } from '@/app/shared/info/comparison';
import { Section } from '@/app/shared/info/section';
import { Content } from '@/app/shared/info/content';

export default function PricingPage() {
  return (
    <>
      {/* Hero Section - Matching homepage structure */}
      <ScreenSection className="hero-bg-purple">
        {/* Background Image with Blur and Low Opacity */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="background-glow-purple"></div>
        </div>
        
        {/* Hero Content - EXACT homepage structure */}
        <div className="relative z-30 h-full flex flex-col max-w-7xl mx-auto pt-20 sm:pt-24 pb-20 sm:pb-32">
          <div className="px-4 sm:px-6 lg:px-12 w-full max-w-7xl flex-1 flex flex-col justify-center">
            {/* Status Badge - EXACT homepage styling */}
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-12 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-white text-xs sm:text-sm font-medium">Simple Pricing • No Hidden Fees</span>
            </div>
            
            {/* Main Headline - EXACT homepage typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 sm:mb-8 leading-[1.1] tracking-tight text-white max-w-6xl">
              Pricing
            </h1>
            
            {/* Subtitle - EXACT homepage styling */}
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 mb-8 sm:mb-12 max-w-5xl">
              Simple, transparent pricing for everyone, big and small.
            </p>
            
          </div>

          {/* Bottom Content - Pricing info positioned like homepage buttons */}
          <div className="px-4 sm:px-6 lg:px-12 w-full">
            <div className="relative">
              {/* Pricing Cards - styled like homepage buttons but with content */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Small Business</h3>
                  <p className="text-sm text-gray-300 mb-4">Under $250K revenue</p>
                  <p className="text-white">Pay only AI model costs. Zero licensing fees.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-sm text-gray-300 mb-4">Over $250K revenue</p>
                  <p className="text-white">Free for one year. Then per-seat licensing.</p>
                </div>
              </div>
              
              {/* Additional info - compact and clean */}
              <div className="text-center mt-8 pt-6 border-t border-white/20 max-w-4xl">
                <p className="text-gray-300 mb-3">
                  AI model costs: pennies for simple tasks, dollars for complex workflows.
                </p>
                <p className="text-sm text-gray-400">
                  While in beta Anthropic provides the model inference and billing, but our model will be launching soon and will be 20% the cost of Anthropic&apos;s Sonnet 4.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade - matching homepage */}
        <div className="absolute bottom-0 left-0 z-10 h-80 w-full bg-gradient-to-b from-transparent to-[#090A0C] pointer-events-none"></div>
      </ScreenSection>

      {/* Licensing Details */}
      <Section background="secondary" baseColor="purple">
        <LicensingCards title="Licensing that makes sense." />
      </Section>

      {/* Open Source Benefits */}
      <Section background="tertiary" baseColor="purple">
        <Content title="Open Source Advantages">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security & Auditing</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Open source allows enterprise companies to audit the code. Install on-premises so sensitive data never leaves your infrastructure. No need to trust us with your data.
                </p>
              </div>
              
              <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Source Code Access</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Complete transparency - see exactly how Tilt works, modify it for your needs, and never worry about vendor lock-in or discontinued support.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">No Licensing Restrictions</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Deploy anywhere - on-premises, cloud, or hybrid. Scale without per-seat fees (first year). Your infrastructure, your control.
                </p>
              </div>
              
              <div className="bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Future-Proof Investment</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Our upcoming proprietary model will be faster and cheaper than current options. Early adopters benefit from improved economics.
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Section>

      {/* Compare vs Traditional */}
      <Section background="secondary" baseColor="purple">
        <Content>
          <Comparison 
            title="Compare the True Cost"
            items={[
              {
                title: "Traditional Testing Tools",
                variant: "negative",
                points: [
                  "Hundreds of thousands in team costs to build and maintain tests",
                  "Expensive developer time for maintenance", 
                  "Brittle tests that break frequently",
                  "Vendor lock-in and proprietary formats"
                ]
              },
              {
                title: "Tilt",
                variant: "positive",
                points: [
                  "Pay only for model usage (pennies to dollars)",
                  "No seat licenses first year",
                  "Plain English - no code maintenance",
                  "Intelligent tests that adapt to changes",
                  "Open source - complete freedom"
                ]
              }
            ]}
          />
          
          <div className="text-center mt-12">
            <div className="bg-zinc-700/50 backdrop-blur-sm border border-zinc-600/50 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-zinc-300 text-lg">
                <strong>Typical savings:</strong> 80-95% reduction in testing costs while improving reliability and speed of test creation.
              </p>
            </div>
          </div>
        </Content>
      </Section>

      {/* CTA Section */}
      <Section background="primary" baseColor="purple">
        <Content maxWidth="wide" className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-16 leading-tight text-white">
            Want to amplify your best people? Book a demo.
          </h2>
          
          <div className="flex flex-col items-center gap-12">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
              Book a Demo
            </button>
            <div className="text-zinc-300 text-lg max-w-5xl mx-auto px-16 leading-relaxed">
              <p>A founder will personally help you get started.</p>
            </div>
          </div>
        </Content>
      </Section>
    </>
  );
}