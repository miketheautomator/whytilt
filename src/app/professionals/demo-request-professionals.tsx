import { Section } from "@/app/shared/section";
import { DemoButton } from "@/app/shared/demo-button";

export function DemoRequestProfessionals() {
  return (
    <>
      <Section.Heading>Request your personalized installation and demo today.</Section.Heading>
      <div className="mt-6 sm:mt-8">
        <Section.Subheading>A founder will contact you and schedule a time where we:</Section.Subheading>
      </div>
      <div className="mt-6 sm:mt-8">
        <Section.List>
          <li>can look at your specific use case</li>
          <li>help you install and configure tilt</li>
          <li>automate your first tasks</li>
          <li>answer any questions you have</li>
        </Section.List>
      </div>
      <div className="mt-8 sm:mt-12">
        <DemoButton theme="professionals">Book your demo</DemoButton>
      </div>
    </>
  );
}