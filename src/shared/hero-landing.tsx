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
      {/* Top section with text - fixed to top 50% */}
      <div className="fixed top-0 left-0 right-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24" style={{ height: '50vh' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8">
            {primaryText}<br />
            {secondaryText}
            {tertiaryText && (
              <>
                <br />
                {tertiaryText}
              </>
            )}
          </h1>
          {description && (
            <Section.Text size="sm">{description}</Section.Text>
          )}
        </div>
      </div>
      
      {/* Bottom section with video - fixed to bottom 50% */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-30 transition-opacity duration-500 ${showScreenshot ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        style={{ height: '50vh' }}
      >
        <div className="relative overflow-hidden shadow-2xl h-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 rounded-t-lg flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-contain max-w-full max-h-full"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          >
            <source src="/slideshow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}