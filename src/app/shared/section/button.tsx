import { ReactNode, useRef } from 'react';

interface SectionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'purple' | 'blue' | 'green' | 'pink' | 'yellow' | 'teal';
  full?: boolean;
}

export function SectionButton({ children, onClick, variant = 'primary', full = false }: SectionButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25",
    secondary: "bg-gray-600 hover:bg-gray-700 hover:shadow-gray-500/25", 
    purple: "bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/25",
    blue: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25",
    green: "bg-green-600 hover:bg-green-700 hover:shadow-green-500/25",
    pink: "bg-pink-600 hover:bg-pink-700 hover:shadow-pink-500/25",
    yellow: "bg-yellow-600 hover:bg-yellow-700 hover:shadow-yellow-500/25",
    teal: "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-500/25"
  };
  
  const widthClass = full ? "flex-1 w-full" : "";

  const handleMouseEnter = () => {
    const button = buttonRef.current;
    if (!button) return;
    const glareElement = button.querySelector('.glare-effect') as HTMLElement;
    if (glareElement) {
      glareElement.style.transform = 'translateX(100%)';
    }
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    const glareElement = button.querySelector('.glare-effect') as HTMLElement;
    if (glareElement) {
      glareElement.style.transform = 'translateX(-100%)';
    }
  };
  
  return (
    <button 
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${widthClass} px-6 sm:px-8 py-3 sm:py-4 ${variantClasses[variant]} text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-base sm:text-lg relative overflow-hidden`}
    >
      <span className="relative z-20 pointer-events-none">{children}</span>
      <div
        className="glare-effect absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(-30deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
          width: '300px',
          transform: 'translateX(-100%)',
          transition: 'transform 800ms ease-out',
          zIndex: 10
        }}
      />
    </button>
  );
}