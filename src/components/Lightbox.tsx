import { useEffect, useRef, type KeyboardEvent, type PointerEvent } from 'react';
import { Icon } from './Icon';
import './Lightbox.css';

export interface LightboxPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 50;

/**
 * Full-screen photo viewer on a native <dialog>, which provides the focus trap,
 * inert background and Escape-to-close. ← / → step through photos; swipe on touch.
 */
export function Lightbox({ photos, index, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);
  const open = index !== null;
  const count = photos.length;
  const photo = open ? photos[index] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, [open]);

  // Warm the cache for neighbouring photos.
  useEffect(() => {
    if (index === null || count < 2) return;
    for (const offset of [1, -1]) {
      const neighbour = photos[(index + offset + count) % count];
      if (neighbour) new Image().src = neighbour.src;
    }
  }, [index, count, photos]);

  const step = (delta: number) => {
    if (index === null || count < 2) return;
    onChange((index + delta + count) % count);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
  };

  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') swipeStart.current = e.clientX;
  };

  const onPointerUp = (e: PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) step(dx < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => {
        // A click on the backdrop (the dialog itself, not its content) closes it.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {photo && (
        <div className="lightbox__inner">
          <div className="lightbox__top">
            <p className="lightbox__count" aria-live="polite">
              {index! + 1} / {count}
            </p>
            <button type="button" className="lightbox__btn" onClick={onClose} autoFocus>
              <Icon name="close" size={22} label="Close photo viewer" />
            </button>
          </div>

          <figure className="lightbox__figure" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
            <img key={photo.src} src={photo.src} alt={photo.alt} decoding="async" draggable={false} />
            <figcaption>{photo.caption}</figcaption>
          </figure>

          {count > 1 && (
            <>
              <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--prev" onClick={() => step(-1)}>
                <Icon name="chevron-left" size={26} label="Previous photo" />
              </button>
              <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--next" onClick={() => step(1)}>
                <Icon name="chevron-right" size={26} label="Next photo" />
              </button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
