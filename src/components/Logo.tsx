import { studio } from '../data/studio';
import './Logo.css';

interface LogoProps {
  /** `header`: horizontal dark lockup. `footer`: full stacked logo with tagline, in white. */
  variant?: 'header' | 'footer';
}

/** The client's logo. Regenerate the files with `node scripts/build-logo.mjs brand/logo-original.png`. */
export function Logo({ variant = 'header' }: LogoProps) {
  return variant === 'header' ? (
    <img className="logo logo--header" src="/images/studio/logo-horizontal.png" alt={studio.name} width={757} height={144} />
  ) : (
    <img
      className="logo logo--footer"
      src="/images/studio/logo-light.png"
      alt={`${studio.name}: ${studio.tagline}`}
      width={960}
      height={513}
      loading="lazy"
      decoding="async"
    />
  );
}
