"use client";
import { useEffect, useRef, useState } from "react";
import {
  HeroSection,
  MysterySection,
  ImpactSection,
  TechnologySection,
  ToolsSection,
  AIFirstSection,
  EmailCaptureSection,
  ContactSection,
  Footer
} from './components';

const TYPED_WORDS = [
  "manual QA testing",
  "Google Analytics audits",
  "data scraping pipelines",
  "Excel report generation",
  "stock research overnight",
  "form-filling workflows",
  "tag validation and debugging",
  "CRM data cleanup",
  "invoice processing",
  "endless browser clicks",
  "vacation planning and booking",
  "web app regression checks",
  "PDF extraction and filing",
  "repetitive admin tasks",
  "entire offshore workflows",
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
      <MysterySection className="h-screen snap-start" data-section="mystery" />
      <ImpactSection className="h-screen snap-start" data-section="impact" />
      <TechnologySection className="h-screen snap-start" data-section="technology" />
      <ToolsSection className="h-screen snap-start" data-section="tools" />
      <AIFirstSection className="h-screen snap-start" data-section="ai-first" />
      <EmailCaptureSection className="h-screen snap-start" data-section="email" />
      <ContactSection className="h-screen snap-start" data-section="contact" />
      <Footer className="snap-start" />
    </main>
  );
}