import { Section } from "@/app/shared/section";
import { EnterprisePricingCard, PricingHeader } from "@/app/shared/pricing-shared";

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