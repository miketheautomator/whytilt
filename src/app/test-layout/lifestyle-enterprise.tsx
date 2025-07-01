import { Section } from "./section";

export function LifestyleEnterprise() {
  return (
    <>
      <Section.Heading>Transform Your Operations</Section.Heading>
      <Section.Subheading>Focus on strategy while Tilt handles execution</Section.Subheading>
      
      <Section.Grid cols="2" gap="lg">
        <Section.Card padding="lg">
          <Section.Heading card>Strategic Leadership</Section.Heading>
          <Section.Text>Stop firefighting operational issues. Spend time on vision, growth, and competitive advantage.</Section.Text>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Team Empowerment</Section.Heading>
          <Section.Text>Free your team from repetitive tasks. Let them focus on creative problem-solving and innovation.</Section.Text>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Scalable Growth</Section.Heading>
          <Section.Text>Grow revenue without proportional headcount increases. Scale operations intelligently.</Section.Text>
        </Section.Card>

        <Section.Card padding="lg">
          <Section.Heading card>Competitive Edge</Section.Heading>
          <Section.Text>Move faster than competitors still doing manual work. Win deals with speed and reliability.</Section.Text>
        </Section.Card>
      </Section.Grid>
    </>
  );
}