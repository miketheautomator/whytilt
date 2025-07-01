import { Section } from "./section";

export function UseCasesContent() {
  return (
    <>
      <Section.Heading>
        Your work. Automated.
      </Section.Heading>
      
      <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-20">
        {/* Use Cases */}
        <div>
          <div className="space-y-8">
            <div className="bg-gray-800/30 rounded-lg p-6">
              <Section.Text>
                <strong>Freelancers:</strong> Run multiple Fiverr jobs simultaneously
              </Section.Text>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6">
              <Section.Text>
                <strong>Data Entry:</strong> Give instructions, watch forms fill themselves
              </Section.Text>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6">
              <Section.Text>
                <strong>E-commerce:</strong> Automate Etsy/eBay with plain English commands
              </Section.Text>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <Section.Subheading>
            While Tilt handles the mundane work, you focus on being:
          </Section.Subheading>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <Section.Text className="text-xl font-medium">Impactful</Section.Text>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <Section.Text className="text-xl font-medium">Productive</Section.Text>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <Section.Text className="text-xl font-medium">Happy</Section.Text>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <Section.Text className="text-xl font-medium">Relaxed</Section.Text>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <Section.Text className="text-xl font-medium">Social</Section.Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}