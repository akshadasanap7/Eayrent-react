import { Link, useLocation } from 'react-router';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">{t.nav.brand}</Link>
      <div className="nav-links">
        <Link to="/listings" className={pathname === '/listings' ? 'active' : ''}>{t.nav.listings}</Link>
        <Link to="/about" className={pathname === '/about' ? 'active' : ''}>{t.nav.about}</Link>
      </div>
      <div className="lang-switcher">
        {['en', 'fr', 'es'].map(l => (
          <button key={l} onClick={() => setLang(l)} className={lang === l ? 'lang-btn active' : 'lang-btn'}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}
