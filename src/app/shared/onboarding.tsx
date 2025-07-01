import { Section } from "./section";

export function OnboardingContent() {
  return (
    <div>
      <Section.Heading>White Glove Onboarding</Section.Heading>
      <Section.Subheading>A founder will personally help you get started</Section.Subheading>
      <div className="mt-12 max-w-2xl">
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-6">What's Included:</h3>
          <ul className="space-y-3 text-gray-300 mb-8 text-left">
            <li>• Personal setup session with team installation</li>
            <li>• Identify 2-3 critical scenarios from your workflow</li>
            <li>• Live test creation with hands-on training</li>
            <li>• Recorded sessions for reference</li>
            <li>• Email support until you're autonomous</li>
          </ul>
        </div>
      </div>
    </div>
  );
}