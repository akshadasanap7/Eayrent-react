import { useLang } from '../context/LanguageContext';

export default function Filters({ filters, onChange, onReset }) {
  const { t } = useLang();
  const f = t.filters;

  const handle = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <aside className="filters-panel">
      <input
        className="filter-search"
        type="text"
        placeholder={f.search}
        value={filters.search}
        onChange={e => handle('search', e.target.value)}
      />

      <div className="filter-group">
        <label>{f.type}</label>
        <div className="type-btns">
          {['', 'apartment', 'house', 'studio', 'villa'].map(type => (
            <button
              key={type}
              className={filters.type === type ? 'type-btn active' : 'type-btn'}
              onClick={() => handle('type', type)}
            >
              {type === '' ? f.all : f[type]}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>{f.price}: ${Number(filters.maxPrice).toLocaleString()}</label>
        <input
          type="range" min="1000" max="15000" step="500"
          value={filters.maxPrice}
          onChange={e => handle('maxPrice', e.target.value)}
          className="range-slider"
        />
        <div className="range-labels"><span>$1,000</span><span>$15,000</span></div>
      </div>

      <div className="filter-group">
        <label>{f.beds}</label>
        <select value={filters.beds} onChange={e => handle('beds', e.target.value)} className="filter-select">
          <option value="">{f.any}</option>
          {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}+</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>{f.sort}</label>
        <select value={filters.sort} onChange={e => handle('sort', e.target.value)} className="filter-select">
          <option value="newest">{f.newest}</option>
          <option value="priceLow">{f.priceLow}</option>
          <option value="priceHigh">{f.priceHigh}</option>
        </select>
      </div>

      <button className="btn-reset" onClick={onReset}>{f.reset}</button>
    </aside>
  );
}
