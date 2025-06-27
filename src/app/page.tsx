"use client";
import { useEffect, useRef, useState } from "react";
import {
  HeroSection,
  ScreenshotSection,
  MysterySection,
  ImpactSection,
  TechnologySection,
  ToolsSection,
  AIFirstSection,
  ContactSection,
  Footer
} from './components';

const TYPED_WORDS = [
  "website testing workflows",
  "functional product testing", 
  "security and penetration testing",
  "Google Analytics tag validation",
  "stock market research",
  "Excel and office workflows",
  "repetitive website tasks",
  "e-commerce management"
];


function useTypewriter(
  words: string[],
  typingSpeed = 60,
  deletingSpeed = 30,
  pause = 1200
) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[index];
    if (!isDeleting && charIdx < currentWord.length) {
      timeout.current = setTimeout(() => {
        setDisplay(currentWord.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIdx === currentWord.length) {
      timeout.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIdx > 0) {
      timeout.current = setTimeout(() => {
        setDisplay(currentWord.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIdx === 0) {
      timeout.current = setTimeout(() => {
        setIsDeleting(false);
        setIndex((index + 1) % words.length);
      }, 400);
    }
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [words, index, charIdx, isDeleting, typingSpeed, deletingSpeed, pause]);

  return display;
}

export default function Home() {
  const typed = useTypewriter(TYPED_WORDS);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
      if (scrollToTopBtn) {
        // Show button when scrolled past half of first viewport (hero section)
        const scrollThreshold = window.innerHeight * 0.5;
        if (window.scrollY > scrollThreshold) {
          scrollToTopBtn.classList.add('show');
          console.log('Showing scroll button at scrollY:', window.scrollY, 'threshold:', scrollThreshold);
        } else {
          scrollToTopBtn.classList.remove('show');
          console.log('Hiding scroll button at scrollY:', window.scrollY, 'threshold:', scrollThreshold);
        }
      } else {
        console.log('Scroll button not found in DOM');
      }
    };

    // Call once on mount to set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <main 
      className="relative h-screen overflow-y-scroll snap-mandatory snap-y scroll-smooth"
      style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
        WebkitOverflowScrolling: 'touch',
        scrollSnapType: 'y mandatory'
      }}
    >
      <HeroSection typed={typed} className="h-screen snap-start" />
      <ScreenshotSection className="h-screen snap-start" data-section="screenshots" />
      <MysterySection className="h-screen snap-start" data-section="mystery" />
      <ImpactSection className="h-screen snap-start" data-section="impact" />
      <TechnologySection className="h-screen snap-start" data-section="technology" />
      <ToolsSection className="h-screen snap-start" data-section="tools" />
      <AIFirstSection className="h-screen snap-start" data-section="ai-first" />
      <ContactSection className="h-screen snap-start" data-section="contact" />
      <Footer className="snap-start" />
      
      {/* Floating scroll to top button - hidden on hero section */}
      <button
        onClick={() => {
          const heroSection = document.querySelector('main > section:first-child');
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 shadow-lg scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}