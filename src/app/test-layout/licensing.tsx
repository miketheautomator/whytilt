import { Section } from "./section";

export function LicensingContent() {
  return (
    <>
      <Section.Heading>Open Source Advantages</Section.Heading>
      <Section.Subheading>Complete transparency and control over your automation</Section.Subheading>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
          <p className="text-gray-300">Audit the code, deploy on-premises, keep sensitive data secure</p>
        </div>
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">No Vendor Lock-in</h3>
          <p className="text-gray-300">Modify, extend, and deploy anywhere without restrictions</p>
        </div>
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Future-Proof</h3>
          <p className="text-gray-300">Never worry about discontinued support or changing terms</p>
        </div>
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
          <p className="text-gray-300">Benefit from community contributions and improvements</p>
        </div>
      </div>
    </>
  );
}