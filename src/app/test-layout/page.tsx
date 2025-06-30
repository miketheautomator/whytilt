"use client"
import { useEffect, useRef } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white"
    >
      <Header containerRef={containerRef} />

      <section className="snap-start h-screen w-full flex items-center justify-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%)'}}>
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(37, 99, 235, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(5, 150, 105, 0.06) 0%, transparent 70%)
          `,
          mixBlendMode: 'lighten'
        }}></div>
        <div className="relative z-10 max-w-7xl w-full text-center p-8">
          <h1 className="text-6xl font-bold text-white mb-4">Section 1</h1>
          <p className="text-xl text-gray-300">Hero background colors</p>
        </div>
      </section>

      <section className="snap-start h-screen w-full flex items-center justify-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%)'}}>
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(37, 99, 235, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 50%, rgba(5, 150, 105, 0.06) 0%, transparent 70%)
          `,
          mixBlendMode: 'lighten'
        }}></div>
        <div className="relative z-10 max-w-7xl w-full text-center p-8">
          <h1 className="text-6xl font-bold text-white mb-4">Section 2</h1>
          <p className="text-xl text-gray-300">Same hero style, different glow positions</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
