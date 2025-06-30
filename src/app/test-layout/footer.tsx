
export function Footer() {
  return (
    <footer className="snap-start h-screen w-full bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-7xl w-full space-y-4">
        <div className="mb-6 flex justify-center">
          <img
            src="/android-chrome-192x192.png"
            alt="Tilt Logo"
            className="w-16 h-16"
          />
        </div>
        <p className="text-gray-400 text-sm">AI agents for real computer tasks</p>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tilt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
