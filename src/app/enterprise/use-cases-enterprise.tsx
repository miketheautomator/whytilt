import { Section } from "@/app/shared/section";

export function UseCasesEnterprise() {
  return (
    <>
      <Section.Heading>Enterprise Use Cases</Section.Heading>
      <Section.Subheading>Scale critical business operations with intelligent automation</Section.Subheading>
      
      <Section.Grid cols="2" gap="lg">
        <Section.Card padding="lg">
          <Section.Heading card>Quality Assurance Testing</Section.Heading>
          <div className="mb-4">
            <Section.Text>Automate comprehensive testing across multiple browsers and environments. Catch bugs before customers do.</Section.Text>
          </div>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">End-to-end user journey testing</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Cross-browser compatibility validation</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Regression testing for CI/CD pipelines</Section.Text>
            </li>
          </Section.List>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Data Migration & Validation</Section.Heading>
          <div className="mb-4">
            <Section.Text>Move data between systems safely and verify accuracy at enterprise scale.</Section.Text>
          </div>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">CRM to CRM data transfers</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Legacy system modernization</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Automated data quality audits</Section.Text>
            </li>
          </Section.List>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Compliance & Reporting</Section.Heading>
          <div className="mb-4">
            <Section.Text>Generate compliance reports and audit trails automatically across all systems.</Section.Text>
          </div>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">SOX compliance documentation</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">GDPR data processing audits</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Financial reporting automation</Section.Text>
            </li>
          </Section.List>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Manual Process Automation</Section.Heading>
          <div className="mb-4">
            <Section.Text>Automate repetitive clicking and typing that employees do manually in browsers and desktop apps.</Section.Text>
          </div>
          <Section.List variant="none">
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Navigate through multi-step approval workflows</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Fill out repetitive forms with data from spreadsheets</Section.Text>
            </li>
            <li className="flex items-center gap-2">
              <Section.Icon type="check" color="blue" />
              <Section.Text size="sm">Copy data between systems that lack integrations</Section.Text>
            </li>
          </Section.List>
        </Section.Card>
      </Section.Grid>
    </>
  );
}