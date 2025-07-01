import { Section } from "./section";

export function LifestyleSmallBusiness() {
  return (
    <>
      <Section.Heading>Reclaim Your Business</Section.Heading>
      <Section.Subheading>Work on your business, not in it</Section.Subheading>
      
      <Section.Grid cols="2" gap="lg">
        <Section.Card padding="lg">
          <Section.Heading card>More Family Time</Section.Heading>
          <Section.Text>Stop working nights and weekends on administrative tasks. Automate the busywork and be present for what matters.</Section.Text>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Focus on Customers</Section.Heading>
          <Section.Text>Spend time building relationships and delivering value instead of wrestling with spreadsheets and data entry.</Section.Text>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Stress-Free Growth</Section.Heading>
          <Section.Text>Scale your business without the overwhelm. Handle more customers without burning out.</Section.Text>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Owner Freedom</Section.Heading>
          <Section.Text>Build a business that runs without you. Take vacations knowing everything is handled.</Section.Text>
        </Section.Card>
      </Section.Grid>
    </>
  );
}