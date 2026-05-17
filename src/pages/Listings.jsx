import { useState, useMemo } from 'react';
import { properties } from '../data/properties';
import { useLang } from '../context/LanguageContext';
import PropertyCard from '../components/PropertyCard';
import Filters from '../components/Filters';

const DEFAULT_FILTERS = { search: '', type: '', maxPrice: 15000, beds: '', sort: 'newest' };

export default function Listings() {
  const { t } = useLang();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let list = [...properties];

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q));
    }
    if (filters.type) list = list.filter(p => p.type === filters.type);
    if (filters.maxPrice) list = list.filter(p => p.price <= Number(filters.maxPrice));
    if (filters.beds) list = list.filter(p => p.beds >= Number(filters.beds));

    if (filters.sort === 'priceLow') list.sort((a, b) => a.price - b.price);
    else if (filters.sort === 'priceHigh') list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => new Date(b.listed) - new Date(a.listed));

    return list;
  }, [filters]);

  return (
    <div className="listings-page">
      <div className="listings-header">
        <h2>🏘 {t.nav.listings} <span className="count-badge">{results.length}</span></h2>
        <button className="btn-toggle-filters" onClick={() => setShowFilters(v => !v)}>
          {showFilters ? '✕ Hide Filters' : '⚙ Filters'}
        </button>
      </div>

      <div className="listings-layout">
        <div className={`filters-wrap ${showFilters ? 'open' : ''}`}>
          <Filters filters={filters} onChange={setFilters} onReset={() => setFilters(DEFAULT_FILTERS)} />
        </div>

        <div className="properties-grid">
          {results.length === 0
            ? <p className="no-results">{t.noResults}</p>
            : results.map(p => <PropertyCard key={p.id} property={p} />)
          }
        </div>
      </div>
    </div>
  );
}
