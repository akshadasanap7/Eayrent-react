import { useNavigate } from 'react-router';
import { useLang } from '../context/LanguageContext';

export default function PropertyCard({ property }) {
  const { t } = useLang();
  const navigate = useNavigate();
  const { id, title, type, price, beds, baths, sqft, location, image, status } = property;

  return (
    <div className="property-card" onClick={() => navigate(`/listings/${id}`)}>
      <div className="card-img-wrap">
        <img src={image} alt={title} loading="lazy" />
        <span className={`badge badge-${status}`}>
          {status === 'available' ? t.card.available : t.card.rented}
        </span>
        <span className="badge badge-type">{type}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-location">📍 {location}</p>
        <div className="card-meta">
          <span>🛏 {beds} {t.card.beds}</span>
          <span>🚿 {baths} {t.card.baths}</span>
          <span>📐 {sqft} {t.card.sqft}</span>
        </div>
        <div className="card-footer">
          <span className="card-price">${price.toLocaleString()}<small>{t.card.perMonth}</small></span>
          <button className="btn-primary">{t.card.viewDetails}</button>
        </div>
      </div>
    </div>
  );
}
