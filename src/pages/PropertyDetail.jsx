import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { properties } from '../data/properties';
import { useLang } from '../context/LanguageContext';
import toast from 'react-hot-toast';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLang();
  const d = t.detail;
  const [saved, setSaved] = useState(false);

  const property = properties.find(p => p.id === Number(id));
  if (!property) return <div className="not-found">Property not found.</div>;

  const { title, type, price, beds, baths, sqft, location, image, status, amenities, description, landlord, phone, listed } = property;

  const handleSave = () => {
    setSaved(true);
    toast.success('Property saved!');
  };

  const handleContact = () => {
    toast.success(`Calling ${landlord}: ${phone}`);
  };

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={() => navigate('/listings')}>{d.back}</button>

      <div className="detail-hero">
        <img src={image} alt={title} />
        <div className="detail-hero-overlay">
          <span className={`badge badge-${status}`}>{status === 'available' ? t.card.available : t.card.rented}</span>
          <span className="badge badge-type">{type}</span>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-main">
          <div className="detail-title-row">
            <h1>{title}</h1>
            <span className="detail-price">${price.toLocaleString()}<small>{t.card.perMonth}</small></span>
          </div>
          <p className="detail-location">📍 {location}</p>

          <div className="detail-stats">
            <div className="stat-box">🛏<strong>{beds}</strong><span>{t.card.beds}</span></div>
            <div className="stat-box">🚿<strong>{baths}</strong><span>{t.card.baths}</span></div>
            <div className="stat-box">📐<strong>{sqft}</strong><span>{t.card.sqft}</span></div>
          </div>

          <div className="detail-section">
            <h3>{d.description}</h3>
            <p>{description}</p>
          </div>

          <div className="detail-section">
            <h3>{d.amenities}</h3>
            <div className="amenities-grid">
              {amenities.map(a => <span key={a} className="amenity-tag">✓ {a}</span>)}
            </div>
          </div>

          <div className="detail-section">
            <h3>{d.location}</h3>
            <p>📍 {location}</p>
            <p className="listed-date">{d.listed} {listed}</p>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="landlord-card">
            <div className="landlord-avatar">{landlord[0]}</div>
            <div>
              <strong>{landlord}</strong>
              <p>{phone}</p>
            </div>
          </div>
          <button className="btn-primary full-width" onClick={handleContact}>{d.contact}</button>
          <button className={`btn-save full-width ${saved ? 'saved' : ''}`} onClick={handleSave}>
            {saved ? '❤ Saved' : `🤍 ${d.save}`}
          </button>
        </div>
      </div>
    </div>
  );
}
