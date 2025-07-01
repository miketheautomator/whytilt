import { Section } from "@/app/shared/section";
import { NonEnterprisePricingCard, PricingHeader } from "@/app/shared/pricing-shared";

export function PricingSmallBusiness() {
  return (
    <div className="text-left">
      <Section.Heading>Simple Pricing</Section.Heading>
      <PricingHeader />
      <div className="flex justify-start mt-8">
        <div className="max-w-md">
          <NonEnterprisePricingCard audience="small-business" />
        </div>
      </div>
    </div>
  );
}