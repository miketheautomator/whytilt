
import Link from "next/link";
import Image from "next/image";
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="snap-start h-screen w-full bg-gradient-to-b from-slate-900 via-blue-950/50 to-slate-900 flex flex-col items-center justify-center text-center px-4">
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

        <div className="flex justify-center space-x-8">
          <a
            href="mailto:hello@whytilt.com"
            className="flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>hello@whytilt.com</span>
          </a>
          <span className="text-gray-600">•</span>
          <a
            href="https://engineers.whytilt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            engineers.whytilt.com
          </a>
          <span className="text-gray-600">•</span>
          <a href="https://github.com/WhyTilt/tilt-app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            GitHub
          </a>
        </div>

        <div className="border-t border-white/20 pt-6 space-y-2">
          <p className="text-gray-400 text-sm">Throw those headless tests in the trash and use Tilt instead!</p>
          <p className="text-gray-400 text-sm">Made with ❤️ in sunny San Diego.</p>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tilt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
