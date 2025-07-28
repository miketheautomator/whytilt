import { Section } from "@/shared/section";
// import { DemoButton } from "@/shared/demo-button";
// import Image from "next/image";
import { useEffect, useState, RefObject, useRef } from "react";

interface HeroProps {
  primaryText: string;
  secondaryText: string;
  tertiaryText?: string;
  description: string;
  audience: 'enterprise' | 'small-business' | 'professionals';
  containerRef: RefObject<HTMLDivElement | null>;
}

export function Hero({ primaryText, secondaryText, tertiaryText, description, containerRef }: HeroProps) {
  const [showScreenshot, setShowScreenshot] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const shouldShow = scrollTop < viewportHeight * 0.8;
      
      if (shouldShow !== showScreenshot) {
        setShowScreenshot(shouldShow);
        
        if (shouldShow && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef, showScreenshot]);

  return (
    <>
      {/* Desktop: Top section with text - fixed to top 50% */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-20 items-center justify-center px-8 md:px-12 h-[50vh]">
        <div className="max-w-2xl mx-auto text-center">
          <Section.Heading hero>
            {primaryText}
          </Section.Heading>
          <Section.Heading size="xl">
            {secondaryText}
            {tertiaryText && (
              <>
                <br />
                {tertiaryText}
              </>
            )}
          </Section.Heading>
          {description && (
            <Section.Text size="sm">{description}</Section.Text>
          )}
        </div>
      </div>
      
      {/* Mobile: Combined text + video section */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-30 transition-opacity duration-500 h-screen flex flex-col ${showScreenshot ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex-1 flex items-end justify-center px-6 pb-4">
          <div className="max-w-xs text-center">
            <Section.Heading hero>
              {primaryText}
            </Section.Heading>
            <Section.Heading size="xl">
              {secondaryText}
              {tertiaryText && (
                <>
                  <br />
                  {tertiaryText}
                </>
              )}
            </Section.Heading>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-contain w-full h-full max-w-full max-h-full"
          >
            <source src="/slideshow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Desktop: Bottom section with video - fixed to bottom 50% */}
      <div className={`hidden md:flex fixed bottom-0 left-0 right-0 z-30 transition-opacity duration-500 h-[50vh] ${showScreenshot ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative overflow-hidden h-full flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-contain w-full h-full max-w-full max-h-full"
          >
            <source src="/slideshow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}