import { useState } from 'react';
import toast from 'react-hot-toast';

const faqs = [
  { q: 'How do I list my property on EasyRent?', a: 'Contact us via this form or email hello@easyrent.com. Our team will verify your property and have it live within 24 hours.' },
  { q: 'Is EasyRent free for tenants?', a: 'Yes! Browsing and contacting landlords is completely free for tenants. No hidden fees, ever.' },
  { q: 'How are listings verified?', a: 'Every property goes through our 5-step verification process including photo verification, landlord ID check, and price validation.' },
  { q: 'Can I schedule a property tour?', a: 'Absolutely. Use the Contact Landlord button on any listing to arrange a viewing directly with the landlord.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("✅ Message sent! We'll reply within 24 hours.");
      setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 1400);
  };

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="page-header animate-fadein">
        <span className="page-tag">📬 Get In Touch</span>
        <h1>Contact <span className="brand-gold">EasyRent</span></h1>
        <p>Have questions? Our friendly team is here to help you find your perfect home.</p>
      </div>

      {/* INFO CARDS */}
      <div className="contact-cards animate-fadein">
        {[
          { icon: '📍', title: 'Visit Us', lines: ['123 Rental Ave, Suite 400', 'New York, NY 10001'], color: '#f59e0b' },
          { icon: '📞', title: 'Call Us', lines: ['+1 (555) 123-4567', 'Mon–Fri, 9am–6pm EST'], color: '#3b82f6' },
          { icon: '✉️', title: 'Email Us', lines: ['hello@easyrent.com', 'support@easyrent.com'], color: '#10b981' },
          { icon: '⏰', title: 'Working Hours', lines: ['Mon–Fri: 9am – 6pm', 'Sat: 10am – 4pm'], color: '#8b5cf6' },
        ].map(({ icon, title, lines, color }) => (
          <div key={title} className="contact-info-card animate-slideup">
            <div className="contact-card-icon" style={{ background: `${color}20`, color }}>{icon}</div>
            <h4>{title}</h4>
            {lines.map(l => <p key={l}>{l}</p>)}
          </div>
        ))}
      </div>

      {/* FORM + SIDEBAR */}
      <div className="contact-main-grid">

        {/* FORM */}
        <form className="contact-form animate-slideup" onSubmit={submit}>
          <div className="form-header">
            <h3>Send Us a Message</h3>
            <p>We typically respond within 2–4 business hours.</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@example.com" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label>Subject *</label>
              <select name="subject" value={form.subject} onChange={handle}>
                <option>General Inquiry</option>
                <option>List My Property</option>
                <option>Technical Support</option>
                <option>Partnership</option>
                <option>Press & Media</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us how we can help you..." required />
          </div>

          <button type="submit" className="btn-submit" disabled={sending}>
            {sending
              ? <><span className="spinner" /> Sending...</>
              : '🚀 Send Message'
            }
          </button>
        </form>

        {/* SIDEBAR */}
        <div className="contact-sidebar animate-slideup">

          {/* MAP PLACEHOLDER */}
          <div className="map-placeholder">
            <div className="map-inner">
              <span>🗺️</span>
              <strong>123 Rental Ave</strong>
              <p>New York, NY 10001</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-hero" style={{ display: 'inline-block', marginTop: '0.75rem', textDecoration: 'none', padding: '8px 20px', fontSize: '0.85rem' }}>
                Open in Maps →
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="contact-social-card">
            <h4>Follow Us</h4>
            <div className="contact-socials">
              {[['𝕏', 'Twitter', '#1da1f2'], ['📸', 'Instagram', '#e1306c'], ['💼', 'LinkedIn', '#0077b5'], ['📘', 'Facebook', '#1877f2']].map(([icon, label, color]) => (
                <a key={label} href="#" className="social-link" style={{ '--sc': color }}>
                  <span>{icon}</span>
                  <p>{label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section animate-fadein">
        <div className="section-header">
          <span className="page-tag">❓ FAQ</span>
          <h2>Frequently Asked <span className="brand-gold">Questions</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
              </div>
              {openFaq === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
