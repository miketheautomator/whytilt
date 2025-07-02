import { Section } from "@/shared/section";
import { DemoButton } from "@/shared/demo-button";

interface HeroProps {
  primaryText: string;
  secondaryText: string;
  tertiaryText?: string;
  description: string;
  audience: 'enterprise' | 'small-business' | 'professionals';
}

export function Hero({ primaryText, secondaryText, tertiaryText, description }: HeroProps) {

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