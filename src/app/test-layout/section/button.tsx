import { ReactNode } from 'react';

interface SectionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'teal';
  full?: boolean;
}

export function SectionButton({ children, onClick, variant = 'primary', full = false }: SectionButtonProps) {
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25",
    secondary: "bg-gray-600 hover:bg-gray-700 hover:shadow-gray-500/25", 
    teal: "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-500/25"
  };
  
  const widthClass = full ? "flex-1 w-full" : "";
  
  return (
    <button 
      onClick={onClick}
      className={`${widthClass} px-6 sm:px-8 py-3 sm:py-4 ${variantClasses[variant]} text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-base sm:text-lg`}
    >
      {children}
    </button>
  );
}