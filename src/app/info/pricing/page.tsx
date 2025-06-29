import { Hero } from '@/app/shared/info/hero';
import { PricingGrid } from '@/app/shared/info/pricing-grid'; 
import { LicensingCards } from '@/app/shared/info/licensing-cards';
import { Comparison } from '@/app/shared/info/comparison';
import { Section } from '@/app/shared/info/section';
import { Content } from '@/app/shared/info/content';

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary">
        <Hero 
          title="Pricing"
          subtitle="Simple, transparent pricing for everyone, big and small."
        >
          <PricingGrid 
            title=""
            items={[
              {
                title: "Small Business",
                subtitle: "Under $250K revenue",
                description: "Pay only AI model costs.\nZero licensing fees."
              },
              {
                title: "Enterprise", 
                subtitle: "Over $250K revenue",
                description: "Free for one year.\nThen per-seat licensing."
              }
            ]}
          />
          
          <div className="text-center mt-16 pt-8 border-t border-zinc-700">
            <p className="text-zinc-400 mb-4">
              AI model costs: pennies for simple tasks, dollars for complex workflows.
            </p>
            <p className="text-sm text-zinc-500">
              While in beta Anthropic provides the model inference and billing, but our model will be launching soon and will be 20% the cost of Anthropic&apos;s Sonnet 4.
            </p>
          </div>
        </Hero>
      </Section>

      {/* Licensing Details */}
      <Section background="secondary">
        <LicensingCards title="Licensing that makes sense." />
      </Section>

      {/* Open Source Benefits */}
      <Section background="tertiary">
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
      <Section background="secondary">
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
      <Section background="primary">
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