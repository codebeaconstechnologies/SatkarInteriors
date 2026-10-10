import { Link } from 'react-router-dom';
import { primaryPhone, studio, whatsappUrl } from '../data/studio';
import { Icon } from './Icon';
import './CtaBand.css';

interface CtaBandProps {
  title?: string;
  text?: string;
}

export function CtaBand({
  title = 'Let’s design a home that works as beautifully as it looks.',
  text = `Book a site consultation with ${studio.founder.name} and get a 3D layout with an itemised estimate.`,
}: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="container cta-band__inner" data-reveal>
        <div className="cta-band__copy">
          <p className="eyebrow cta-band__eyebrow">Start your project</p>
          <h2 id="cta-band-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--light">
            Get a Quote <Icon name="arrow-right" size={18} />
          </Link>
          <a className="btn btn--outline-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> WhatsApp us
          </a>
          <a className="cta-band__call" href={`tel:${primaryPhone.tel}`}>
            <Icon name="phone" size={16} /> Or call {primaryPhone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
