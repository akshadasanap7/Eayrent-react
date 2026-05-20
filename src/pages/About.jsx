import { useNavigate } from 'react-router';
import { useLang } from '../context/LanguageContext';

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', avatar: 'A', color: '#f59e0b', bio: '10+ years in real estate tech. Passionate about making renting simple for everyone.' },
  { name: 'Priya Nair', role: 'Head of Product', avatar: 'P', color: '#8b5cf6', bio: 'UX expert focused on building seamless, beautiful rental experiences.' },
  { name: 'James Okafor', role: 'Lead Engineer', avatar: 'J', color: '#3b82f6', bio: 'Full-stack developer who architected EasyRent from the ground up.' },
  { name: 'Sofia Chen', role: 'Customer Success', avatar: 'S', color: '#10b981', bio: 'Dedicated to helping every renter find their perfect home, stress-free.' },
];

const timeline = [
  { year: '2020', title: 'EasyRent Founded', desc: 'Started with a simple idea: make renting stress-free for everyone.' },
  { year: '2021', title: 'First 100 Listings', desc: 'Reached our first milestone with 100 verified properties in New York.' },
  { year: '2022', title: 'Multilingual Launch', desc: 'Added French and Spanish support, opening doors for more renters.' },
  { year: '2023', title: '500+ Happy Tenants', desc: 'Celebrated 500 successful rentals and expanded to 3 cities.' },
  { year: '2025', title: 'Platform Redesign', desc: 'Launched our new platform with advanced filters and instant contact.' },
];

const values = [
  { icon: '🔍', title: 'Transparency', desc: 'No hidden fees. No surprises. Every listing is verified and accurate.' },
  { icon: '🌍', title: 'Inclusivity', desc: 'Multilingual support so everyone can find a home, regardless of language.' },
  { icon: '⚡', title: 'Speed', desc: 'Real-time listings and instant landlord contact. Find a home fast.' },
  { icon: '🔒', title: 'Trust', desc: 'Every landlord and property is verified before listing on our platform.' },
  { icon: '💬', title: '24/7 Support', desc: 'Our team is always here to help you at every step of your rental journey.' },
  { icon: '♻️', title: 'Sustainability', desc: 'We promote eco-friendly properties and green living initiatives.' },
];

export default function About() {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* HERO HEADER */}
      <div className="about-hero animate-fadein">
        <div className="about-hero-content">
          <span className="page-tag">🏠 Our Story</span>
          <h1>{t.about.title}</h1>
          <p>{t.about.desc}</p>
          <div className="hero-btns">
            <button className="btn-hero" onClick={() => navigate('/listings')}>Browse Listings</button>
            <button className="btn-hero-outline" onClick={() => navigate('/contact')}>Get In Touch</button>
          </div>
        </div>
        <div className="about-hero-stats">
          {[['500+', 'Happy Tenants', '😊'], ['200+', 'Landlords', '🏠'], ['8+', 'Properties', '🏘'], ['4.9★', 'Rating', '⭐']].map(([val, label, icon]) => (
            <div key={label} className="about-stat-card">
              <span className="about-stat-icon">{icon}</span>
              <strong>{val}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section className="section">
        <div className="mission-grid animate-slideup">
          <div className="mission-img">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" alt="Our Mission" />
            <div className="mission-img-badge">
              <strong>Est. 2020</strong>
              <span>New York City</span>
            </div>
          </div>
          <div className="mission-text">
            <span className="page-tag">🎯 Our Mission</span>
            <h2>Making Renting <span className="brand-gold">Simple & Transparent</span></h2>
            <p>EasyRent was founded in 2020 with one goal: eliminate the stress of finding a rental. We believe everyone deserves a home they love, found without hassle.</p>
            <p>We connect verified landlords with quality tenants through a transparent, multilingual platform built for the modern renter.</p>
            <div className="mission-points">
              {['✅ 100% Verified Listings', '✅ Direct Landlord Contact', '✅ No Hidden Fees', '✅ Multilingual Support'].map(p => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="section-header animate-fadein">
          <span className="page-tag">📅 Our Journey</span>
          <h2>How We <span className="brand-gold">Got Here</span></h2>
        </div>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={item.year} className={`timeline-item animate-slideup${i % 2 === 0 ? ' left' : ' right'}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="section-header animate-fadein">
          <span className="page-tag">💡 What We Stand For</span>
          <h2>Our <span className="brand-gold">Core Values</span></h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
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
          <h2>Meet the <span className="brand-gold">Team</span></h2>
          <p>The passionate people behind EasyRent</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div key={m.name} className="team-card animate-slideup" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="team-avatar" style={{ background: m.color }}>{m.avatar}</div>
              <h3>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <p>{m.bio}</p>
              <div className="team-socials">
                <button>𝕏</button>
                <button>💼</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="section awards-section animate-fadein">
        <div className="section-header">
          <span className="page-tag">🏆 Recognition</span>
          <h2>Awards & <span className="brand-gold">Achievements</span></h2>
        </div>
        <div className="awards-grid">
          {[
            { icon: '🥇', title: 'Best Rental Platform 2024', org: 'NYC Real Estate Awards' },
            { icon: '⭐', title: '4.9/5 Customer Rating', org: 'Trustpilot Reviews' },
            { icon: '🚀', title: 'Top Startup 2023', org: 'TechCrunch Disrupt' },
            { icon: '🌍', title: 'Most Inclusive Platform', org: 'PropTech Global' },
          ].map(a => (
            <div key={a.title} className="award-card">
              <span>{a.icon}</span>
              <strong>{a.title}</strong>
              <p>{a.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner animate-fadein">
        <div className="cta-orb" />
        <div className="cta-orb cta-orb2" />
        <h2>Join the <span className="brand-gold">EasyRent</span> Community</h2>
        <p>Thousands of renters trust us every day. Start your search today.</p>
        <div className="hero-btns">
          <button className="btn-hero" onClick={() => navigate('/listings')}>Browse Listings</button>
          <button className="btn-hero-outline" onClick={() => navigate('/contact')}>Get In Touch</button>
        </div>
      </section>

    </div>
  );
}
