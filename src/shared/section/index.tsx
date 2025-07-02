import { ReactNode } from 'react';
import { SectionHeading } from './heading';
import { SectionSubheading } from './subheading';
import { SectionText } from './text';
import { SectionImage } from './image';
import { SectionList } from './list';
import { SectionBox } from './box';
import { SectionBadge } from './badge';
import { SectionButton } from './button';
import { SectionButtonGroup } from './button-group';
import { SectionVideo } from './video';
import { SectionCard } from './card';
import { SectionGrid } from './grid';
import { SectionIcon } from './icon';

interface SectionProps {
  children: ReactNode;
  isIPhone?: boolean;
  isHero?: boolean;
}

export function Section({ children, isIPhone }: SectionProps) {
  return (
    <section 
      className="snap-start h-screen w-full flex items-center justify-center relative overflow-hidden" 
    >
      <div className={`relative z-30 max-w-7xl w-full text-left p-8 ${isIPhone ? 'pb-12' : ''}`} style={isIPhone ? { transform: 'translateY(-15px)' } : {}}>
        {children}
      </div>
    </section>
  );
}

Section.Heading = SectionHeading;
Section.Subheading = SectionSubheading;
Section.Text = SectionText;
Section.Image = SectionImage;
Section.List = SectionList;
Section.Box = SectionBox;
Section.Badge = SectionBadge;
Section.Button = SectionButton;
Section.ButtonGroup = SectionButtonGroup;
Section.Video = SectionVideo;
Section.Card = SectionCard;
Section.Grid = SectionGrid;
Section.Icon = SectionIcon;