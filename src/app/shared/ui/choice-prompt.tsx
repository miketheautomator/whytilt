import { FC, PropsWithChildren } from 'react';

interface ChoicePromptProps extends PropsWithChildren {
  title: string;
  showScrollPrompt?: boolean;
  scrollPromptText?: string;
  className?: string;
}

export const ChoicePrompt: FC<ChoicePromptProps> = ({ 
  title,
  showScrollPrompt = false,
  scrollPromptText = "Click one to continue your journey",
  children,
  className = ''
}) => {
  return (
    <div className={`px-4 sm:px-6 lg:px-12 w-full ${className}`}>
      <div className="relative">
        <p className="text-lg sm:text-xl text-white font-semibold mb-4">
          {title}
        </p>
        
        {showScrollPrompt && (
          <div className="text-left mb-4">
            <p className="text-yellow-400 font-semibold text-lg animate-pulse">
              {scrollPromptText}
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
          {children}
        </div>
      </div>
    </div>
  );
};