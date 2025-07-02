import { Section } from "@/shared/section";
import { NonEnterprisePricingCard, PricingHeader } from "@/shared/pricing-shared";

export function PricingProfessionals() {
  return (
    <div className="text-left">
      <Section.Heading>Simple Pricing</Section.Heading>
      <PricingHeader />
      <div className="flex justify-start mt-8">
        <div className="max-w-md">
          <NonEnterprisePricingCard audience="professionals" />
        </div>
      </div>
    </div>
  );
}