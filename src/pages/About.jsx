import { useLang } from '../context/LanguageContext';

export default function About() {
  const { t } = useLang();
  return (
    <div className="about-page">
      <div className="about-card">
        <div className="about-icon">🏠</div>
        <h2>{t.about.title}</h2>
        <p>{t.about.desc}</p>
        <div className="about-features">
          {[['🔍', 'Smart Search'], ['🌍', 'Multilingual'], ['⚡', 'Real-time Filters'], ['🔒', 'Verified Listings']].map(([icon, label]) => (
            <div key={label} className="about-feature">
              <span>{icon}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
