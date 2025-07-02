import { Section } from "@/shared/section";
import { DemoButton } from "@/shared/demo-button";
import SplitText from "@/shared/react-bits/TextAnimations/SplitText/SplitText";

interface HeroProps {
  primaryText: string;
  secondaryText: string;
  description: string;
  audience: 'enterprise' | 'small-business' | 'professionals';
}

export function Hero({ primaryText, secondaryText, description, audience }: HeroProps) {
  const handleAnimationComplete = () => {
    console.log('Hero headline animation complete!');
  };

  return (
    <>
      <div className="mt-8 sm:mt-12">
        <Section.Heading hero>
          <div>
            <SplitText
              text={primaryText}
              className=""
              delay={30}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <br />
            <SplitText
              text={secondaryText}
              className=""
              delay={30}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </Section.Heading>
      </div>
      
      <Section.Subheading>
        {description}
      </Section.Subheading>
      
      <div className="mt-8 sm:mt-12">
        <DemoButton theme={audience === 'enterprise' ? 'enterprise' : audience === 'small-business' ? 'small-business' : 'professionals'}>
          {audience === 'enterprise' ? 'Schedule Enterprise Demo' : 
           audience === 'small-business' ? 'Get Started Today' : 
           'Get Started'}
        </DemoButton>
      </div>
    </>
  );
}