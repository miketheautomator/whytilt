'use client';
import { useEffect, useState, useRef } from 'react';

const slideTexts = [
  "Write your tests in plain english. No need for expensive programmers and headless browsers.",
  "Run 1 test or multiple tests. Tag related tests and run them together.",
  "The Agent is a powerful model that browses the website locally on your computer using its own virtual desktop.",
  "Here we are going to test the booking process of Airbnb and we do it in an incog window to clear cookies and sessions.",
  "Tilt navigates and types into a real web browser, just like your customers do!",
  "Tilt can scroll, click, open tabs, and type! Its also got a bag of customizable tools to do new things.",
  "Tilt can handle popups and other obstacles that makes traditional testing difficult.",
  "As you can see, tilt handled the unexpected popup and now continue onto its objective",
  "Now that it has arrived at the booking page, it can use the details from the test to book a date",
  "See how Tilt uses the real web interface to interact with the web browser. Its not using the DOM or any selectors!",
  "Selects a specific property",
  "Tilt is also a great way to do usability and accessibility testing on your websites and web applications.",
  "If Tilt cant use a page or section from your webiste or app, then there is a serious problem. Set Tilt up to send emails if critical tests fail!",
  "Fills out booking information",
  "Tilt can also make choices for you, so you dont have to describe every single step in detail. Just give it the general objective and Tilt can figure out th in-betweens.",
  "Confirms booking details",
  "Completes the reservation",
  "Here you can see Tilt scrolled down to the Reserve button after filling out the form. Time to see if the test passes!",
  "And as you can see, this test passed with Flying colors and we can read the detailed test report. We can also set up Tilt to connect and report to email, databases, web apis and more!"
];

export function DownloadSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      // 19 slides at 1.2 seconds apart
      const slideIndex = Math.floor(currentTime / 1.2);
      setCurrentSlide(Math.min(slideIndex, slideTexts.length - 1));
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative overflow-hidden rounded-lg shadow-xl" style={{ height: '300px' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-top w-full h-full"
        >
          <source src="/slideshow.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-center">
        <p className="text-lg text-zinc-300">
          {slideTexts[currentSlide]}
        </p>
        <div className="flex justify-center mt-2 space-x-2">
          {slideTexts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-400' : 'bg-zinc-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}