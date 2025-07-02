import { Section } from "./section";

interface HeroContentProps {
  onRoleSelection: (role: 'management' | 'worker') => void;
  selectedRole: 'management' | 'worker' | null;
  onReset: () => void;
}

export function HeroContent({ }: HeroContentProps) {
  

  return (
    <>
      <div className="mt-8 sm:mt-12">
        <Section.Heading hero>
          We build intelligent<br />
          digital workers that can<br />
          get real work done.
        </Section.Heading>
      </div>
      
      <Section.Text size="lg">
They use a real desktop, mouse, and computer and can see the screen, just like a human does. They operate on a vision action model. &quot;My goal is X, I see Y, I should do Z.&quot;
      </Section.Text>
    </>
  );
}