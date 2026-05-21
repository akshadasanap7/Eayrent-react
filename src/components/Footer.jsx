import { Link } from 'react-router';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');

  const subscribe = e => {
    e.preventDefault();
    if (!email) return;
    toast.success('🎉 Subscribed! Welcome to EasyRent.');
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* TOP WAVE */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--footer-bg)" />
        </svg>
      </div>

      <div className="footer-inner">
        {/* BRAND COL */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">🏠</span>
            <span>Easy<span className="brand-gold">Rent</span></span>
          </Link>
          <p className="footer-tagline">
            Your trusted platform for finding the perfect rental home. Verified listings, real landlords, zero hassle.
          </p>
          <div className="footer-socials">
            {[
              { icon: '𝕏', label: 'Twitter', color: '#1da1f2' },
              { icon: '📸', label: 'Instagram', color: '#e1306c' },
              { icon: '💼', label: 'LinkedIn', color: '#0077b5' },
              { icon: '📘', label: 'Facebook', color: '#1877f2' },
            ].map(s => (
              <a key={s.label} href="#" className="footer-social-btn" title={s.label} aria-label={s.label}
                style={{ '--sc': s.color }}>
                {s.icon}
              </a>
            ))}
          </div>
          <div className="footer-award">
            <span>🏆</span>
            <div>
              <strong>#1 Rental Platform</strong>
              <p>New York · 2025</p>
            </div>
          </div>
        </div>

        {/* NAVIGATE */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigate</h4>
          <nav className="footer-nav">
            <Link to="/">🏠 Home</Link>
            <Link to="/listings">🏘 Listings</Link>
            <Link to="/blog">📰 Blog</Link>
            <Link to="/about">👥 About Us</Link>
            <Link to="/contact">📬 Contact</Link>
          </nav>
        </div>

        {/* PROPERTY TYPES + CONTACT */}
        <div className="footer-col">
          <h4 className="footer-heading">Property Types</h4>
          <nav className="footer-nav">
            <Link to="/listings">🏢 Apartments</Link>
            <Link to="/listings">🏡 Houses</Link>
            <Link to="/listings">🛋 Studios</Link>
            <Link to="/listings">🏰 Villas</Link>
          </nav>
          <h4 className="footer-heading footer-heading-gap">Contact Us</h4>
          <div className="footer-contact">
            <span>📍 123 Rental Ave, New York, NY</span>
            <span>📞 +1 (555) 123-4567</span>
            <span>✉️ hello@easyrent.com</span>
            <span>⏰ Mon–Fri, 9am–6pm EST</span>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-newsletter-desc">
            Get the latest listings, market trends, and rental tips delivered weekly to your inbox.
          </p>
          <form onSubmit={subscribe} className="footer-newsletter-form">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe →</button>
          </form>
          <p className="footer-newsletter-note">🔒 No spam. Unsubscribe anytime.</p>

          <div className="footer-badges">
            <div className="footer-badge-item">⭐ 4.9/5 Rating</div>
            <div className="footer-badge-item">✅ Verified</div>
            <div className="footer-badge-item">🔒 Secure</div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 <strong>EasyRent</strong>. All rights reserved. Built with ❤️ in New York.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
