import { revealDelay } from '../lib/reveal';
import { Link } from 'react-router-dom';
import { testimonialPhoto } from '../data/images';
import type { Testimonial } from '../data/testimonials';
import { Icon } from './Icon';
import './Testimonials.css';

function initials(name: string): string {
  return name
    .split(/[\s&]+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}

interface TestimonialsProps {
  items: Testimonial[];
}

/** Scroll-snap carousel on small screens, grid on large. */
export function Testimonials({ items }: TestimonialsProps) {
  return (
    <ul role="list" className="testimonials" aria-label="Client reviews">
      {items.map((t, i) => {
        const photo = testimonialPhoto(t.id);
        return (
          <li key={t.id} className="testimonial" data-reveal style={revealDelay(i)}>
            <figure>
              <div className="testimonial__stars" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Icon key={s} name="star" size={16} className={s < t.rating ? 'is-on' : ''} />
                ))}
              </div>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="testimonial__author">
                {photo ? (
                  <img src={photo} alt="" width="48" height="48" loading="lazy" decoding="async" />
                ) : (
                  <span className="testimonial__avatar" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                )}
                <span>
                  <strong>{t.name}</strong>
                  <span>
                    {t.project}, {t.location}
                  </span>
                </span>
              </figcaption>
              {t.projectSlug && (
                <Link className="link-arrow testimonial__link" to={`/gallery/${t.projectSlug}`}>
                  See the project <Icon name="arrow-right" size={16} />
                </Link>
              )}
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
