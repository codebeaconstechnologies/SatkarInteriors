import type { CSSProperties } from 'react';

/** Staggers a `data-reveal` element's entrance by `index` steps. */
export const revealDelay = (index: number): CSSProperties => ({ '--reveal-delay': index }) as CSSProperties;
