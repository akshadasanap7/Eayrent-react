import { useNavigate } from 'react-router';
import { useLang } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">🏠 #1 Rental Platform</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <button className="btn-hero" onClick={() => navigate('/listings')}>{t.hero.cta}</button>
        </div>
      </div>

      <div className="stats-bar">
        {[['8+', 'Properties'], ['3', 'Cities'], ['100%', 'Verified'], ['24/7', 'Support']].map(([val, label]) => (
          <div key={label} className="stat-item">
            <strong>{val}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
