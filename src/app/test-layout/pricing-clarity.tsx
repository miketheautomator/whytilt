import { Section } from "./section";

export function PricingClarityContent() {
  return (
    <>
      <Section.Heading>
        Pennies, not paychecks.
      </Section.Heading>
      
      <div className="space-y-8">
        <Section.Text>
          Pay only for what you use, when you use it.
        </Section.Text>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-2xl font-bold text-green-400 mb-3">Everyday Tasks</div>
            <div className="text-lg mb-2">Form filling • Data entry • Basic automation</div>
            <div className="text-3xl font-bold text-white">Pennies</div>
            <div className="text-gray-400 text-sm mt-2">Per task completed</div>
          </div>
          
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-2xl font-bold text-blue-400 mb-3">Large Test Suites</div>
            <div className="text-lg mb-2">Full website testing • Complex workflows</div>
            <div className="text-3xl font-bold text-white">Dollars</div>
            <div className="text-gray-400 text-sm mt-2">Per comprehensive suite</div>
          </div>
        </div>

        <Section.Text>
          Compare that to hiring someone at $25/hour to click buttons all day.
        </Section.Text>
      </div>
    </>
  );
}