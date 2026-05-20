import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent! We\'ll reply within 24 hours.');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact-page">
      <div className="page-header animate-fadein">
        <span className="page-tag">📬 Get In Touch</span>
        <h1>Contact <span className="gold">EasyRent</span></h1>
        <p>Have questions? Our team is here to help you find your perfect home.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info animate-slideup">
          {[
            { icon: '📍', title: 'Our Office', lines: ['123 Rental Ave, Suite 400', 'New York, NY 10001'] },
            { icon: '📞', title: 'Phone', lines: ['+1 (555) 123-4567', 'Mon–Fri, 9am–6pm EST'] },
            { icon: '✉️', title: 'Email', lines: ['hello@easyrent.com', 'support@easyrent.com'] },
          ].map(({ icon, title, lines }) => (
            <div key={title} className="contact-info-card">
              <div className="contact-icon">{icon}</div>
              <div>
                <strong>{title}</strong>
                {lines.map(l => <p key={l}>{l}</p>)}
              </div>
            </div>
          ))}

          <div className="contact-socials">
            {['Twitter', 'Instagram', 'LinkedIn', 'Facebook'].map(s => (
              <button key={s} className="social-btn">{s}</button>
            ))}
          </div>
        </div>

        <form className="contact-form animate-slideup" onSubmit={submit}>
          <h3>Send a Message</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@example.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={handle} placeholder="How can we help?" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us more..." required />
          </div>
          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? <span className="spinner" /> : '🚀 Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
