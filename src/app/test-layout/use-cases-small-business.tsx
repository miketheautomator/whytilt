import { Section } from "./section";

export function UseCasesSmallBusiness() {
  return (
    <>
      <Section.Heading>Small Business Use Cases</Section.Heading>
      <Section.Subheading>Automate the tasks that slow your growth</Section.Subheading>
      
      <Section.Grid cols="2" gap="lg">
        <Section.Card padding="lg">
          <Section.Heading card>Lead Management</Section.Heading>
          <Section.Text className="mb-4">Never lose a potential customer. Automate lead capture, qualification, and follow-up.</Section.Text>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Web form to CRM transfer</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Lead scoring and routing</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Follow-up email sequences</Section.Text>
            </li>
          </Section.List>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Inventory Management</Section.Heading>
          <Section.Text className="mb-4">Keep stock levels optimal without constant monitoring. Automate reordering and updates.</Section.Text>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Supplier catalog monitoring</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Stock level alerts and reordering</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Multi-platform inventory sync</Section.Text>
            </li>
          </Section.List>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Social Media Management</Section.Heading>
          <Section.Text className="mb-4">Maintain consistent online presence across all platforms without the daily grind.</Section.Text>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Cross-platform content posting</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Customer comment monitoring</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Engagement analytics compilation</Section.Text>
            </li>
          </Section.List>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Financial Administration</Section.Heading>
          <Section.Text className="mb-4">Keep books clean and taxes simple. Automate expense tracking and invoicing.</Section.Text>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Receipt capture and categorization</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Invoice generation and sending</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Bank reconciliation assistance</Section.Text>
            </li>
          </Section.List>
        </Section.Card>
      </Section.Grid>
    </>
  );
}