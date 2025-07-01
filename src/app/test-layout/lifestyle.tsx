import { Section } from "./section";

export function LifestyleContent() {
  return (
    <>
      <Section.Heading>
        While Tilt works, you live.
      </Section.Heading>
      
      <Section.Text>
        Tilt is a downloadable digital worker that has its own desktop and can work using software and browsers to do what you specify. Speak to it in plain English. Give it access to the data it needs and that insider knowledge only you know.
      </Section.Text>

      <div className="mt-8">
        <Section.Text>
          Think to yourself: what would I like it to work on, while I am...
        </Section.Text>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Section.Text>Working on more impactful work</Section.Text>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Section.Text>Going to lunch with my investors</Section.Text>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Section.Text>Watching a movie with my kids</Section.Text>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Section.Text>Getting some needed R&R at a resort</Section.Text>
          </div>
        </div>
      </div>
    </>
  );
}