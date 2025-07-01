import { Section } from "./section";

export function DemoContent() {
  return (
    <>
      <Section.Heading>See Tilt in Action</Section.Heading>
      <Section.Subheading>Watch how Tilt handles real computer tasks with vision AI and our action model!</Section.Subheading>
      <div className="mt-8 w-[100%] lg:w-[80%] xl:w-[60%]">
        <Section.Video src="/videos/look-ma-no-dom-dependencies.webm" />
      </div>
    </>
  );
}