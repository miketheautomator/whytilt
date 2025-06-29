import { FC } from 'react';

interface ChoiceButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  selected?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  className?: string;
}

export const ChoiceButton: FC<ChoiceButtonProps> = ({ 
  onClick, 
  children, 
  selected = false,
  variant = 'primary', // eslint-disable-line @typescript-eslint/no-unused-vars
  size = 'default',
  className = ''
}) => {
  const sizeClasses = {
    default: 'px-8 py-6 text-xl',
    large: 'px-10 py-8 text-2xl'
  };

  const baseClasses = `${sizeClasses[size]} font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-white/25 hover:scale-105`;
  
  const variantClasses = selected
    ? 'bg-white/20 text-white border-2 border-white/40'
    : 'bg-white text-blue-900';

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};