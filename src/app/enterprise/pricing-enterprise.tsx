import { Section } from "@/shared/section";
import { EnterprisePricingCard, PricingHeader } from "@/shared/pricing-shared";

export function PricingEnterprise() {
  return (
    <>
      <Section.Heading>Enterprise Pricing</Section.Heading>
      <PricingHeader />
      <Section.Grid cols="1">
        <EnterprisePricingCard />
      </Section.Grid>
    </>
  );
}