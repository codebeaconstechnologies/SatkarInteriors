import { Link } from 'react-router-dom';
import { primaryPhone, regionsText, studio, whatsappUrl } from '../data/studio';
import { Icon } from './Icon';
import './CtaBand.css';

interface CtaBandProps {
  title?: string;
  text?: string;
}

export function CtaBand({
  title = 'Great homes aren’t rushed. They’re crafted.',
  text = `Tell us about your home and ${studio.founder.name.split(' ')[0]} will get back to you. We work across ${regionsText}.`,
}: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="container cta-band__inner" data-reveal>
        <div className="cta-band__copy">
          <p className="eyebrow cta-band__eyebrow">Get in touch</p>
          <h2 id="cta-band-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--light">
            Contact Us <Icon name="arrow-right" size={18} />
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
