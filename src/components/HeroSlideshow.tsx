import { useEffect, useState } from 'react';
import type { HeroSlide } from '../data/images';
import { studio } from '../data/studio';
import './HeroSlideshow.css';

const INTERVAL_MS = 6000;

interface HeroSlideshowProps {
  slides: HeroSlide[];
}

/** Cross-fading hero photos. Autoplay stops for reduced motion, on hover/focus, or via the pause button. */
export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = slides.length;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (count < 2 || paused || hovered || reducedMotion) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count, paused, hovered, reducedMotion]);

  if (count === 0) return null;

  return (
    <div
      className="hero-slides"
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured interiors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="hero-slides__frame">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            className={`hero-slides__img${i === active ? ' is-active' : ''}`}
            src={slide.src}
            alt={i === 0 ? `${slide.caption} designed by ${studio.name}, ${studio.city}` : `${slide.caption} by ${studio.name}`}
            aria-hidden={i !== active}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding={i === 0 ? 'sync' : 'async'}
            {...(i === 0 ? { fetchpriority: 'high' } : {})}
          />
        ))}
      </div>

      <div className="hero-slides__bar">
        <p className="hero-slides__caption" aria-live={paused ? 'polite' : 'off'}>
          <span className="hero-slides__index">{String(active + 1).padStart(2, '0')}</span>
          {slides[active]?.caption}
        </p>
        {count > 1 && (
          <div className="hero-slides__controls">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className="hero-slides__dot"
                aria-label={`Show photo ${i + 1}: ${slide.caption}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
              />
            ))}
            {!reducedMotion && (
              <button
                type="button"
                className="hero-slides__pause"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  {paused ? <path d="M7 4v16l13-8z" fill="currentColor" /> : <path d="M7 4h3v16H7zM14 4h3v16h-3z" fill="currentColor" />}
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
