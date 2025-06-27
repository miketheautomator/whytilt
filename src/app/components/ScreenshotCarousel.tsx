'use client';

import { FC, useState, useEffect } from 'react';

interface ScreenshotCarouselProps {
  className?: string;
}

export const ScreenshotCarousel: FC<ScreenshotCarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    {
      src: '/screenshots/0-describe-tasks-in-english.png',
      alt: 'Describe Tasks in English',
      title: 'Describe Tasks in English'
    },
    {
      src: '/screenshots/1-starting-a-task.png',
      alt: 'Starting a Task',
      title: 'Starting a Task'
    },
    {
      src: '/screenshots/2-navigating-browser.png',
      alt: 'Navigating Browser',
      title: 'Navigating Browser'
    },
    {
      src: '/screenshots/3-network-and-javascript-assertions.png',
      alt: 'Network and JavaScript Assertions',
      title: 'Network and JavaScript Assertions'
    },
    {
      src: '/screenshots/4-built-in-task-runner.png',
      alt: 'Built-in Task Runner',
      title: 'Built-in Task Runner'
    },
    {
      src: '/screenshots/5-customize-layout.png',
      alt: 'Customize Layout',
      title: 'Customize Layout'
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
        <div className="relative aspect-[16/10]">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
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