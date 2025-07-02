"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export function Header({ containerRef }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current) {
        const scrollTop = containerRef.current.scrollTop;
        setScrolled(scrollTop > window.innerHeight * 0.5); // Shrink after scrolling past 50% of first section
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    handleScroll(); // Set initial state
    
    if (containerRef?.current) {
      const container = containerRef.current;
      container.addEventListener("scroll", handleScroll);
      return () => container?.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [containerRef]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-1" : "py-4"
      }`}
      style={{
        height: scrolled ? '40px' : 'auto',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className={`flex items-center transition-all duration-300 hover:opacity-80 ${
            scrolled ? "gap-2" : "gap-3"
          }`}>
          <Image
            src="/android-chrome-192x192.png"
            alt="Tilt Logo"
            width={scrolled ? 28 : 48}
            height={scrolled ? 28 : 48}
            className="transition-all duration-300"
          />
          {/* out logo IS our name, stop addit ing as text again! */}
        </Link>

        {/* Navigation */}
        <nav
          className={`flex items-center gap-6 transition-all duration-300 ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          <a
            href="https://github.com/WhyTilt/tilt-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-200 ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            <svg 
              className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} transition-all duration-300`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L14.09 8.26L20 9L15.5 13.74L16.18 21L12 18L7.82 21L8.5 13.74L4 9L9.91 8.26L12 2Z"/>
            </svg>
            Star us
          </a>
        </nav>
      </div>
    </header>
  );
}
