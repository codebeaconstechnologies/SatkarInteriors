import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryPhone, studio, whatsappUrl } from '../data/studio';
import { Icon } from './Icon';
import { Logo } from './Logo';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/gallery', label: 'Projects', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    const toggle = toggleRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggle?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled || menuOpen ? ' is-solid' : ''}`}>
      <div className="container site-header__bar">
        <Link to="/" className="site-header__logo" aria-label={`${studio.name}, home`}>
          <Logo />
        </Link>

        <nav className="site-header__nav" aria-label="Main">
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className="site-header__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone" href={`tel:${primaryPhone.tel}`}>
            <Icon name="phone" size={16} />
            <span>{primaryPhone.display}</span>
          </a>
          <Link to="/contact" className="btn btn--primary site-header__cta">
            Get a Quote
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav className="container mobile-menu__inner" aria-label="Mobile">
          <ul role="list" className="mobile-menu__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className="mobile-menu__link">
                  {link.label}
                  <Icon name="arrow-right" size={20} />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__actions">
            <Link to="/contact" className="btn btn--primary btn--block">
              Get a Quote
            </Link>
            <div className="mobile-menu__row">
              <a className="btn btn--secondary" href={`tel:${primaryPhone.tel}`}>
                <Icon name="phone" size={18} /> Call
              </a>
              <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
