import { Section } from "./section";

export function SavingsProfessionals() {
  return (
    <>
      <Section.Heading>Multiply Your Impact</Section.Heading>
      <Section.Subheading>Get more done without working more hours</Section.Subheading>
      <Section.Grid cols="2">
        <Section.Box>
          <Section.Heading size="lg">Before Tilt</Section.Heading>
          <Section.List variant="none">
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Hours lost to repetitive clicking and typing</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Weekend work to catch up on tedious tasks</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Stress from manual errors and rework</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Limited capacity for meaningful work</Section.Text>
            </li>
          </Section.List>
        </Section.Box>
        <Section.Box>
          <Section.Heading size="lg">With Tilt</Section.Heading>
          <Section.List variant="none">
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Hours back for creative and strategic work</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Work-life balance restored</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Perfect accuracy, zero human error</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">10x productivity on routine tasks</Section.Text>
            </li>
          </Section.List>
        </Section.Box>
      </Section.Grid>
    </>
  );
}