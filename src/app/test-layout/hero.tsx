export function HeroContent() {
  return (
    <>
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 mb-8 sm:mb-12 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-white text-xs sm:text-sm font-medium">Early Access • Limited Spots</span>
      </div>
      
      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 sm:mb-8 leading-[1.1] tracking-tight text-white max-w-6xl">
        Real intelligence. Real desktop. Real work.
      </h1>
      
      {/* Subtitle */}
      <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 mb-8 sm:mb-12 max-w-5xl">
        Tilt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-lg">
          I manage people
        </button>
        <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 text-lg">
          I do the work myself
        </button>
      </div>
    </>
  );
}