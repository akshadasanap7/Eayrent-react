import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useLang } from '../context/LanguageContext';

const navLinks = [
  { to: '/listings', label: 'Listings' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="brand-icon">🏠</span>
        <span>Easy<span className="gold">Rent</span></span>
      </Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} className={pathname === to ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link to="/listings" className="btn-nav-cta" onClick={() => setMenuOpen(false)}>Find a Home</Link>
      </div>

      <div className="nav-right">
        <div className="lang-switcher">
          {['en', 'fr', 'es'].map(l => (
            <button key={l} onClick={() => setLang(l)} className={lang === l ? 'lang-btn active' : 'lang-btn'}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
