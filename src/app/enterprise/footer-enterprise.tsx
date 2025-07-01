import Link from "next/link";
import Image from "next/image";

export function FooterEnterprise() {
  return (
    <footer className="snap-start h-screen w-full bg-gradient-to-b from-slate-900 via-blue-950/50 to-slate-900 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-7xl w-full space-y-8">
        <div className="mb-6 flex justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/android-chrome-192x192.png"
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
              <Link href="/enterprise" className="block text-blue-300 hover:text-blue-200 transition-colors font-medium">
                Enterprise
              </Link>
              <Link href="/small-business" className="block text-gray-400 hover:text-green-300 transition-colors">
                Small Business
              </Link>
              <Link href="/professionals" className="block text-gray-400 hover:text-pink-300 transition-colors">
                Professionals
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Capabilities</h3>
            <div className="space-y-2">
              <Link href="/web-testing" className="block text-gray-400 hover:text-white transition-colors">
                Website Testing
              </Link>
              <Link href="/data-entry" className="block text-gray-400 hover:text-white transition-colors">
                Data Entry
              </Link>
              <Link href="/desktop-automation" className="block text-gray-400 hover:text-white transition-colors">
                Desktop Automation
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <a href="mailto:hello@tilt.dev" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="https://github.com/tilt-dev" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
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