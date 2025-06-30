import { Section } from "./section";

export function PricingContent() {
  return (
    <>
      <Section.Heading>Simple Pricing</Section.Heading>
      <div className="hidden sm:block">
        <Section.Subheading>Pay only for what you use, when you use it</Section.Subheading>
      </div>
      <Section.Grid cols="2">
        <Section.Card padding="sm">
          <Section.Badge>ENTERPRISE > 250K/YR REVENUE</Section.Badge>
          <Section.List>
            <li>No licensing costs the first year</li>
            <li>White glove onboarding</li>
            <li>Priority support</li>
            <li>Open source</li>
          </Section.List>
        </Section.Card>
        <Section.Card padding="sm">
          <Section.Badge>EVERYONE ELSE</Section.Badge>
          <Section.List>
            <li>Zero licensing fees forever</li>
            <li>Pay only AI model costs</li>
            <li>Full feature access</li>
            <li>Open source</li>
          </Section.List>
        </Section.Card>
      </Section.Grid>
    </>
  );
}