import type { ReactNode } from 'react';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Extra content shown under the intro (e.g. a link). */
  aside?: ReactNode;
}

/** Left-aligned editorial heading: eyebrow + title on the left, intro on the right. */
export function SectionHeading({ id, eyebrow, title, intro, aside }: SectionHeadingProps) {
  return (
    <div className="section-head" data-reveal>
      <div className="section-head__title">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {(intro || aside) && (
        <div className="section-head__intro">
          {intro && <p>{intro}</p>}
          {aside}
        </div>
      )}
    </div>
  );
}
