import './Statement.css';

interface StatementProps {
  /** The large line. */
  line: string;
  /** Smaller follow-up line. */
  text?: string;
}

/** A single large, centred line between sections. */
export function Statement({ line, text }: StatementProps) {
  return (
    <section className="statement" aria-label="Our philosophy">
      <div className="container statement__inner" data-reveal>
        <p className="statement__line">{line}</p>
        {text && <p className="statement__text">{text}</p>}
      </div>
    </section>
  );
}
