import { useCallback, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import type { BeforeAfterPair } from '../data/images';
import './BeforeAfterSlider.css';

interface BeforeAfterSliderProps {
  pair: BeforeAfterPair;
}

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/** Drag (mouse/touch/pen) or use the arrow keys to compare a before/after pair. */
export function BeforeAfterSlider({ pair }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;
    const next: Record<string, number> = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      PageDown: position - 10,
      PageUp: position + 10,
      Home: 0,
      End: 100,
    };
    const value = next[e.key];
    if (value === undefined) return;
    e.preventDefault();
    setPosition(clamp(value));
  };

  return (
    <figure className="before-after">
      <div
        ref={frameRef}
        className="before-after__frame"
        style={{ '--pos': `${position}%` } as CSSProperties}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <img
          className="before-after__img"
          src={pair.after}
          alt={`After: ${pair.room}, finished by Satkar Interiors`}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <img
          className="before-after__img before-after__img--before"
          src={pair.before}
          alt={`Before: ${pair.room}, bare builder shell`}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <span className="before-after__tag before-after__tag--before" aria-hidden="true">
          Before
        </span>
        <span className="before-after__tag before-after__tag--after" aria-hidden="true">
          After
        </span>
        <div className="before-after__divider" aria-hidden="true" />
        <div
          className="before-after__handle"
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% before`}
          onKeyDown={onKeyDown}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <figcaption className="before-after__caption">{pair.room}</figcaption>
    </figure>
  );
}
