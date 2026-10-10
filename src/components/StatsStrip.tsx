import { revealDelay } from '../lib/reveal';
import type { Stat } from '../data/studio';
import './StatsStrip.css';

interface StatsStripProps {
  stats: readonly Stat[];
  tone?: 'light' | 'dark';
}

export function StatsStrip({ stats, tone = 'light' }: StatsStripProps) {
  return (
    <dl className={`stats stats--${tone}`}>
      {stats.map((s, i) => (
        <div key={s.label} className="stats__item" data-reveal style={revealDelay(i)}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
