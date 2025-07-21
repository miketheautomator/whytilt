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
      <div className="-mt-16 sm:-mt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
          {primaryText}<br />
          {secondaryText}
          {tertiaryText && (
            <>
              <br />
              {tertiaryText}
            </>
          )}
        </h1>
      </div>
      
      <Section.Subheading>
        {description}
      </Section.Subheading>

      <div 
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-500 ${showScreenshot ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        style={{ width: '70vw' }}
      >
        <div className="relative overflow-hidden shadow-2xl" style={{ height: '40vh' }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-cover object-top w-full h-full"
          >
            <source src="/slideshow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}