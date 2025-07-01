import { Section } from "@/app/shared/section";
import { DemoButton } from "@/app/shared/demo-button";
import SplitText from "@/app/shared/react-bits/TextAnimations/SplitText/SplitText";

interface HeroProps {
  primaryText: string;
  secondaryText: string;
  tertiaryText?: string;
  description: string;
  audience: 'enterprise' | 'small-business' | 'professionals';
}

export function Hero({ primaryText, secondaryText, tertiaryText, description, audience }: HeroProps) {
  const handleAnimationComplete = () => {
    console.log('Hero headline animation complete!');
  };

  return (
    <>
      <div className="mt-8 sm:mt-12">
        <Section.Heading hero>
          {primaryText}<br />
          {secondaryText}
          {tertiaryText && (
            <>
              <br />
              {tertiaryText}
            </>
          )}
        </Section.Heading>
      </div>
      
      <Section.Subheading>
        {description}
      </Section.Subheading>
      
      <Section.ButtonGroup>
        <DemoButton theme="automated-testing">
          See It In Action
        </DemoButton>
        <Section.Button href="/contact" variant="secondary">
          Get Started
        </Section.Button>
      </Section.ButtonGroup>
    </>
  );
}