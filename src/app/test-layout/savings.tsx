import { Section } from "./section";

export function SavingsContent() {
  return (
    <>
      <Section.Heading>Save Time & Money</Section.Heading>
      <Section.Subheading>Reduce costs while improving speed and reliability</Section.Subheading>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Before Tilt</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-red-400">✗</span>
              Hours of manual repetitive work
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-400">✗</span>
              Expensive developer time for test maintenance
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-400">✗</span>
              Human errors and inconsistency
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-400">✗</span>
              Brittle automation that breaks frequently
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white mb-4">With Tilt</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Tasks completed in minutes, not hours
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              80-95% reduction in testing costs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Perfect consistency and accuracy
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Intelligent automation that adapts to changes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}