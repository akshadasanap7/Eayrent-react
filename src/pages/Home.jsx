import { useNavigate } from 'react-router';
import { useLang } from '../context/LanguageContext';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

const testimonials = [
  { name: 'Sarah Johnson', role: 'Tenant', text: 'Found my dream apartment in just 2 days! The filters are incredibly precise and the process was seamless.', avatar: 'S' },
  { name: 'Marcus Lee', role: 'Landlord', text: 'Listed my property and had 5 qualified inquiries within 24 hours. EasyRent is the best platform out there.', avatar: 'M' },
  { name: 'Priya Patel', role: 'Tenant', text: 'The multilingual support made everything so easy. I could browse in my language and contact landlords directly.', avatar: 'P' },
];

export default function Home() {
  const { t } = useLang();
  const navigate = useNavigate();
  const featured = properties.filter(p => p.status === 'available').slice(0, 3);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />
        <div className="hero-bg-orb orb3" />
        <div className="hero-content animate-fadein">
          <span className="hero-tag">🏆 #1 Rental Platform in New York</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-btns">
            <button className="btn-hero" onClick={() => navigate('/listings')}>{t.hero.cta}</button>
            <button className="btn-hero-outline" onClick={() => navigate('/contact')}>List Your Property</button>
          </div>
          <div className="hero-search-bar">
            <input placeholder="🔍  Search by city, neighborhood..." readOnly onClick={() => navigate('/listings')} />
            <button onClick={() => navigate('/listings')}>Search</button>
          </div>
        </div>
        <div className="hero-float-card animate-float">
          <div className="float-card-inner">
            <span className="float-icon">🏠</span>
            <div><strong>New Listing!</strong><p>Downtown Loft — $2,200/mo</p></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        {[['500+', 'Happy Tenants'], ['8+', 'Properties'], ['3', 'Cities'], ['24/7', 'Support']].map(([val, label]) => (
          <div key={label} className="stat-item animate-fadein">
            <strong>{val}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-section">
        <div className="section-header animate-fadein">
          <span className="page-tag">⚡ Simple Process</span>
          <h2>How <span className="gold">EasyRent</span> Works</h2>
          <p>Find and rent your perfect home in 3 easy steps</p>
        </div>
        <div className="steps-grid">
          {[
            { step: '01', icon: '🔍', title: 'Search & Filter', desc: 'Browse hundreds of verified listings. Filter by price, type, location, and more.' },
            { step: '02', icon: '🏠', title: 'Tour & Compare', desc: 'View detailed property info, photos, amenities, and landlord contacts.' },
            { step: '03', icon: '🔑', title: 'Move In!', desc: 'Contact the landlord directly, sign your lease, and get your keys.' },
          ].map((s, i) => (
            <div key={s.step} className="step-card animate-slideup" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="step-number">{s.step}</div>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="section featured-section">
        <div className="section-header animate-fadein">
          <span className="page-tag">⭐ Hand-Picked</span>
          <h2>Featured <span className="gold">Properties</span></h2>
          <p>Our top available rentals this week</p>
        </div>
        <div className="featured-grid">
          {featured.map((p, i) => (
            <div key={p.id} className="animate-slideup" style={{ animationDelay: `${i * 0.1}s` }}>
              <PropertyCard property={p} />
            </div>
          ))}
        </div>
        <div className="section-cta animate-fadein">
          <button className="btn-hero" onClick={() => navigate('/listings')}>View All Properties →</button>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="section types-section">
        <div className="section-header animate-fadein">
          <span className="page-tag">🏘 Browse By Type</span>
          <h2>Find Your <span className="gold">Property Type</span></h2>
        </div>
        <div className="types-grid">
          {[
            { type: 'apartment', icon: '🏢', label: 'Apartments', count: 2, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
            { type: 'house', icon: '🏡', label: 'Houses', count: 2, img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80' },
            { type: 'studio', icon: '🛋', label: 'Studios', count: 2, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80' },
            { type: 'villa', icon: '🏰', label: 'Villas', count: 2, img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=80' },
          ].map((item, i) => (
            <div key={item.type} className="type-card animate-slideup" style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate('/listings')}>
              <img src={item.img} alt={item.label} />
              <div className="type-card-overlay">
                <span>{item.icon}</span>
                <strong>{item.label}</strong>
                <p>{item.count} listings</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="section-header animate-fadein">
          <span className="page-tag">💬 Reviews</span>
          <h2>What Our <span className="gold">Clients Say</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonial-card animate-slideup" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="stars">★★★★★</div>
              <p>"{t.text}"</p>
              <div className="testimonial-author">
                <div className="t-avatar">{t.avatar}</div>
                <div><strong>{t.name}</strong><span>{t.role}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner animate-fadein">
        <div className="cta-orb" />
        <h2>Ready to Find Your <span className="gold">Dream Home?</span></h2>
        <p>Join thousands of happy renters who found their perfect place on EasyRent.</p>
        <div className="hero-btns">
          <button className="btn-hero" onClick={() => navigate('/listings')}>Browse Listings</button>
          <button className="btn-hero-outline" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </section>

    </div>
  );
}
