import { Link } from 'react-router';
import { useState } from 'react';
import toast from 'react-hot-toast';

const socials = [
  { label: 'Twitter / X', icon: '𝕏', href: '#' },
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'LinkedIn', icon: '💼', href: '#' },
  { label: 'Facebook', icon: '📘', href: '#' },
];

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
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">🏠 Easy<span className="brand-gold">Rent</span></Link>
          <p className="footer-tagline">
            Your trusted platform for finding the perfect rental home. Verified listings, real landlords, zero hassle.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="footer-social" title={s.label} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <div className="footer-badge">
            <span>🏆</span>
            <div>
              <strong>#1 Rental Platform</strong>
              <p>New York, 2025</p>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigate</h4>
          <div className="footer-links">
            <Link to="/">🏠 Home</Link>
            <Link to="/listings">🏘 Listings</Link>
            <Link to="/blog">📰 Blog</Link>
            <Link to="/about">👥 About Us</Link>
            <Link to="/contact">📬 Contact</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Property Types</h4>
          <div className="footer-links">
            <Link to="/listings">🏢 Apartments</Link>
            <Link to="/listings">🏡 Houses</Link>
            <Link to="/listings">🛋 Studios</Link>
            <Link to="/listings">🏰 Villas</Link>
          </div>
          <h4 className="footer-heading" style={{ marginTop: '1.5rem' }}>Contact</h4>
          <div className="footer-contact-info">
            <p>📍 123 Rental Ave, New York</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ hello@easyrent.com</p>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-newsletter-desc">
            Get the latest listings, market trends, and rental tips delivered to your inbox weekly.
          </p>
          <form onSubmit={subscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe →</button>
          </form>
          <p className="newsletter-note">🔒 No spam. Unsubscribe anytime.</p>
        </div>
      </div>

      <div className="footer-divider" />

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
