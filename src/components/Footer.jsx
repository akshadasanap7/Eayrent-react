import { Link } from 'react-router';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const subscribe = e => {
    e.preventDefault();
    toast.success('Subscribed! Welcome to EasyRent.');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">🏠 Easy<span className="gold">Rent</span></div>
          <p>Your trusted platform for finding the perfect rental home. Verified listings, real landlords, zero hassle.</p>
          <div className="footer-socials">
            {['𝕏', 'in', 'f', '📸'].map((s, i) => <button key={i} className="footer-social-btn">{s}</button>)}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Property Types</h4>
          <Link to="/listings">Apartments</Link>
          <Link to="/listings">Houses</Link>
          <Link to="/listings">Studios</Link>
          <Link to="/listings">Villas</Link>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Get the latest listings and rental tips in your inbox.</p>
          <form onSubmit={subscribe} className="newsletter-form">
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
            <button type="submit">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EasyRent. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
