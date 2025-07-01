import { Section } from "./section";
import { useRouter } from 'next/navigation';

export function AudienceSelection() {
  const router = useRouter();

  return (
    <>
      <Section.Heading>Built for Every Scale</Section.Heading>
      <Section.Subheading>Choose your path to automation</Section.Subheading>
      
      <Section.Grid cols="3" gap="lg">
        <Section.Card padding="lg" className="cursor-pointer group hover:bg-zinc-800/50 transition-colors relative" onClick={() => router.push('/enterprise')}>
          <div className="mb-4">
            <Section.Badge>ENTERPRISE</Section.Badge>
          </div>
          <Section.Heading card>50x Production</Section.Heading>
          <Section.Text className="mb-12">Scale operations without scaling workforce. Get enterprise security, white-glove onboarding, and priority support.</Section.Text>
          <div className="absolute bottom-6 right-6 text-blue-400 group-hover:text-blue-300 transition-colors">
            Learn more →
          </div>
        </Section.Card>

        <Section.Card padding="lg" className="cursor-pointer group hover:bg-zinc-800/50 transition-colors relative" onClick={() => router.push('/small-business')}>
          <div className="mb-4">
            <Section.Badge>SMALL BUSINESS</Section.Badge>
          </div>
          <Section.Heading card>Scale Smarter</Section.Heading>
          <Section.Text className="mb-12">Grow without growing headaches. Zero licensing fees forever, pay only for what you use.</Section.Text>
          <div className="absolute bottom-6 right-6 text-green-400 group-hover:text-green-300 transition-colors">
            Learn more →
          </div>
        </Section.Card>

        <Section.Card padding="lg" className="cursor-pointer group hover:bg-zinc-800/50 transition-colors relative" onClick={() => router.push('/professionals')}>
          <div className="mb-4">
            <Section.Badge>PROFESSIONALS</Section.Badge>
          </div>
          <Section.Heading card>Reclaim Your Time</Section.Heading>
          <Section.Text className="mb-12">Automate the boring stuff and focus on creative work. Simple setup, no coding required.</Section.Text>
          <div className="absolute bottom-6 right-6 text-pink-400 group-hover:text-pink-300 transition-colors">
            Learn more →
          </div>
        </Section.Card>
      </Section.Grid>
    </>
  );
}