interface SectionImageProps {
  src: string;
  alt: string;
}

export function SectionImage({ src, alt }: SectionImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-auto rounded-lg"
    />
  );
}