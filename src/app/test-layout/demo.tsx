import { Section } from "./section";

export function DemoContent() {
  return (
    <>
      <Section.Heading>See Tilt in Action</Section.Heading>
      <Section.Subheading>Watch how Tilt handles real computer tasks with vision AI</Section.Subheading>
      <div className="mt-8">
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-600/30 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="aspect-video bg-zinc-700 rounded-lg flex items-center justify-center mb-6">
            <div className="text-gray-400">Demo Video Placeholder</div>
          </div>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
            Watch Full Demo
          </button>
        </div>
      </div>
    </>
  );
}