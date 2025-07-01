import { Section } from "@/app/shared/section";
import { NonEnterprisePricingCard, PricingHeader } from "@/app/shared/pricing-shared";

export function PricingProfessionals() {
  return (
    <div className="text-center">
      <Section.Heading>Simple Pricing</Section.Heading>
      <PricingHeader />
      <div className="flex justify-center mt-8">
        <div className="max-w-md">
          <NonEnterprisePricingCard audience="professionals" />
        </div>
      </div>
    </div>
  );
}