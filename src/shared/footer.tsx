
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  theme?: 'blue' | 'green' | 'purple' | 'automated-testing' | 'usability-testing' | 'analytics-testing';
}

export function Footer({ theme = 'blue' }: FooterProps) {
  const getThemeGradient = () => {
    switch (theme) {
      case 'automated-testing':
        return 'bg-gradient-to-b from-slate-900 via-blue-950/50 to-slate-900';
      case 'usability-testing':
        return 'bg-gradient-to-b from-slate-900 via-purple-950/50 to-slate-900';
      case 'analytics-testing':
        return 'bg-gradient-to-b from-slate-900 via-green-950/50 to-slate-900';
      case 'green':
        return 'bg-gradient-to-b from-slate-900 via-green-950/50 to-slate-900';
      case 'purple':
        return 'bg-gradient-to-b from-slate-900 via-purple-950/50 to-slate-900';
      case 'blue':
      default:
        return 'bg-gradient-to-b from-slate-900 via-blue-950/50 to-slate-900';
    }
  };

  const getThemeHoverColor = () => {
    switch (theme) {
      case 'automated-testing':
        return 'hover:text-blue-400';
      case 'usability-testing':
        return 'hover:text-purple-400';
      case 'analytics-testing':
        return 'hover:text-green-400';
      case 'green':
        return 'hover:text-green-400';
      case 'purple':
        return 'hover:text-purple-400';
      case 'blue':
      default:
        return 'hover:text-blue-400';
    }
  };

  return (
    <footer className={`snap-start h-screen w-full ${getThemeGradient()} flex flex-col items-center justify-center text-center px-4`}>
      <div className="max-w-7xl w-full space-y-8">
        <div className="mb-6 flex justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Tilt Logo"
              width={64}
              height={64}
            />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          {/* Audiences */}
          <div>
            <h3 className="text-white font-semibold mb-4">Audiences</h3>
            <div className="space-y-2">
              <Link href="/enterprise" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Enterprise
              </Link>
              <Link href="/small-business" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Small Business
              </Link>
              <Link href="/professionals" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Professionals
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Capabilities</h3>
            <div className="space-y-2">
              <Link href="/automated-testing" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Website Automated Testing
              </Link>
              <Link href="/usability-testing" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Website Usability Testing
              </Link>
              <Link href="/analytics-testing" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Google Analytics Testing
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Home
              </Link>
              <a href="mailto:hello@tilt.dev" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                Contact
              </a>
              <a href="https://github.com/tilt-dev" target="_blank" rel="noopener noreferrer" className={`block text-gray-400 ${getThemeHoverColor()} transition-colors`}>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 space-y-2">
          <p className="text-gray-400 text-sm">AI agents for real computer tasks</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tilt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
