import { Section } from "./section";
import { NonEnterprisePricingCard, PricingHeader } from "./pricing-shared";

export function PricingSmallBusiness() {
  return (
    <>
      <Section.Heading>Small Business Pricing</Section.Heading>
      <PricingHeader />
      <Section.Grid cols="1">
        <NonEnterprisePricingCard audience="small-business" />
      </Section.Grid>
    </>
  );
}