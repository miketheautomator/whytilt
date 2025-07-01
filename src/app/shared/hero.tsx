import { Section } from "./section";
import SplitText from "@/app/shared/react-bits/TextAnimations/SplitText/SplitText";

interface HeroContentProps {
  onRoleSelection: (role: 'management' | 'worker') => void;
  selectedRole: 'management' | 'worker' | null;
  onReset: () => void;
}

export function HeroContent({ }: HeroContentProps) {
  
  const handleAnimationComplete = () => {
    console.log('Hero headline animation complete!');
  };

  return (
    <>
      <div className="mt-8 sm:mt-12">
        <Section.Heading hero>
          We build intelligent<br />
          digital workers that can<br />
          get real work done.
        </Section.Heading>
      </div>
      
      <Section.Subheading>
They use a real desktop, mouse, and computer and can see the screen, just like a human does. They operate on a vision action model. "My goal is X, I see Y, I should do Z."
      </Section.Subheading>
    </>
  );
}