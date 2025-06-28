'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

interface ScreenshotCarouselProps {
  className?: string;
}

export const ScreenshotCarousel: FC<ScreenshotCarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    {
      src: '/screenshots/1-describe-tasks-in-plain-english.png',
      alt: 'Describe Tasks in Plain English',
      title: 'Describe Tasks in Plain English'
    },
    {
      src: '/screenshots/2-builtin-task-runner.png',
      alt: 'Built-in Task Runner',
      title: 'Built-in Task Runner'
    },
    {
      src: '/screenshots/3-agent-is-starting.png',
      alt: 'Agent is Starting',
      title: 'Agent is Starting'
    },
    {
      src: '/screenshots/4-it-adapts-on-its-own.png',
      alt: 'It Adapts on Its Own',
      title: 'It Adapts on Its Own'
    },
    {
      src: '/screenshots/5-task-completes-with-pass-fail.png',
      alt: 'Task Completes with Pass/Fail',
      title: 'Task Completes with Pass/Fail'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 shadow-2xl">
        {/* Screenshots */}
        <div className="relative aspect-video">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous screenshot"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next screenshot"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Screenshot Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <h3 className="text-white text-lg font-semibold">
            {screenshots[currentIndex].title}
          </h3>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-blue-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-green-500/20 rounded-xl blur-xl -z-10"></div>
    </div>
  );
};