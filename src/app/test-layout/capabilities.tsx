import { Section } from "./section";

export function CapabilitiesContent() {
  return (
    <>
      <Section.Heading>What Can Tilt Do?</Section.Heading>
      <Section.Subheading>Automate any computer task that requires vision and decision-making</Section.Subheading>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Website Testing</h3>
          <p className="text-gray-300">Test web applications without brittle selectors using vision AI</p>
        </div>
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Data Entry</h3>
          <p className="text-gray-300">Fill forms, extract data, and validate information across systems</p>
        </div>
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Desktop Automation</h3>
          <p className="text-gray-300">Control any desktop application with intelligent mouse and keyboard actions</p>
        </div>
      </div>
    </>
  );
}