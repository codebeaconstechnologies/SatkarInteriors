import { revealDelay } from '../lib/reveal';
import type { ProcessStep } from '../data/studio';
import './ProcessTimeline.css';

interface ProcessTimelineProps {
  steps: readonly ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="timeline">
      {steps.map((step, i) => (
        <li key={step.title} className="timeline__step" data-reveal style={revealDelay(i)}>
          <span className="timeline__num" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="timeline__body">
            <p className="timeline__duration">{step.stage}</p>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
