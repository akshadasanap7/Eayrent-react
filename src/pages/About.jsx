import { useNavigate } from 'react-router';
import { useLang } from '../context/LanguageContext';

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', avatar: 'A', bio: '10+ years in real estate tech. Passionate about making renting simple.' },
  { name: 'Priya Nair', role: 'Head of Product', avatar: 'P', bio: 'UX expert focused on building seamless rental experiences.' },
  { name: 'James Okafor', role: 'Lead Engineer', avatar: 'J', bio: 'Full-stack developer who built EasyRent from the ground up.' },
  { name: 'Sofia Chen', role: 'Customer Success', avatar: 'S', bio: 'Dedicated to helping every renter find their perfect home.' },
];

export default function About() {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* HEADER */}
      <div className="page-header animate-fadein">
        <span className="page-tag">🏠 Our Story</span>
        <h1>{t.about.title}</h1>
        <p>{t.about.desc}</p>
      </div>

      {/* MISSION */}
      <section className="section mission-section animate-slideup">
        <div className="mission-grid">
          <div className="mission-text">
            <span className="page-tag">🎯 Our Mission</span>
            <h2>Making Renting <span className="gold">Simple & Transparent</span></h2>
            <p>EasyRent was founded in 2020 with one goal: eliminate the stress of finding a rental. We believe everyone deserves a home they love, found without hassle.</p>
            <p>We connect verified landlords with quality tenants through a transparent, multilingual platform built for the modern renter.</p>
            <button className="btn-hero" onClick={() => navigate('/listings')}>Find Your Home</button>
          </div>
          <div className="mission-stats">
            {[['500+', 'Happy Tenants'], ['200+', 'Landlords'], ['8+', 'Properties'], ['4.9★', 'Rating']].map(([val, label]) => (
              <div key={label} className="mission-stat">
                <strong>{val}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="section-header animate-fadein">
          <span className="page-tag">💡 What We Stand For</span>
          <h2>Our <span className="gold">Core Values</span></h2>
        </div>
        <div className="values-grid">
          {[
            { icon: '🔍', title: 'Transparency', desc: 'No hidden fees. No surprises. Every listing is verified and accurate.' },
            { icon: '🌍', title: 'Inclusivity', desc: 'Multilingual support so everyone can find a home, regardless of language.' },
            { icon: '⚡', title: 'Speed', desc: 'Real-time listings and instant landlord contact. Find a home fast.' },
            { icon: '🔒', title: 'Trust', desc: 'Every landlord and property is verified before listing on our platform.' },
            { icon: '💬', title: 'Support', desc: '24/7 customer support to help you at every step of your rental journey.' },
            { icon: '♻️', title: 'Sustainability', desc: 'We promote eco-friendly properties and green living initiatives.' },
          ].map((v, i) => (
            <div key={v.title} className="value-card animate-slideup" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="section-header animate-fadein">
          <span className="page-tag">👥 The People</span>
          <h2>Meet the <span className="gold">Team</span></h2>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div key={m.name} className="team-card animate-slideup" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="team-avatar">{m.avatar}</div>
              <h3>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner animate-fadein">
        <div className="cta-orb" />
        <h2>Join the <span className="gold">EasyRent</span> Community</h2>
        <p>Thousands of renters trust us every day. Start your search today.</p>
        <div className="hero-btns">
          <button className="btn-hero" onClick={() => navigate('/listings')}>Browse Listings</button>
          <button className="btn-hero-outline" onClick={() => navigate('/contact')}>Get In Touch</button>
        </div>
      </section>

    </div>
  );
}
