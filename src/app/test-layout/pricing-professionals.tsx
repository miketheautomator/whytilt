import { Section } from "./section";
import { NonEnterprisePricingCard, PricingHeader } from "./pricing-shared";

export function PricingProfessionals() {
  return (
    <>
      <Section.Heading>Professional Pricing</Section.Heading>
      <PricingHeader />
      <Section.Grid cols="1">
        <NonEnterprisePricingCard audience="professionals" />
      </Section.Grid>
    </>
  );
}