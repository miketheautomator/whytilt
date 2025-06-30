import { Section } from "./section";

export function HeroContent() {
  return (
    <>
      <Section.Badge icon={<div />} animate>
        Early Access • Limited Spots
      </Section.Badge>
      
      <div className="mt-8 sm:mt-12">
        <Section.Heading hero>
          Real intelligence. Real desktop. Real work.
        </Section.Heading>
      </div>
      
      <Section.Subheading>
        Tilt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.
      </Section.Subheading>
      
      <div className="mt-8 sm:mt-12">
        <Section.ButtonGroup>
        <Section.Button variant="primary">
          I manage people
        </Section.Button>
        <Section.Button variant="teal">
          I do the work myself
        </Section.Button>
        </Section.ButtonGroup>
      </div>
    </>
  );
}