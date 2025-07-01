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
      containerRef.current.addEventListener("scroll", handleScroll);
      return () => containerRef.current?.removeEventListener("scroll", handleScroll);
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
          {/* Add nav links here */}
        </nav>
      </div>
    </header>
  );
}
