import { Section } from "./section";

export function CapabilitiesContent() {
  return (
    <>
      <Section.Heading>What Can Tilt Do?</Section.Heading>
      <Section.Subheading>Automate any computer task that requires vision and decision-making</Section.Subheading>
      <Section.Grid cols="3">
        <Section.Card>
          <Section.Heading card>Website Testing</Section.Heading>
          <Section.Text>Test web applications without brittle selectors using vision AI</Section.Text>
        </Section.Card>
        <Section.Card>
          <Section.Heading card>Data Entry</Section.Heading>
          <Section.Text>Fill forms, extract data, and validate information across systems</Section.Text>
        </Section.Card>
        <Section.Card>
          <Section.Heading card>Desktop Automation</Section.Heading>
          <Section.Text>Control any desktop application with intelligent mouse and keyboard actions</Section.Text>
        </Section.Card>
      </Section.Grid>
    </>
  );
}