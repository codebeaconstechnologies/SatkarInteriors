import { Link } from 'react-router-dom';
import { google } from '../data/google';
import { fullAddress, studio, whatsappUrl } from '../data/studio';
import { Icon } from './Icon';
import { Logo } from './Logo';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" aria-label={`${studio.name}, home`} className="site-footer__logo">
            <Logo variant="footer" />
          </Link>
          <p>{studio.promise}</p>
          <ul role="list" className="site-footer__social">
            <li>
              <a href={studio.social.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={18} label="Instagram" />
              </a>
            </li>
            <li>
              <a href={studio.social.facebook} target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size={18} label="Facebook" />
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} label="WhatsApp" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="site-footer__col" aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul role="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Projects</Link></li>
            <li><Link to="/about">About the studio</Link></li>
            <li><Link to="/contact">Get a quote</Link></li>
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Services</h2>
          <ul role="list">
            {studio.services.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </div>

        <address className="site-footer__col site-footer__nap">
          <h2 className="site-footer__heading">Visit the studio</h2>
          <p className="site-footer__name">{studio.name}</p>
          <a href={google.directionsUrl} target="_blank" rel="noopener noreferrer">
            {fullAddress}
          </a>
          {studio.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`}>
              {p.display}
            </a>
          ))}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
          {studio.hours.map((h) => (
            <span key={h.days}>
              {h.days}: {h.time}
            </span>
          ))}
        </address>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {year} {studio.legalName}. Interior designers in {studio.city}.
        </p>
        <p>Serving {studio.serviceAreas.join(' · ')}</p>
      </div>
    </footer>
  );
}
