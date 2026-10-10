import type { ReactNode } from 'react';
import './PageIntro.css';

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}

/** Top-of-page heading block with the page's single H1. */
export function PageIntro({ eyebrow, title, lead, children }: PageIntroProps) {
  return (
    <header className="page-intro">
      <div className="container page-intro__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="lead page-intro__lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
