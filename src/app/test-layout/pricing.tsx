import { Section } from "./section";

export function PricingContent() {
  return (
    <>
      <Section.Heading>Simple Pricing</Section.Heading>
      <Section.Subheading>Pay only for what you use, when you use it</Section.Subheading>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8">
          <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
            ALWAYS FREE
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
          <p className="text-gray-300 mb-6">Under $250K annual revenue</p>
          <ul className="space-y-3 text-gray-300">
            <li>• Zero licensing fees forever</li>
            <li>• Pay only AI model costs (pennies to dollars)</li>
            <li>• Full feature access</li>
            <li>• Open source code</li>
          </ul>
        </div>
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8">
          <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
            1 YEAR FREE
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
          <p className="text-gray-300 mb-6">Over $250K annual revenue</p>
          <ul className="space-y-3 text-gray-300">
            <li>• Free for first 12 months</li>
            <li>• Then negotiated per-seat licensing</li>
            <li>• Plus AI model costs</li>
            <li>• Priority support</li>
          </ul>
        </div>
      </div>
    </>
  );
}