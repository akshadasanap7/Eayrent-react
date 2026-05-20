import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Listings' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { dark, toggle } = useTheme();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <div className="brand-logo">🏠</div>
        <span>Easy<span className="brand-gold">Rent</span></span>
      </Link>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} className={`nav-link${pathname === to ? ' active' : ''}`}>
            {label}
          </Link>
        ))}
        <Link to="/listings" className="btn-nav-cta" onClick={() => setMenuOpen(false)}>Find a Home</Link>
      </div>

      <div className="nav-right">
        <div className="lang-switcher">
          {[{ code: 'en', flag: '🇬🇧' }, { code: 'fr', flag: '🇫🇷' }, { code: 'es', flag: '🇪🇸' }].map(({ code, flag }) => (
            <button key={code} onClick={() => setLang(code)} className={`lang-btn${lang === code ? ' active' : ''}`} title={code.toUpperCase()}>
              {flag}
            </button>
          ))}
        </div>

        <button className="theme-toggle" onClick={toggle} title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'} aria-label="toggle theme">
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb">{dark ? '🌙' : '☀️'}</span>
          </span>
        </button>

        <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="menu">
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
